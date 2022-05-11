function somaTudo(array) {
    return array.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const arr = [1, 2];

console.log(somaTudo(arr));

console.log(arr);