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
    this.zonas = [
      {
        nombre: 'TULTITLÁN',
        datos: this.sesionesTultitlan,
        get total() {
          return this.datos.reduce((acc: number, s: SesionPorIp) => acc + s.historial[s.historial.length - 1], 0);
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
          return this.datos.reduce((acc: number, s: SesionPorIp) => acc + s.historial[s.historial.length - 1], 0);
        },        
        get ipSeleccionada() {
          return thisRef.selectedIpQueretaro;
        },
        selector: (ip: string) => {
          thisRef.selectedIpQueretaro = thisRef.selectedIpQueretaro === ip ? null : ip;
        }
      }
    ];
  
    const thisRef = this; // 👈 este truco permite acceder al `this` original dentro de los objetos
  }
  

  getTotal(data: SesionPorIp[]): number {
    return data.reduce(
      (acc, s) => acc + s.historial[s.historial.length - 1],
      0
    );
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
        type: 'line', // 🔁 ESENCIAL: obliga a Chart.js a pintarlo como línea
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
}
