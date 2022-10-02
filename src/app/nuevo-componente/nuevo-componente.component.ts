import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {
 
  nombre= 'navis code';
  peliculas = [ 
    'una peli',
    'dos pelis',
    'tres pelis',
  ];
  series = [
    {nombre: 'unaserie',
    puntuacion: 9,
  
  },
  {nombre: 'otraserie',
  puntuacion: 9,

}
  ];
 
  cines:any = [];
  fantasias:any=[];

  constructor(service: PeliculasService) {
    
    this.fantasias =service.getFantasia();
   }

  ngOnInit(): void {
    this.cines = this.getCines()
  }

  getProfesion(): string{
    return 'front end'
  }
 getCines(){
  return[
  { nombre:'youn poep',
    puntuacion:5,
},
{
  nombre:'arregle con .any',
  puntuacion:10,
},
];
 }
}
