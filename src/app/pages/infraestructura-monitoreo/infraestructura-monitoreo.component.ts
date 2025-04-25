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

  modalAbierto = false;

  abrirModalAyuda(): void {
    this.modalAbierto = true;
  }

  cerrarModalAyuda(): void {
    this.modalAbierto = false;
  }

  ngOnInit(): void {}

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

  contarCriticas(lista: InfraMetrica[]): number {
    return lista.filter(s =>
      s.cpu >= 90 ||
      s.ram >= 90 ||
      s.fs >= 90 ||
      s.estadoServicios === 'Caído' ||
      !s.tieneMetricas ||
      s.latenciaRed > 60
    ).length;
  }
  
  getClaseContadorCritico(lista: InfraMetrica[]): string {
    const count = this.contarCriticas(lista);
    if (count >= 3) return 'contador-critico';
    if (count >= 1) return 'contador-warning';
    return 'contador-ok';
  }
  
  
}
