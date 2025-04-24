import { Component, Input } from '@angular/core';

interface SesionIP {
  ip: string;
  componente: string;
  sesiones: number;
}

@Component({
  selector: 'app-tabla-sesiones',
  templateUrl: './tabla-sesiones.component.html',
  styleUrls: ['./tabla-sesiones.component.scss']
})
export class TablaSesionesComponent {
  @Input() sesiones: SesionIP[] = [];

  ordenColumna: keyof SesionIP = 'ip';
  ascendente: boolean = true;

  ordenarPor(columna: keyof SesionIP): void {
    if (this.ordenColumna === columna) {
      this.ascendente = !this.ascendente;
    } else {
      this.ordenColumna = columna;
      this.ascendente = true;
    }

    this.sesiones.sort((a, b) => {
      const valorA = a[columna];
      const valorB = b[columna];

      if (typeof valorA === 'string') {
        return this.ascendente
          ? valorA.localeCompare(valorB as string)
          : (valorB as string).localeCompare(valorA);
      }

      return this.ascendente
        ? (valorA as number) - (valorB as number)
        : (valorB as number) - (valorA as number);
    });
  }

  obtenerIconoOrden(columna: keyof SesionIP): string {
    if (this.ordenColumna !== columna) return '';
    return this.ascendente ? '↑' : '↓';
  }
}
