


document.querySelector('.card__btn').addEventListener('click', 
function() {
    let card_1 = document.getElementById('card1');
    let card_2 = document.getElementById('card2');
    
    card_1.classList.add('hide') ;
    card_2.classList.remove('hide') ;

    
    let number = 5;
    console.log(number)
    let result = document.querySelector('.card__title');

    result.innerHTML = number;
});
