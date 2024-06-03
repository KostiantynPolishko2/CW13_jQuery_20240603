document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Start');
    const id = 'dog1';
    const api = 'https://dog.ceo/api/breeds/image/random';
  
    $('main.flex_row')[0].append(createCardDog(id, api));
    $(`div#${id}`).find('button').bind('click', loadImg);

})

const createCardDog = (id, api) => {

    let card = $('<div>').attr('id', `${id}`).addClass('card_dog')[0];
   
    $(card).append($('<button>').attr({'type':'name', 'button':'load'}).text('Load Img'));
    $(card).append($('<div>').addClass('img_dog'));

    Object.defineProperties($(card).find('button')[0], {apiRequest: {value: api, writable: false}});

    return card;
}

const loadImg = (e) => {

    fetch(e.target.apiRequest).
    then(res => {
        if(res.status === 200){
            return res.json();
        }
        else{
            throw new Error();
        }
    }).
    then(apiObj => {

        if(apiObj.status !== 'success'){
            throw 'Error!\nImg did not load!'
        }
        $(e.target).next().css('background-image', `url(${apiObj.message})`);
    }).
    catch(error => {
        $(e.target).next().css('background-image', "url('./img/error404.jpg')")
    })
    .finally(() => {
        console.log('End');
    });
}