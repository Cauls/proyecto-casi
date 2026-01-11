import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directivas',
  imports: [CommonModule],
  templateUrl: './directivas.html',
  styleUrl: './directivas.css',
})

export class Directivas {
  activo:boolean = false;
  color:string = "rojo";
  listaClientes:any[] = [
    {
      nombre:"Hans Burger",
      puesto:"10x Developer",
      cantidad:863.45,
      estado:"Aprobado",
      fecha:"06/10/2020"
    },
    {
      nombre:"Sofia ramirez",
      puesto:"UI Designer",
      cantidad:540,
      estado:"Pendiente",
      fecha:"07/15/2020"
    },
    {
      nombre:"Liam Wong",
      puesto:"Project Manager",
      cantidad:1200.99,
      estado:"Aprobado",
      fecha:"08/01/2020"
    },
    {
      nombre:"Emma Johnson",
      puesto:"QA Engineer",
      cantidad:320.5,
      estado:"Pendiente",
      fecha:"08/20/2020"
    },
    {
      nombre:"Carlos Vega",
      puesto:"Backend Developer",
      cantidad:980.75,
      estado:"Aprobado",
      fecha:"09/05/2020"
    }
  ]
}
