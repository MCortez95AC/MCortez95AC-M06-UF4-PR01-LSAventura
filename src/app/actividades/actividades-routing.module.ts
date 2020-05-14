import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { LoginUsuarioGuard } from './core/guards/loginUsuario/login-usuario.guard';
import { CrudComponent } from './modules/crud/components/crud/crud.components';

import { canActivateLogin } from './modules/crud/components/crud/crud.component';
import { createActividades } from './modules/crud/components/crud/crud.component';

import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  {path: 'actividades', component: HomeComponent},
  {path: 'notFound', component: NotFoundComponent},
  { path : 'login', component: LoginComponent, canActive : [LoginUsuarioGuard] },
  { path : 'crud', component: CrudComponent, canActive: [LoginUsuarioGuard] },
  { path : '**', redirecTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule { }
