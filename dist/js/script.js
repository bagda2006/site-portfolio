const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', function (){
    menu.classList.add('active');
})

closeElem.addEventListener('click', function (){
    menu.classList.remove('active');
})