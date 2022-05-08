function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "João",
    idade: 27
}

const animal1 = {
    nome: "Lua",
    idade: 1,
    raca: "husky siberiano"
}

console.log(calculaIdade.call(pessoa2, 24));
console.log(calculaIdade.apply(animal1, [7]));