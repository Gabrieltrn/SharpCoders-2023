import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../../modelo/aluno';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  // obter a funcao cadastar aluno que esta no comp principal
  @Output() cadastrarAluno = new EventEmitter<Aluno>();

  // função para executar o cadastro
  cadastrar():void{
    this.cadastrarAluno.emit(this.formulario.value as Aluno)
  }

  // formulario
  formulario = new FormGroup({
    nome: new FormControl (''),
    nota1: new FormControl (''),
    nota2: new FormControl ('')
  })
}
