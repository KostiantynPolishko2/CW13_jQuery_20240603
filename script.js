document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Start');
  
    $('main.flex_row')[0].append(createCardDog('dog1'));
})

const createCardDog = (id) => {

    let card = $('<div>').attr('id', `${id}`).addClass('card_dog')[0];
    $(card).append($('<button>').attr({'type':'name', 'button':'load'}).text('Load Img'));
    $(card).append($('<div>').addClass('img_dog'));

    return card;
}