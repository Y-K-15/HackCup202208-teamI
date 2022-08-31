(function() {

  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');
  
  var cards = [
  '../../image/seven.png',
  '../../image/bell.png',
  '../../image/cherry.png'
  ];

  var timers=[];

  function runSlot(n) {
    timers[n] = setTimeout(function() {
      panels[n].children[0].src =
      // panelの子要素にimgタグがある
      'img/' +
      cards[Math.floor(Math.random() * cards.length)];
      // 小数点以下繰り下げ
      runSlot(n);
    }, 50);
    // 50ミリ秒後に再び
  }
  function initPanel(){
    var i;
    for (i = 0; i < panels.length; i++) {
      panels[i].children[1].addEventListener('click',function(){
        clearTimeout(timers[this.dataset.index])

      });
    }
  }
  initPanel();
  
  spin.addEventListener('click', function() {
    var i;
    if( this.className.indexOf('inactive')!==-1){
      return;
    }
    this.className='inactive'
    for (i = 0; i < panels.length; i++) {
      runSlot(i);
    }
  });
})();