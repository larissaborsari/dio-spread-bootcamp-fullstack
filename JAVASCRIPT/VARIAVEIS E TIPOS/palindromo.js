//deve receber uma string
// verifica se é a mesma coisa ao contrário


//solução que só recebe uma palavra, sem espaço
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
};

console.log(verificaPalindromo("gato"));



