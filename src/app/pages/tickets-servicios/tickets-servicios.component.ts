import { Component } from '@angular/core';
import { TICKETS } from 'src/app/services/dummy-tickets';
import { Chart } from 'chart.js';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tickets-servicios',
  templateUrl: './tickets-servicios.component.html',
  styleUrls: ['./tickets-servicios.component.scss'],
})
export class TicketsServiciosComponent implements AfterViewInit {
  modalAbierto = false;
  tickets = TICKETS;

  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }

  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }

  ngAfterViewInit(): void {
    this.crearGraficas();
  }

  crearGraficas(): void {
    new Chart('serviciosChart', {
      type: 'doughnut',
      data: {
        labels: ['Operativos', 'Caídos'],
        datasets: [{
          data: [8, 2], // Ejemplo: 8 servicios arriba, 2 abajo
          backgroundColor: ['#4CAF50', '#F44336'],
        }]
      }
    });

    new Chart('apisChart', {
      type: 'doughnut',
      data: {
        labels: ['Operativas', 'Fuera de servicio'],
        datasets: [{
          data: [3, 1], // Ejemplo: 3 APIs buenas, 1 caída
          backgroundColor: ['#2196F3', '#FF9800'],
        }]
      }
    });
  }
}
