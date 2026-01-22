import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Hijo } from './hijo/hijo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Alumnos, Alumno } from '../servicios/alumnos';

@Component({
  selector: 'app-comunicacion',
  standalone: true,
  imports: [Hijo, CommonModule, FormsModule, RouterLink],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css',
})
export class Comunicacion {

  private router = inject(Router);
  private alumnoService = inject(Alumnos);

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

  listaAlumnos:any[] = this.alumnoService.getAlumnos()
}
