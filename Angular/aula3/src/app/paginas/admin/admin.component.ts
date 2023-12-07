import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  // construtor
  constructor(private rota:Router){}

  // funcao para sair do sistema
  sair():void{
    // excluir o email do localstorage
    localStorage.removeItem('email')

    this.rota.navigateByUrl('/login')
    
  }

 
  
}
