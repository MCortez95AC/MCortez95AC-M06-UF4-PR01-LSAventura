import { Actividad } from './models/Actividad';

export class ActividadesComponent implements OnInit{
    public activdades = [];
    selectActividad: Actividad;

    constructor(private firestoreService: FireStoreService){}

    ngOnInit(): void {
        this.firestoreService.getActividades().subscribe(actividadeSnapshot) =>{
            this.activdades = [];
            actividadesSnapshot.forEach(element => {
                const timestap = (element.playload.doc.data().fecha.seconds)*1000;
                const fecha = new DataCue(timestap);
                const obj: Actividad = {
                    id: element.playload.doc.id,
                    nombre: element.playload.doc.data().nombre,
                    fecha: fecha,
                    prediccion: element.playload.doc.data().prediccion
                }
                this.activdades.push(obj);

            });

        });

    }
    onSelect(actividad: Actividad): void{
        this.selectActividad = actividad;
    }
}