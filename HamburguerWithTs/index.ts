const containerH = document.querySelector(".containerH") as HTMLDivElement

containerH.addEventListener("click",(x) => {
    const target = x.target as HTMLElement
    target.classList.toggle('change')
} )