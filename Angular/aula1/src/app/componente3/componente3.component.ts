import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component {
    // variavel de media 
  media:number = 8;

  // variavel de linguagem
  linguagem:string = 'css';

  // vetor de nomes
  nomes:string[] = ['Gabriel','Mayara','Manuella','Simba','Catarina','Filó']
}

