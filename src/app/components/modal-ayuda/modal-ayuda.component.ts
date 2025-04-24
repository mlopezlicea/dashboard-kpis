import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-ayuda',
  templateUrl: './modal-ayuda.component.html',
  styleUrls: ['./modal-ayuda.component.scss']
})
export class ModalAyudaComponent {
  @Input() visible: boolean = false;
  @Input() titulo: string = 'Ayuda';
  @Input() mensaje: string = 'Este es un mensaje de ayuda.';
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
