const input = document.getElementById("input") as HTMLImageElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});