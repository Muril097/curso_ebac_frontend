// criação da classe "mãe"
function Caneta(modelo, cor, ponta, carga, condicao) {
    // atributos
    this.modelo = modelo;
    this.cor = cor;
    this.ponta = ponta;
    this.carga = carga;
    this.condicao = condicao;
};

// configurando o display
Caneta.prototype.displayInfo = function() {
    console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Ponta: ${this.ponta} Carga: ${this.carga}, Condição: ${this.condicao}`);
};

// instanciando os objetos
const c1 = new Caneta('bic cristal', 'azul', '0.5', '70%', 'usada')
const c2 = new Caneta('bic cristal', 'vermelha', '1.0', '90%', 'usada')
const c3 = new Caneta('bic cristal', 'preta', '0.5', '30%', 'desgastada')
const c4 = new Caneta('bic cristal', 'verde', '1', '100%', 'nova')

// resultado
c1.displayInfo();
c2.displayInfo();
c3.displayInfo();
c4.displayInfo();