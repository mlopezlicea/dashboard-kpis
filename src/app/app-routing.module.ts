import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardPrincipalComponent } from './pages/dashboard-principal/dashboard-principal.component';
import { UsuariosSesionesComponent } from './pages/usuarios-sesiones/usuarios-sesiones.component';
import { RendimientoAplicacionComponent } from './pages/rendimiento-aplicacion/rendimiento-aplicacion.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardPrincipalComponent } 
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
