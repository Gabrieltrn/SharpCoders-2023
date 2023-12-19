import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlunoService } from '../../servico/aluno.service';
import { Aluno } from '../../Modelos/aluno';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css',
})
export class AlunoComponent {
  // vetor de alunos
  alunos: Aluno[] = [];

  // formulario

  formulario = new FormGroup({
    nome: new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl(''),
  });

  // Construtor
  constructor(private servico: AlunoService) {}

  // Após renderizar o componente
  ngOnInit() {
    this.servico.selecionar().subscribe((dados) => (this.alunos = dados));
  }

  // metodo para cadastrar alunos
  cadastrar(): void {
    this.servico
      .cadastrar(this.formulario.value as Aluno)
      .subscribe((aluno) => this.alunos.push(aluno));

    // limpar o formulario
    this.formulario.reset();
  }
  remover(id: number): void {
    this.servico.remover(id).subscribe((remover) => {
      let positionAluno = this.alunos.findIndex((aluno) => aluno.id === id);
      this.alunos.splice(positionAluno, 1);
    });
  }
}
