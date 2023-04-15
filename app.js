const ratingNumberDOM = document.querySelectorAll(".card__rating__number")
const card_1 = document.getElementById('card1');
const card_2 = document.getElementById('card2');
const resultValueDOM = document.querySelector('.card__result__value')

let activeRatingNumber;

function selectRating (number) {
    const selectRatingNumberDOM =ratingNumberDOM[number-1]
    selectRatingNumberDOM.classList.add('card__rating__number--active')

    if(activeRatingNumber) {
        const activeRatingDOM = ratingNumberDOM[activeRatingNumber-1]
        activeRatingDOM.classList.remove('card__rating__number--active')
    }

    activeRatingNumber = number
    console.log(activeRatingNumber)
}

function submit () {

    if(!activeRatingNumber) return
      
    card_1.classList.add('hide') ;
    card_2.classList.remove('hide') ;
    
    resultValueDOM.textContent = activeRatingNumber;
};
