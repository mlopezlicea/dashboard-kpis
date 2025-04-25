/**
 * Componente que representa una barra de título reutilizable.
 * Muestra un título a la izquierda junto con un botón de ayuda.
 * Emite un evento cuando se hace clic en el botón de ayuda.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-titulo',
  templateUrl: './barra-titulo.component.html',
  styleUrls: ['./barra-titulo.component.scss']
})
export class BarraTituloComponent {
  @Input() titulo: string = 'Título';
  @Output() clickAyuda = new EventEmitter<void>();

  emitirAyuda(): void {
    this.clickAyuda.emit();
  }
}
