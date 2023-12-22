import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // VAriavel de texto
  texto: string = 'Aprendendo a trabalhar com o Jasmine e o Karma';

  // funcao para retornar a soma
  soma(n1: number, n2: number): number {
    return n1 + n2;
  }

  // Função para retornar um objeto do tipo pessoa
  retornarPessoa(obj: Pessoa): Pessoa {
    return obj;
  }
}
