import { Component, OnInit } from '@angular/core';
import { INFRA_SMC_TLT, INFRA_SMC_QRO, InfraMetrica } from 'src/app/services/dummy-infraestructura-smc';

@Component({
  selector: 'app-infraestructura-monitoreo',
  templateUrl: './infraestructura-monitoreo.component.html',
  styleUrls: ['./infraestructura-monitoreo.component.scss']
})
export class InfraestructuraMonitoreoComponent implements OnInit {
  infraTultitlan: InfraMetrica[] = INFRA_SMC_TLT;
  infraQueretaro: InfraMetrica[] = INFRA_SMC_QRO;

  // Modal de ayuda
  modalAbierto: boolean = false;

  // Modal de alertas críticas
  modalCriticosAbierto: boolean = false;
  alertasCriticas: { servidor: string, descripcion: string }[] = [];
  zonaCriticaSeleccionada: string = '';

  // Tooltip flotante
  tooltipVisible: boolean = false;
  tooltipMensaje: string = '';
  tooltipX: number = 0;
  tooltipY: number = 0;

  ngOnInit(): void {}

  // Modal de ayuda
  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }

  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }

  // Modal de alertas críticas
  abrirModalCriticos(zona: 'TULTITLAN' | 'QUERETARO'): void {
    this.zonaCriticaSeleccionada = zona;
    const datos = zona === 'TULTITLAN' ? this.infraTultitlan : this.infraQueretaro;

    this.alertasCriticas = [];

    datos.forEach(s => {
      if (s.cpu >= 90) this.alertasCriticas.push({ servidor: s.servidor, descripcion: 'CPU crítica (>90%)' });
      if (s.ram >= 90) this.alertasCriticas.push({ servidor: s.servidor, descripcion: 'RAM crítica (>90%)' });
      if (s.fs >= 90) this.alertasCriticas.push({ servidor: s.servidor, descripcion: 'File System crítico (>90%)' });
      if (s.estadoServicios === 'Caído') this.alertasCriticas.push({ servidor: s.servidor, descripcion: 'Servicio caído' });
      if (!s.tieneMetricas) this.alertasCriticas.push({ servidor: s.servidor, descripcion: 'Sin métricas disponibles' });
      if (s.latenciaRed > 60) this.alertasCriticas.push({ servidor: s.servidor, descripcion: 'Latencia crítica (>60ms)' });
    });

    this.modalCriticosAbierto = true;
  }

  cerrarModalCriticos(): void {
    this.modalCriticosAbierto = false;
  }

  // Tooltip flotante
  mostrarTooltip(event: MouseEvent, mensaje: string): void {
    this.tooltipVisible = true;
    this.tooltipMensaje = mensaje;
    this.tooltipX = event.clientX + 10;
    this.tooltipY = event.clientY + 10;
  }

  ocultarTooltip(): void {
    this.tooltipVisible = false;
  }

  // Lógicas de clases CSS
  getClaseAlarma(valor: number): string {
    if (valor >= 90) return 'estado-critico';
    if (valor >= 71) return 'estado-warning';
    return 'estado-ok';
  }

  getClaseServicios(estado: string): string {
    if (estado === 'Caído') return 'estado-critico';
    if (estado === 'Degradado') return 'estado-warning';
    return 'estado-ok';
  }

  getClaseMetricas(tiene: boolean): string {
    return tiene ? 'estado-ok' : 'estado-critico';
  }

  getClaseLatencia(latencia: number): string {
    if (latencia > 60) return 'estado-critico';
    if (latencia > 30) return 'estado-warning';
    return 'estado-ok';
  }

  // KPIs contadores
  contarCriticas(lista: InfraMetrica[]): number {
    let total = 0;
  
    lista.forEach(s => {
      if (s.cpu >= 90) total++;
      if (s.ram >= 90) total++;
      if (s.fs >= 90) total++;
      if (s.estadoServicios === 'Caído') total++;
      if (!s.tieneMetricas) total++;
      if (s.latenciaRed > 60) total++;
    });
  
    return total;
  }
  

  getClaseContadorCritico(lista: InfraMetrica[]): string {
    const count = this.contarCriticas(lista);
    if (count >= 3) return 'contador-critico';
    if (count >= 1) return 'contador-warning';
    return 'contador-ok';
  }
}
