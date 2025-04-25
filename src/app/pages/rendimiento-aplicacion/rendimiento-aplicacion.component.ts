import { Component, OnInit } from '@angular/core';
import {
  RENDIMIENTO_SMC_TLT,
  RENDIMIENTO_SMC_QRO,
  RendimientoComponente
} from 'src/app/services/dummy-rendimiento-smc';
import { ChartOptions, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-rendimiento-aplicacion',
  templateUrl: './rendimiento-aplicacion.component.html',
  styleUrls: ['./rendimiento-aplicacion.component.scss']
})
export class RendimientoAplicacionComponent implements OnInit {
  rendimientoTultitlan: RendimientoComponente[] = RENDIMIENTO_SMC_TLT;
  rendimientoQueretaro: RendimientoComponente[] = RENDIMIENTO_SMC_QRO;

  selectedTultitlan: string | null = null;
  selectedQueretaro: string | null = null;

  kpisTultitlan = [
    { titulo: 'Errores HTTP 5xx', valor: 4, color: 'red' },
    { titulo: 'Carga Promedio', valor: '3.2', unidad: 's', color: 'yellow' }
  ];

  kpisQueretaro = [
    { titulo: 'Errores HTTP 4xx', valor: 9, color: 'yellow' },
    { titulo: 'Tiempo Respuesta', valor: '580', unidad: 'ms', color: 'green' }
  ];

  modalAbierto = false;

  ngOnInit(): void {}

  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }

  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }

  getChartData(data: RendimientoComponente[], seleccionado: string | null): {
    labels: string[];
    datasets: ChartDataset<'line'>[];
  } {
    const filtrados = seleccionado ? data.filter(c => c.componente === seleccionado) : data;

    return {
      labels: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'],
      datasets: filtrados.map(c => ({
        label: c.componente,
        data: c.historial,
        type: 'line',
        fill: true,
        tension: 0.4,
        borderColor: c.color,
        backgroundColor: this.hexToRgba(c.color, 0.2),
        pointRadius: 0,
        borderWidth: 2
      }))
    };
  }

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
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
        ticks: { color: '#fff' },
        grid: { color: '#333' }
      },
      y: {
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
