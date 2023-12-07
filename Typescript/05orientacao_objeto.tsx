// classe
class Produto {
    // atributo
    private nome:string;
    private valor:number;

    // construtor
    public constructor (nome:string,valor:number){
        this.nome = nome;
        this.valor = valor;
    }
}

// instanciar o objeto da calsse Produto
const p = new Produto ('iphone 15',7000);