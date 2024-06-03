document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Start');
  
    createCardDog('main', 'flex_row');

})

const createCardDog = (element, className) => {
    $(`${element}.${className}`).append($('<div>').attr('id', 'dog1').addClass('card_dog'));
    $('div#dog1').append($('<button>').attr({'type':'name', 'button':'load'}).text('Load Img'));
    $('div#dog1').append($('<div>').addClass('img_dog'));
}