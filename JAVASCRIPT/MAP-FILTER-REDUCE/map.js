
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

const nums = [1, 2];


function mapComThis(arr, thisArg) {
    return arr.map(item => {
        return item * thisArg.value;

    });
}

const metodo1 = mapComThis(nums, maca);
const metodo2 = mapComThis(nums, laranja);

console.log(metodo1);
console.log(metodo2);

