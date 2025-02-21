
const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruuum");
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2004,
    anoFabricacao: 2003,
    acelerar: function() {
        console.log("vrum");
    }
}

const pessoa = {
    nome: 'murilo',
    anos: 27,
    comprimento: function() {
        console.log("olá");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar")
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", "2020", "2019");
const carroDaMaria2 = new Carro("Ka", "Ford", "2004", "2003");

console.log(carroDoJoao2);
console.log(carroDaMaria2);

// acessando atributos
console.log(carroDaMaria2.fabricante);
console.log(carroDoJoao2["modelo"])

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome'); 
// não declarei pessoa ou nome na função acima, apesar de estar funcional

pessoa['sobrenome'] = 'braga';

Object.freeze(pessoa);

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}


pessoa.nome = 'joao';
console.log(pessoa['nome']);


console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));