let nav = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu'),
    errorTag = nav[1],
    five = document.createElement('li'),
    title = document.getElementById('title'),
    advert = document.querySelectorAll('.adv'),
    attitude = document.getElementById('prompt');

nav[1].replaceWith(nav[2]);
menu.insertBefore(errorTag, nav[3]);


five.classList.add('menu-item');
five.innerHTML = "Пятый пункт";
menu.appendChild(five);

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

advert.forEach(function(item, i, adverts){
  item.remove();
});

attitude.textContent = prompt('Как вы относитесь к технике Apple?')