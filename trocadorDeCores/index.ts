const hexDecimal: (string | number) [] = [1,2,3,4,5,6,'A','B','C','D','E','F']
const btn = document.querySelector("#btn") as HTMLElement 
const bgcolor = document.querySelector('#colorH') as HTMLElement


btn.addEventListener("click",() => {
    let color: string = '#'
    for (let i = 0; i < 6; i++) {
        color += hexDecimal[randomNumber()]
    }
    bgcolor.textContent = color
    document.body.style.backgroundColor = color
})


function randomNumber(): number {
    return Math.floor(Math.random() * hexDecimal.length)
}