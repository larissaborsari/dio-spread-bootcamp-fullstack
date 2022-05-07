//deve receber uma string
// verifica se é a mesma coisa ao contrário


//solução que só recebe uma palavra, sem espaço
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
};

console.log(verificaPalindromo("gato"));

//solução 2
function verificaPalindromo2(string2) {
    if(!string2) return "string inexistente";

    for (let i = 0; i < string2.length / 2; i++) {
        if(string2[i] !== string2[string2.length -1 -i]){
            return false;
        }
    }

    return true;
};

console.log(verificaPalindromo2("ovo"));


