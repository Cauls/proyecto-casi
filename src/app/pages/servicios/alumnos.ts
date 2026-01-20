import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Alumnos {
  getAlumnos(){
    return this.listaAlumnos
  }

  listaAlumnos:any[] = [
    {
      id: 1,
      nombre:"Hans Burger",
      email:"email.emailez@gmail.com",
      progreso:25,
    },
    {
      id: 2,
      nombre:"Sofia ramirez",
      email:"email.emailez@gmail.com",
      progreso:0,
    },
    {
      id: 3,
      nombre:"Liam Wong",
      email:"email.emailez@gmail.com",
      progreso:0,
    },
    {
      id: 4,
      nombre:"Emma Johnson",
      email:"email.emailez@gmail.com",
      progreso:25,
    },
    {
      id: 5,
      nombre:"Carlos Vega",
      email:"email.emailez@gmail.com",
      progreso:25,
    }
  ]
}
