let cells = document.querySelectorAll('.col.order-sm-3');
console.log(cells);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function generateList() {
    let hiddenImages = cells.length/2;
    let randomValues = [];
    let tempNumber = 0;
    for (let i=0; i < hiddenImages; i++) {
        tempNumber = Math.floor((Math.random()*100) + 1);
        randomValues.push(tempNumber);
    }
    randomValues.push(...randomValues);
    shuffle(randomValues);
    shuffle(randomValues);
    console.log('rv', randomValues);
    return randomValues
}

let listOfNumbers = generateList();

for (cell of cells) {
    cell.addEventListener('click', markCell);
}

function markCell(event) {
    let index = this.dataset.cardNumber;
    console.log(`box ${index} clicked`);
    let cardFace = this.innerHTML;
    console.log(cardFace);
    this.innerText = listOfNumbers[index];
}

