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
    this.catBdService.getBySite('tultitlan').subscribe({
      next: (data) => this.basesTultitlan = data,
      error: (err) => console.error('Error Tultitlán', err)
    });

    this.catBdService.getBySite('queretaro').subscribe({
      next: (data) => this.basesQueretaro = data,
      error: (err) => console.error('Error Querétaro', err),
      complete: () => this.cargando = false
    });
  }

  // Getters para KPIs de Tultitlán
  get totalTultitlan(): number {
    return this.basesTultitlan.length;
  }

  get okTultitlan(): number {
    return this.basesTultitlan.filter(b => b.estado_val === 'OK').length;
  }

  get advertenciasTultitlan(): number {
    return this.basesTultitlan.filter(b => b.estado_val === 'ADVERTENCIA').length;
  }

  get criticosTultitlan(): number {
    return this.basesTultitlan.filter(b => b.estado_val === 'CRITICO').length;
  }

  // Getters para KPIs de Querétaro
  get totalQueretaro(): number {
    return this.basesQueretaro.length;
  }

  get okQueretaro(): number {
    return this.basesQueretaro.filter(b => b.estado_val === 'OK').length;
  }

  get advertenciasQueretaro(): number {
    return this.basesQueretaro.filter(b => b.estado_val === 'ADVERTENCIA').length;
  }

  get criticosQueretaro(): number {
    return this.basesQueretaro.filter(b => b.estado_val === 'CRITICO').length;
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
