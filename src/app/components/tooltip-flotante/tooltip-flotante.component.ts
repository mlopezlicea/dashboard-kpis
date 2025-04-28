import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-flotante',
  templateUrl: './tooltip-flotante.component.html',
  styleUrls: ['./tooltip-flotante.component.scss']
})
export class TooltipFlotanteComponent {
  @Input() visible: boolean = false;
  @Input() mensaje: string = '';
  @Input() x: number = 0;
  @Input() y: number = 0;
}
