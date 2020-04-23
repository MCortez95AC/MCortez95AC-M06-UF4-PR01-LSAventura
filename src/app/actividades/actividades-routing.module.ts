import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component'

const routes: Routes = [
  /* {path: 'actividades', component: HomeComponent,},
  {path: 'notFound', component: NotFoundComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update', component: UpdateComponent} */

  { path: 'actividades', component: HomeComponent,
    children:[
          { path: 'create', component: CreateComponent },
          { path: 'update', component: UpdateComponent }
    ]
  },
  { path: 'notFound', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule { }
