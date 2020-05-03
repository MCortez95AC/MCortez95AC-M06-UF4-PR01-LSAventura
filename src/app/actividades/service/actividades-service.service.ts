import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actividad } from '../models/Actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesServiceService {
  actividades: AngularFireList<any>;

  constructor(
    private firestore: AngularFirestore, private db: AngularFireDatabase
  ) { }

  public getActivities():Observable<Actividad[]>{
    return this.firestore.collection('actividades')
    .snapshotChanges()
    .pipe(
      map(actions => 
        actions.map(a => {
          const data = a.payload.doc.data() as Actividad;
          const id = a.payload.doc.id;
          return { id, ...data}
        }))
    )
  }
}
