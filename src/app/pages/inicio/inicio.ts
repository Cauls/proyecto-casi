import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})

export class Inicio {
  interpolacion:string = "Interpolacion";
  logo =  '/assets/logo-litterator.jpeg';
  nombre:string = ''; 
  mostrarMensaje(){
    alert('El boton funciona')
  }
}
