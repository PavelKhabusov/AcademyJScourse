window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  
  hideTabContent(1);

  function showTabContent(b) {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(e) {
    let tar = e.target;

    if(tar && tar.classList.contains('info-header-tab')) {
      for(let i = 0; i < tab.length; i++) {
        if(tar == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
  
  
  function Timer(options) {
    var elem = options.elem;

    var timer;

    function render() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      elem.querySelector('.hours').textContent = hours;

      var min = date.getMinutes();
      if (min < 10) min = '0' + min;
      elem.querySelector('.minutes').textContent = min;

      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;
      elem.querySelector('.seconds').textContent = sec;
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  }
  var timer = new Timer({
    elem: document.getElementById('timer')
  });
  timer.start();
}); 