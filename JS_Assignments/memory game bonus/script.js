var CardsArray = ["images/1.gif","images/2.gif","images/3.gif","images/4.gif","images/5.gif" , "images/6.gif","images/1.gif","images/2.gif","images/3.gif","images/4.gif","images/5.gif" , "images/6.gif"]

CardsArray.sort(function() {0.5-Math.random})

const grid = document.querySelector(".grid")
const resultDesplay = document.querySelector("#result")

var cardsChosen = [];
var cardsChosenId = [];
const Cardswon = [];

//create the board
function createBoard () {
    for(var i=0 ; i<CardsArray.length;i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/Moon.gif')
        card.setAttribute('data-id',i);
        grid.appendChild(card);
        card.addEventListener('click' , flipCard)
    }
}

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    var cardSrc = CardsArray[cardId];

    cardsChosen.push(cardId)
    cardsChosenId.push(CardsArray[cardId])
    this.setAttribute('src',CardsArray[cardId])

    if(cardsChosen.length == 2){
        setTimeout(checkFormatch , 200)
    }

}

//check for matches
function checkFormatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    const cardOneId = cardsChosen[0]
    const cardTwoId = cardsChosen[1]

    console.log(cardsChosen[0])
    console.log(cardsChosen[1])
    if((optionOneId == optionTwoId) && (cardOneId == cardTwoId)){
        alert('you have clicked the same image')
        cards[cardOneId].setAttribute('src','images/Moon.gif')
        cards[cardTwoId].setAttribute('src','images/Moon.gif')
       
    }
    else if (optionOneId == optionTwoId) 
    {
        alert("greet you found the match")
        Cardswon.push(cardsChosen);
    }
    else{
        alert('sorry , try again')
        cards[cardOneId].setAttribute('src','images/Moon.gif')
        cards[cardTwoId].setAttribute('src','images/Moon.gif')
        
    }

    cardsChosen =[]
    cardsChosenId =[];
    resultDesplay.textContent = Cardswon.length;

    if(Cardswon.length === CardsArray.length/2){
        resultDesplay.textContent='Congratulation ! you found them all'
    }

}
createBoard()