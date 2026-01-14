import { Component } from '@angular/core';
import { Padre } from './padre/padre';
import { Hijo } from './hijo/hijo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comunicacion',
  imports: [Hijo, CommonModule, Padre],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css',
})
export class Comunicacion {

}
