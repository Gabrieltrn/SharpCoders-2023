import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // constructor
  constructor(private rota:Router){

  }

  // Formulario
  formulario = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
    senha:new FormControl('', Validators.required),
  })

  // funcão para autenticar
  autenticar():void{
    if(this.formulario.value.email === 'gabrieltrn.dev@gmail.com'&& this.formulario.value.senha === '123') {
      
      // adicionar o email no localstorage
      localStorage.setItem('email',this.formulario.value.email);
      
      // redirecionamento
      this.rota.navigateByUrl('/admin');
    } else {
      alert('E-mail ou senha incorretos.')
    }
  }

}
