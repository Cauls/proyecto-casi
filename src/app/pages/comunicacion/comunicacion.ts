import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Hijo } from './hijo/hijo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Alumno, Store } from './store';
import { Alumnos } from '../servicios/alumnos';

@Component({
  selector: 'app-comunicacion',
  imports: [Hijo, CommonModule, FormsModule, RouterLink],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css',
})
export class Comunicacion {
  constructor(
    private router : Router,
    private alumnoService : Alumnos
  ){}
  showModal = false;

  mensajeDelPadre:string = '';
  mensajeDelHijo:string = '';

  openModal(){
    console.log('Modal abierto');
    this.showModal = true;
  }

  closeModal(){
    console.log('Modal cerrado');
    this.showModal = false;
  }

  recibirMensajeDelHijo(event:any){
    this.mensajeDelHijo = event;
  }

  verDetalle(alumno:Alumno){
    this.router.navigate(['/detalle', alumno.id])
  }

  store = inject(Store)

  listaAlumnos:any[] = this.alumnoService.getAlumnos()
}
