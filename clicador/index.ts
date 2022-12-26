const contador = document.querySelector("#contador") as HTMLDivElement;
const btns = document.querySelectorAll('.button') as NodeListOf<HTMLButtonElement>;

let count: number  = 0

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.currentTarget !== null) {
            const element = e.currentTarget as HTMLElement
            const types = element.classList;
            if (types.contains('D')) {
                count--
            } else if (types.contains('A')) {
                count++
            }else {
                count = 0
            }
            if (count < 0) {
                contador.style.color = 'red'
            }
            if (count > 0) {
                contador.style.color = 'green'
            }
            if (count === 0) {
                contador.style.color = 'yellow'
            }
        }
        contador.textContent = count.toString();
    })
})