import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-principal',
  templateUrl: './dashboard-principal.component.html',
  styleUrls: ['./dashboard-principal.component.scss']
})
export class DashboardPrincipalComponent {
  modalAbierto = false;
  
  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }
  
  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }
}
