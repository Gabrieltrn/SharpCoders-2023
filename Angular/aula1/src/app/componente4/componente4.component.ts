import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente4.component.html',
  styleUrl: './componente4.component.css'
})
export class Componente4Component {

  // variavel para armazenar um texto
  texto:string = '';

  // variaveis para armazenar os inputs do formulario
  email:string='';
  senha:string='';

}
