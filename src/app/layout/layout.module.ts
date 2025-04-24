import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router'; // 👈 NECESARIO

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule // 👈 IMPORTA ESTO AQUÍ
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
