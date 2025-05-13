import { Component, OnInit } from '@angular/core';
import { SESIONES_SMC_TLT } from 'src/app/services/dummy-sesiones-smc-tlt';
import { SESIONES_SMC_QRO } from 'src/app/services/dummy-sesiones-smc-qro';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

interface SesionPorIp {
  ip: string;
  componente: string;
  color: string;
  historial: number[];
}

@Component({
  selector: 'app-usuarios-sesiones',
  templateUrl: './usuarios-sesiones.component.html',
  styleUrls: ['./usuarios-sesiones.component.scss']
})
export class UsuariosSesionesComponent implements OnInit {
  sesionesTultitlan: SesionPorIp[] = SESIONES_SMC_TLT;
  sesionesQueretaro: SesionPorIp[] = SESIONES_SMC_QRO;

  selectedIpTultitlan: string | null = null;
  selectedIpQueretaro: string | null = null;

  zonas: any[] = [];

  ngOnInit(): void {
    const thisRef = this;

    this.zonas = [
      {
        nombre: 'TULTITLÁN',
        datos: this.sesionesTultitlan,
        get total() {
          return this.datos.reduce((acc: number, s: SesionPorIp) => acc + s.historial.at(-1)!, 0);
        },
        get promedio() {
          const valores = this.datos.map((d: SesionPorIp) => d.historial.at(-1)!);
          return Math.round(valores.reduce((a: number, b: number) => a + b, 0) / valores.length);
        },
        get maximo() {
          return Math.max(...this.datos.flatMap((d: SesionPorIp) => d.historial));
        },
        get ipSeleccionada() {
          return thisRef.selectedIpTultitlan;
        },
        selector: (ip: string) => {
          thisRef.selectedIpTultitlan = thisRef.selectedIpTultitlan === ip ? null : ip;
        }
      },
      {
        nombre: 'QUERÉTARO',
        datos: this.sesionesQueretaro,
        get total() {
          return this.datos.reduce((acc: number, s: SesionPorIp) => acc + s.historial.at(-1)!, 0);
        },
        get promedio() {
          const valores = this.datos.map((d: SesionPorIp) => d.historial.at(-1)!);
          return Math.round(valores.reduce((a: number, b: number) => a + b, 0) / valores.length);
        },
        get maximo() {
          return Math.max(...this.datos.flatMap((d: SesionPorIp) => d.historial));
        },
        get ipSeleccionada() {
          return thisRef.selectedIpQueretaro;
        },
        selector: (ip: string) => {
          thisRef.selectedIpQueretaro = thisRef.selectedIpQueretaro === ip ? null : ip;
        }
      }
    ];    
  }

  getChartDataFiltered(data: SesionPorIp[], selectedIp: string | null): {
    labels: string[];
    datasets: ChartDataset<'line'>[];
  } {
    const filtered = selectedIp ? data.filter(d => d.ip === selectedIp) : data;

    return {
      labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'],
      datasets: filtered.map(d => ({
        label: d.ip,
        data: d.historial,
        type: 'line',
        fill: true,
        tension: 0.4,
        borderColor: d.color,
        backgroundColor: this.hexToRgba(d.color, 0.2),
        pointRadius: 0,
        borderWidth: 2
      }))
    };
  }

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    elements: {
      line: { tension: 0.4 }
    },
    scales: {
      x: {
        stacked: false,
        ticks: { color: '#fff' },
        grid: { color: '#333' }
      },
      y: {
        stacked: false,
        beginAtZero: true,
        ticks: { color: '#fff' },
        grid: { color: '#333' }
      }
    }
  };

  hexToRgba(hex: string, alpha: number): string {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  modalAbierto = false;

  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }
  
  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }

  getGaugeColor(latencia: number): string {
  if (latencia < 60) return '#4caf50';     // verde
  if (latencia < 120) return '#ff9800';    // amarillo
  return '#f44336';                        // rojo
}

getConcurrenciaActual(datos: any[]): number {
  return datos.reduce((acc, ip) => {
    const ultimoValor = ip.historial[ip.historial.length - 1] || 0;
    return acc + ultimoValor;
  }, 0);
}

getIpSeleccionadaInfo(zonaIndex: number): any {
  const ipSeleccionada = this.zonas[zonaIndex].ipSeleccionada;
  return this.zonas[zonaIndex].datos.find((d: any) => d.ip === ipSeleccionada);
}

getErroresHttpZona(index: number): number {
  return this.zonas[index].datos.reduce((acc: number, d: any) => acc + (d.erroresHttp || 0), 0);
}

getCaidasZona(index: number): number {
  return this.zonas[index].datos.reduce((acc: number, d: any) => acc + (d.caidasRecientes || 0), 0);
}

getFallosZona(index: number): number {
  return this.zonas[index].datos.reduce((acc: number, d: any) => acc + (d.intentosFallidos || 0), 0);
}

getInactivasZona(index: number): number {
  return this.zonas[index].datos.filter((d: any) => (d.historial.at(-1) || 0) === 0).length;
}


}
  
  