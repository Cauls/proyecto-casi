import { Component } from '@angular/core';
import { Hijo } from './hijo/hijo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comunicacion',
  imports: [Hijo, CommonModule, FormsModule],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css',
})
export class Comunicacion {
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
}
