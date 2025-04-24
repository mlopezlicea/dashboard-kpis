import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-boton-ayuda',
  templateUrl: './boton-ayuda.component.html',
  styleUrls: ['./boton-ayuda.component.scss']
})
export class BotonAyudaComponent {
  @Output() clickAyuda = new EventEmitter<void>();
  @Input() tooltip: string = 'Ver ayuda';

  abrirAyuda(): void {
    this.clickAyuda.emit();
  }
}
