(function() 
{

  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');
  var message=document.getElementById('message');
  
  var cards = [
  '../../image/seven.png',
  '../../image/bell.png',
  '../../image/logo.svg'
  ];




  var timers=[];

  var stopCount=0 ;
  // まだ押してないから

  // var startCoin=5;

  // var useCoin=c;

  // var leftCoin=c-5;


  function runSlot(n) {
    timers[n] = setTimeout(function() {
      panels[n].children[0].src =
      // panelの子要素にimgタグがある
      'img/' +
      cards[Math.floor(Math.random() * cards.length)];
      // 小数点以下繰り下げ
      runSlot(n);
    }, 60);
    // 50ミリ秒後に再び
  }
  function initPanel(){
    var i;
    for (i = 0; i < panels.length; i++) {
      panels[i].children[1].addEventListener('click',function(){
        clearTimeout(timers[this.dataset.index])
        stopCount++;
        if(stopCount=== panels.length) {
          stopCount = 0;
          // 3つ押したらもう一回押せる
          checkResults();
          spin.className = ''
          // 三つストップ押したらinactiveを空文字に変える
        }
        
      });
    }
  }

  function checkResults() {

    var img0 = panels[0].children[0];
    var img1 = panels[1].children[0];
    var img2 = panels[2].children[0];
    if (img0.src !== img1.src && img0.src !== img2.src ){img0.className='unmatched';
  }
    //1とも2とも違ったらunmatchedになる
    if (img1.src !== img0.src && img1.src !== img2.src ){img1.className='unmatched';
  }
  if (img2.src !== img1.src && img2.src !== img0.src ){img2.className='unmatched';
  }

  if(img0.src===img1.src &&img0.src===img2.src){
    document.write('<img src ="../../image/aflo-6780236-1649063601.jpg"> '
    );
  }
else if (img0.src===img1.src || img0.src===img2.src || img1.src===img2.src){
  (message).innerHTML =  "あ～～～惜しかったねぇ～～～";

}
else{
  (message).innerHTML = "ざんね～～～ん！";

}
  
//   if(img0.src===img1.src=="../image/seven.png"){document.write("bell");

// }

// if(img0.src===img1.src==cards[2]){document.write("POSSE");
}


// function showResults() {
// if(img0.src===img1.src===img2.src){document.write("これで君もスロカスだ！");}
// else if (img0.src===img1.src || img0.src===img2.src || img1.src===img2.src)
// {
//   (message).innerHTML = "あ～～～惜しかったねぇ～～～";
// }
// else{
//   (message).innerHTML = "ざんね～～～ん！"

// }
// }
  initPanel();
  
  spin.addEventListener('click', function() {
    var i;
    if( this.className.indexOf('inactive')!==-1){
      return;
    }
    this.className='inactive'
    for (i = 0; i < panels.length; i++) {
      runSlot(i);
      panels[i].children[0].className ='';
      // unmatchedというクラス名を変えてる
    }
  });
})();