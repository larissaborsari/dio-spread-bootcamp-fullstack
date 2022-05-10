//função que não usa this

function semThis(array) {
    const newArray = [];
    array.map(item => {
        console.log("item", item);
        console.log("multiplicacao", item*2);
        const multi = item * 2;
        newArray.push(multi);
    });
    return newArray;
}

const nums = [2, 4, 6, 8, 10];

console.log(semThis(nums));