"use strict";
const hexDecimal = [1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector("#btn");
const bgcolor = document.querySelector('#colorH');
btn.addEventListener("click", () => {
    let color = '#';
    console.log(color);
    for (let i = 0; i < 6; i++) {
        color += hexDecimal[randomNumber()];
    }
    bgcolor.textContent = color;
    document.body.style.backgroundColor = color;
});
function randomNumber() {
    return Math.floor(Math.random() * hexDecimal.length);
}
