"use strict";
const img = document.getElementById("person-img");
const autor = document.getElementById("author");
const trabalho = document.getElementById("job");
const info = document.getElementById("info");
const voltar = document.querySelector(".prev-btn");
const proximo = document.querySelector(".next-btn");
const aleatorio = document.querySelector(".random-btn");
let itemAtual = 0;
const pessoas = [
    {
        id: 1,
        nome: 'João',
        trabalho: 'Desenvolvedor',
        descricao: 'João é um desenvolvedor experiente em Java e TypeScript',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jcgf9aDrS5-371IlptjN5833cNc3Ug3a9w&usqp=CAU'
    },
    {
        id: 2,
        nome: 'LumberJack',
        trabalho: 'Designer Gráfico',
        descricao: 'LumberJack é um designer gráfico criativo e apaixonado por branding',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJisuMU8SSGqs5hRc75qUKKdCUSfJhvNunQ&usqp=CAU'
    },
    {
        id: 3,
        nome: 'Tyler',
        trabalho: 'Gerente de Projeto',
        descricao: 'Tyler é um gerente de projeto experiente em gerenciamento de equipes e planejamento de projetos',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSElmzd5BIMbjcDOTQaturvY1v-UCU14IFw&usqp=CAU'
    },
    {
        id: 4,
        nome: 'Ana',
        trabalho: 'Data Scientist',
        descricao: 'Ana é uma cientista de dados apaixonada por explorar e entender grandes conjuntos de dados',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRff2APydVSAeLy8-pCA7NUU1jpj7fGYpxPNg&usqp=CAU'
    }
];
window.addEventListener("DOMcontentLoad", () => {
    const item = pessoas[itemAtual];
    img.src = item.img;
    autor.textContent = item.nome;
    trabalho.textContent = item.trabalho;
    info.textContent = item.descricao;
});
function showPessoas(pessoa) {
    const item = pessoas[pessoa];
    img.src = item.img;
    autor.textContent = item.nome;
    trabalho.textContent = item.trabalho;
    info.textContent = item.descricao;
}
proximo.addEventListener("click", () => {
    itemAtual++;
    if (itemAtual > pessoas.length - 1) {
        itemAtual = 0;
    }
    showPessoas(itemAtual);
});
voltar.addEventListener("click", () => {
    itemAtual--;
    if (itemAtual < 0) {
        itemAtual = pessoas.length - 1;
    }
    showPessoas(itemAtual);
});
aleatorio.addEventListener('click', () => {
    itemAtual = Math.floor(Math.random() * pessoas.length);
    showPessoas(itemAtual);
});
