// Importações
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Pessoa } from './pessoa';

// Descriçã do Teste Unitário
describe('AppComponent', () => {
  // Inicialização
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // Validar a variável texto
  it('Validar variável de texto', () => {
    // Fixture
    const Fixture = TestBed.createComponent(AppComponent);

    // Obter as variáveis e funções do componente
    const componente = Fixture.componentInstance;

    // Validação
    expect(componente.texto).toEqual(
      'Aprendendo a trabalhar com o Jasmine e o Karma'
    );
  });

  // Validar a Função Soma
  it('Validar função soma', () => {
    // Fixture
    const Fixture = TestBed.createComponent(AppComponent);

    // Obter as variáveis e funções do componente
    const componente = Fixture.componentInstance;

    // Executar a função e obter o retorno
    let retorno = componente.soma(5, 6);

    // validar
    expect(typeof retorno).toBe('number');
  });

  // Validar o retorno da função retornarPessoa
  it('Função retornar pessoa', () => {
    // Fixture
    const Fixture = TestBed.createComponent(AppComponent);

    // Obter as variáveis e funções do componente
    const componente = Fixture.componentInstance;

    //  Criar um objeto do tipo pessoa
    const obj = new Pessoa('Gabriel', 31);

    // Executar função
    const retorno = componente.retornarPessoa(obj);

    // VAlidar
    expect(obj instanceof Pessoa).toBeTrue();
  });
});
