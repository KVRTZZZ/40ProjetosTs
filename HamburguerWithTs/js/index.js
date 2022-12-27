"use strict";
const containerH = document.querySelector(".containerH");
containerH.addEventListener("click", (x) => {
    const target = x.target;
    target.classList.toggle('change');
});
