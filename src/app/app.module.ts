import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module'; 
import { NgChartsModule } from 'ng2-charts';
import { ModalAyudaComponent } from './components/modal-ayuda/modal-ayuda.component';
import { BotonAyudaComponent } from './components/boton-ayuda/boton-ayuda.component';
import { TablaSesionesComponent } from './components/tabla-sesiones/tabla-sesiones.component';
import { UsuariosSesionesComponent } from './pages/usuarios-sesiones/usuarios-sesiones.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalAyudaComponent,
    BotonAyudaComponent,
    TablaSesionesComponent,
    UsuariosSesionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
