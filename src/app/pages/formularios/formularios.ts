import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
  standalone: true
})
export class Formularios { 
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  enviar(){
    console.log(this.loginForm.value)
  }

}
