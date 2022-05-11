const lista = [
    {
        nome: 'sabao em pó',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        nome:'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1); //mostra em qual etapa está
        console.log({prev}); // mostra o saldo anterior
        console.log({current}); // mostra o saldo atual
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
