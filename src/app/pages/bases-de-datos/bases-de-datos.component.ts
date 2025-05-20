import { Component, OnInit } from '@angular/core';
import { CatBd, CatBdService } from 'src/app/services/cat-bd.service';

@Component({
  selector: 'app-bases-de-datos',
  templateUrl: './bases-de-datos.component.html',
  styleUrls: ['./bases-de-datos.component.scss']
})
export class BasesDeDatosComponent implements OnInit {
  basesTultitlan: CatBd[] = [];
  basesQueretaro: CatBd[] = [];
  cargando: boolean = true;
  modalAbierto = false;

  constructor(private catBdService: CatBdService) {}

  ngOnInit(): void {
    let pendientes = 2;

    const finalizarCarga = () => {
      pendientes--;
      if (pendientes === 0) this.cargando = false;
    };

    this.catBdService.getBySite('tultitlan').subscribe({
      next: (data) => this.basesTultitlan = data,
      error: (err) => {
        console.error('Error Tultitlán', err);
        this.basesTultitlan = [];
      },
      complete: finalizarCarga
    });

    this.catBdService.getBySite('queretaro').subscribe({
      next: (data) => this.basesQueretaro = data,
      error: (err) => {
        console.error('Error Querétaro', err);
        this.basesQueretaro = [];
      },
      complete: finalizarCarga
    });
  }


  // KPIs Tultitlán
  get totalTultitlan(): number {
    return this.basesTultitlan.length;
  }

  totalSesiones(bds: CatBd[]): number {
    return bds.reduce((acc, bd) => acc + (bd.sesiones_activas || 0), 0);
  }

  totalBloqueos(bds: CatBd[]): number {
    return bds.reduce((acc, bd) => acc + (bd.bloqueos || 0), 0);
  }

  totalConsultasLentas(bds: CatBd[]): number {
    return bds.reduce((acc, bd) => acc + (bd.consultas_lentas || 0), 0);
  }

  // KPIs Querétaro
  get totalQueretaro(): number {
    return this.basesQueretaro.length;
  }

  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }

  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }

  getClaseEstado(estado: string): string {
    if (estado === 'CRITICO') return 'estado-critico';
    if (estado === 'ADVERTENCIA') return 'estado-warning';
    return 'estado-ok';
  }
}
