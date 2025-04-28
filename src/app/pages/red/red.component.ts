import { Component, OnInit } from '@angular/core';
import { SERVIDORES_TLT, SERVIDORES_QRO } from 'src/app/services/dummy-red-smc';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {
  kpisTultitlan = [
    { titulo: 'Estado VPN', valor: 'Activo', unidad: null, color: 'green' },
    { titulo: 'Puertos Abiertos', valor: '2/2', unidad: 'puertos', color: 'green' },
    { titulo: 'URLs Internas', valor: '100', unidad: '%', color: 'green' },
    { titulo: 'URLs Externas', valor: '100', unidad: '%', color: 'green' }
  ];
  
  kpisQueretaro = [
    { titulo: 'Estado VPN', valor: 'Activo', unidad: null, color: 'green' },
    { titulo: 'Puertos Abiertos', valor: '2/2', unidad: 'puertos', color: 'green' },
    { titulo: 'URLs Internas', valor: '100', unidad: '%', color: 'green' },
    { titulo: 'URLs Externas', valor: '100', unidad: '%', color: 'green' }
  ];

  servidoresTultitlan = SERVIDORES_TLT;
  servidoresQueretaro = SERVIDORES_QRO;

  modalAbierto = false;

  ngOnInit(): void {}

  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }

  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }
}
