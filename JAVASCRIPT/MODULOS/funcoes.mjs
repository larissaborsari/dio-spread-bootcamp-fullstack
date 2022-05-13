//modulos-> arquivos js que tem a capacidade de exportar e importar info de outros arquivos do mesmo tipo

function mostraIdade(nome, idade) {
    return `A idade de ${nome} é ${idade}`;
}

function mostraCidade(nome, cidade) {
    return `A cidade de ${nome} é ${cidade}`;
}

function mostraHobby(nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`;
}

export {
    mostraIdade,
    mostraCidade,
    mostraHobby
};