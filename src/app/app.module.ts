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
import { BarraTituloComponent } from './components/barra-titulo/barra-titulo.component';
import { RendimientoAplicacionComponent } from './pages/rendimiento-aplicacion/rendimiento-aplicacion.component';
import { DashboardPrincipalComponent } from './pages/dashboard-principal/dashboard-principal.component';
import { InfraestructuraMonitoreoComponent } from './pages/infraestructura-monitoreo/infraestructura-monitoreo.component';
import { TicketsServiciosComponent } from './pages/tickets-servicios/tickets-servicios.component';
import { TooltipFlotanteComponent } from './components/tooltip-flotante/tooltip-flotante.component';
import { RedComponent } from './pages/red/red.component';
import { BasesDeDatosComponent } from './pages/bases-de-datos/bases-de-datos.component';
import { HttpClientModule } from '@angular/common/http';


import { NgxGaugeModule } from 'ngx-gauge';
import { LucideAngularModule } from 'lucide-angular';
import { icons } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    ModalAyudaComponent,
    BotonAyudaComponent,
    TablaSesionesComponent,
    UsuariosSesionesComponent,
    BarraTituloComponent,
    RendimientoAplicacionComponent,
    DashboardPrincipalComponent,
    InfraestructuraMonitoreoComponent,
    TicketsServiciosComponent,
    TooltipFlotanteComponent,
    RedComponent,
    BasesDeDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    NgChartsModule,
    NgxGaugeModule,
    LucideAngularModule.pick({
      Cpu: icons.Cpu,
      MemoryStick: icons.MemoryStick,
      HardDrive: icons.HardDrive,
      ServerCog: icons.ServerCog,
      Ban: icons.Ban,
      Globe: icons.Globe
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
