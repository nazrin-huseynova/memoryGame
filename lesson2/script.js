const images = ["candy 6.png", "candy 7.jpg", "candy 8.jpg", "candy 9.jpg"];
let gameCards = [...images, ...images].sort(() => Math.random() - 0.5);
let selectedCards = [];
let matchedCount = 0;

function show(id) {
    let element = document.getElementById(id);
    if (element.classList.contains("flipped") || selectedCards.length === 2) return;

    let imgName = gameCards[id - 1];
    let backFace = element.querySelector('.card-back');
    backFace.innerHTML = `<img src="./${imgName}">`;

    element.classList.add("flipped");
    selectedCards.push({element, imgName});

    if (selectedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    let [card1, card2] = selectedCards;

    if (card1.imgName === card2.imgName) {
        setTimeout(() => {
            card1.element.style.visibility = "hidden";
            card2.element.style.visibility = "hidden";
            matchedCount += 2;
            selectedCards = [];
            if (matchedCount === gameCards.length) alert("Congurulations!");
        }, 600);
    } else {
        setTimeout(() => {
            card1.element.classList.remove("flipped");
            card2.element.classList.remove("flipped");
            selectedCards = [];
        }, 1000);
    }
}
