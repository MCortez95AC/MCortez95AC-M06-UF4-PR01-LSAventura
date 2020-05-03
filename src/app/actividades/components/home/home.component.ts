import { Component, OnInit } from '@angular/core';
import { ActividadesServiceService } from '../../service/actividades-service.service';
import { Actividad } from '../../models/Actividad';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public actividades$: Observable<Actividad[]>;
 /*  public actividades: {
    id: string,
    nombre:string,
    fecha:Date,
    prediccion:string
  }[] = [...]; */

  constructor( 
    private actividadesService: ActividadesServiceService
    ) { }

  ngOnInit(): void {
    /* this.actividadesService.getActivities().subscribe( response => {
      console.log('id:', response);}) */

    this.actividades$ = this.actividadesService.getActivities()
    
  }

}
