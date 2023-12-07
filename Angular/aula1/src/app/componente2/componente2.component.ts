import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  // EXIBIR TEXTO
  exibirTexto:boolean = false;

  // FUNÇÃO PARA EXIBIR OU OCULTAR O TEXTO
  visibilidadeTexto():void{
    this.exibirTexto = !this.exibirTexto;
  }
}
