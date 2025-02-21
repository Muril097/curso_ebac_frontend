// criação do objeto
function Pessoa(nome) {
    this.nome = nome;
    this.dizOI = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    // getters (recupera valores)
    this.getSalario = function() {
        return _salario;
    }

    // setters (atribui valores)
    this.setSalario = function(valor) {
            if (typeof valor === 'number') {
                _salario = valor;
            }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1 ;
        _salario = novoSalario;
    }

    Pessoa.call(this, nome)
}

// gerente
function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15 ;
        this.setSalario(novoSalario);
    }
}

// estagiario
function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07 ;
        this.setSalario(novoSalario);
    }
}

// instancia do objeto
const funcionario1 = new Funcionario('Maria', 'dev front-end',  5000);
const funcionario2 = new Estagiario('Joao');
const funcionario3 = new Gerente('Léo');

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())

