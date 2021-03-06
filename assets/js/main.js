/* Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];
let containerCard = document.querySelector(".container_card");
for (let i = 0; i < icons.length; i++) {
    containerCard.insertAdjacentHTML("beforeend",
        `
    <div class="card">
        <i class="${icons[i].family} ${icons[i].prefix}${icons[i].name} icona"></i>
        <span class="card_descr"> ${icons[i].name}</span>
    </div>
    `)
}
//Milestone 2 Coloriamo le icone per tipo

icons.forEach((icon, index) => {
    let iconHtml = document.getElementsByClassName("icona")[index];
    if (icon.type === "user") {
        iconHtml.classList.add("purple")
    } else if (icon.type === "vegetable") {
        iconHtml.classList.add("orange")
    } else if (icon.type === "animal") {
        iconHtml.classList.add("blue")
    }
})

//Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone 