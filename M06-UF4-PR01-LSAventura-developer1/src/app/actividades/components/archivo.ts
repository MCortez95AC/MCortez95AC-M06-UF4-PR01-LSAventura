import { ActividadesComponent } from "./createActividades.components"

{
    path: 'actividades',
    component: ActividadesComponent,
    canDeactive: [CanDeactivateUpdateActividadGuard],
    children:[
        {path: 'update', component: UpdateActividadComponent, canDeactive:[CanDeactivateUpdateActividadGuard]},
        {path: 'create', component: CreateActividadComponent, canActivate:[CanActivateGuard]},
    ]
},
{path: '', redirecTo: 'actividades', pathMatch:'full'},