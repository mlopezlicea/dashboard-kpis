import { Component, Input, Output, EventEmitter, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-ayuda',
  templateUrl: './modal-ayuda.component.html',
  styleUrls: ['./modal-ayuda.component.scss']
})
export class ModalAyudaComponent implements AfterContentInit {
  @Input() visible: boolean = false;
  @Input() titulo: string = 'Ayuda';
  @Input() mensaje: string = 'Este es un mensaje de ayuda.';
  @Output() cerrar = new EventEmitter<void>();

  hasContent: boolean = false;

  @ContentChild('modalContent', { static: false, read: ElementRef }) content!: ElementRef;

  ngAfterContentInit(): void {
    this.hasContent = !!this.content;
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
