import { Component } from '@angular/core';
import { PostagemService } from '../../servicos/postagem.service';
import { Postagem } from '../../modelos/Postagem';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [NgFor],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {
p: any;

  // Constructor
  constructor(private servicoPostagem:PostagemService){}

    // Vetor de postagens
    postagens:Postagem[] = [];

    // ao iniciar (o componente é criado)
    ngOnInit(){
      this.listarPostagens();
    }

    // função para listar as postagens
    listarPostagens():void{
      this.servicoPostagem.listarPostagens()
      .subscribe(retorno=> {this.postagens=retorno;})
    }
  
}
