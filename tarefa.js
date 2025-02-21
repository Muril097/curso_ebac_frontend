function Animal(tipo, domestico) {
    this.tipo = tipo;
    this.domestico = domestico;
}

function Cao(nome, tipo, domestico, raca, cor, idade){
    this.nome = nome;
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;

    Animal.call(this, tipo, domestico)
}

function Gato(nome, tipo, domestico, raca, cor, idade){
    Cao.call(this, nome, tipo, domestico, raca, cor, idade);
}

function Passaro(nome, tipo, domestico, raca, cor, idade){
    Cao.call(this, nome, 'ave', domestico, raca, cor, idade);
}

const pet1 = new Cao('spike','mamifero', false,'caramelo','bege',7)
const pet2 = new Cao('toby','mamifero', true,'pastor_alemão','marrom',5)
const pet3 = new Cao('nick','mamifero', false,'salsicha','marrom',2)

const pet4 = new Gato('jamico','mamifero', true,'siamês','preto_Branco',4)
const pet5 = new Gato('caju','mamifero', true,'bobtail','laranja',3)
const pet6 = new Gato('gigiba','mamifero', true,'azulRusso','cinza',1)

const pet7 = new Passaro('zeca','mamifero', true,'papagaio','verde',1)
const pet8 = new Passaro(undefined,'', false,'pardal','marrom',undefined)
const pet9 = new Passaro(undefined,'', false,'bemTeVi','amarelo',undefined)

console.log(pet1)
console.log(pet2)
console.log(pet3)
console.log(pet4)
console.log(pet5)
console.log(pet6)
console.log(pet7)
console.log(pet8)
console.log(pet9)