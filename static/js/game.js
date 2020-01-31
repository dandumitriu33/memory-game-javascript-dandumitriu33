function main() {
    let cells = document.querySelectorAll('.col.order-sm-3');
    console.log(cells);
    let listOfNumbers = generateListAwesome();
    addClickEvent();


    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function generateList() {
        let hiddenImages = cells.length / 2;
        let randomValues = [];
        let tempNumber = 0;
        for (let i = 0; i < hiddenImages; i++) {
            tempNumber = Math.floor((Math.random() * 100) + 1);
            randomValues.push(tempNumber);
        }
        randomValues.push(...randomValues);
        shuffle(randomValues);
        shuffle(randomValues);
        console.log('rv', randomValues);
        return randomValues
    }

    function generateListAwesome() {
        let hiddenImages = cells.length / 2;
        let randomValues = [];
        let fullAwesomeList = ['<i style="font-size: 70px" class="fab fa-affiliatetheme"></i>',
                                '<i style="font-size: 70px" class="fas fa-air-freshener"></i>',
                                '<i style="font-size: 70px" class="fas fa-allergies"></i>',
                                '<i style="font-size: 70px" class="fas fa-ambulance"></i>',
                                '<i style="font-size: 70px" color="green" class="fab fa-android"></i>',
                                '<i style="font-size: 70px" class="fab fa-apple"></i>',
                                '<i style="font-size: 70px" class="fas fa-atom"></i>',
                                '<i style="font-size: 70px" class="fas fa-bell"></i>',
                                '<i style="font-size: 70px" class="fas fa-biohazard"></i>',
                                '<i style="font-size: 70px" class="fab fa-bitcoin"></i>',
                                '<i style="font-size: 70px" class="fas fa-bone"></i>',
                                '<i style="font-size: 70px" class="fas fa-bug"></i>',
                                '<i style="font-size: 70px" class="fas fa-cookie-bite"></i>',
                                '<i style="font-size: 70px" class="fas fa-cloud-upload-alt"></i>', //14
                                '<i style="font-size: 70px" class="fas fa-clock"></i>',
                                '<i style="font-size: 70px" class="fas fa-cat"></i>',
                                '<i style="font-size: 70px" class="fas fa-dragon"></i>',
                                '<i style="font-size: 70px" class="fas fa-dollar-sign"></i>',
                                '<i style="font-size: 70px" class="fab fa-dev"></i>',
                                '<i style="font-size: 70px" class="far fa-eye"></i>'
        ];
        for (let i=0; i<hiddenImages; i++) {
            randomValues.push(fullAwesomeList[i]);
        }
        randomValues.push(...randomValues);
        shuffle(randomValues);
        shuffle(randomValues);
        return randomValues;
    }


    function addClickEvent() {
        for (cell of cells) {
            cell.addEventListener('click', markCell);
            cell.setAttribute('id', cell.dataset.cardNumber);
        }
    }


    let flippedCards = 0;
    let firstFlipped = false;
    let firstFlippedIndex = -1;
    let secondFlipped = false;
    let secondFlippedIndex = -1;
    let firstValue = 0;
    let secondValue = 0;
    let revertFirst;
    let revertSecond;

    function markCell(event) {
        if (flippedCards === 2) {
            revertFirst = document.getElementById(`${firstFlippedIndex}`);
            revertSecond = document.getElementById(`${secondFlippedIndex}`);
            revertFirst.innerHTML = '<i class="far fa-image" aria-hidden="true"></i>';
            revertSecond.innerHTML = '<i class="far fa-image" aria-hidden="true"></i>';
            flippedCards = 0;
            firstFlippedIndex = -1;
            secondFlippedIndex = -1;
            firstFlipped = false;
            secondFlipped = false;
        }
        console.log('event lon: ', listOfNumbers);
        let index = this.dataset.cardNumber;
        console.log('event index: ', index);
        // console.log('this innerHTML: ', this.innerHTML);
        if (this.innerHTML === '<i class="far fa-image" aria-hidden="true"></i>') {
            this.innerHTML = listOfNumbers[index];
            if (firstFlipped === false) {
                flippedCards = 1;
                firstFlipped = true;
                firstFlippedIndex = index;
                firstValue = listOfNumbers[index];
                console.log('entered firstValue: ', firstValue);
            } else if (secondFlipped === false) {
                    flippedCards = 2;
                    secondFlipped = true;
                    secondFlippedIndex = index;
                    secondValue = listOfNumbers[index];
                    console.log('entered secondValue: ', secondValue);
                    if (secondValue === firstValue) {
                        firstFlipped = false;
                        secondFlipped = false;
                        flippedCards = 0;
                        firstFlippedIndex = -1;
                        secondFlippedIndex = -1;
                    } else {
                        flippedCards = 2;
                    }
            }

        }
    }



} // closes main()

main()
