import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../modelos/Postagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  // URLS
  private urlPostagem:string = 'https://jsonplaceholder.typicode.com/posts';

  // metodo para retornar todas as postagens
  listarPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.urlPostagem);
  }

  // Observable:(executa requisições em periodos de tempo) ele vai verificar e fazer requisiçoes (ex a cada 15 segundos ir na api e retornar uma informação)
  // Subscribe: (Recebe o retorno das requisições)toda vez que o Observable retornar algo diferente ele faz alguma alteração ou atualização
}
