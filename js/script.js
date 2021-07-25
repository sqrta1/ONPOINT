document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
const first_item = document.getElementById('first-item');
const second_item = document.getElementById('second-item');
const third_item = document.getElementById('third-item');
const content = document.getElementById('slider-content');
const first_button =  document.getElementById('first-button');
const logo = document.getElementById('logo');
const modal_window = document.getElementById('modal-one');

//logo 

// function classChange(item) {
//   first_item.classList.add('sliders__item_active');
//   item.classList.remove('sliders__item_active');
//   item.classList.add('sliders__item_not-active');
//   content.classList.add('sliders_first');
//   content.classList.remove('sliders_second')
// }; -- не успел

logo.addEventListener('click', () => {
  if(second_item.classList.contains('sliders__item_active')) { //are we on the second slide?
    first_item.classList.add('sliders__item_active');
    second_item.classList.remove('sliders__item_active');
    content.classList.add('sliders_first');
    content.classList.remove('sliders_second')
  } else if (third_item.classList.contains('sliders__item_active')) { //are we on the third slide?
    first_item.classList.add('sliders__item_active');
    third_item.classList.remove('sliders__item_active');
    content.classList.add('sliders_first');
    content.classList.remove('sliders_third');
  } else {
    return;
  }
})

//first button 

first_button.addEventListener('click', () => {
  first_item.classList.remove('sliders__item_active');
  second_item.classList.add('sliders__item_active');
  content.classList.remove('sliders_first');
  content.classList.add('sliders_second')
})

//swipe

let xDown = null;                                                        
let yDown = null;

function getTouches(evt) {
  return evt.touches ||             
         evt.originalEvent.touches; 
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                


function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) &&  !(modal_window.classList.contains('open')) ) { //проверка на открытое модальное окно
      if (xDiff > 0 && second_item.classList.contains('sliders__item_active')){
          second_item.classList.remove('sliders__item_active');
          third_item.classList.add('sliders__item_active');
          content.classList.remove('sliders_second');
          content.classList.add('sliders_third');
      } else if ( xDiff > 0 && first_item.classList.contains('sliders__item_active')) {
          first_item.classList.remove('sliders__item_active');
          second_item.classList.add('sliders__item_active');
          content.classList.remove('sliders_first');
          content.classList.add('sliders_second')
      } else if (xDiff < 0 && third_item.classList.contains('sliders__item_active')){
          third_item.classList.remove('sliders__item_active');
          second_item.classList.add('sliders__item_active');
          content.classList.remove('sliders_third');
          content.classList.add('sliders_second')
      } else if (xDiff < 0 && second_item.classList.contains('sliders__item_active')) {
          first_item.classList.add('sliders__item_active');
          second_item.classList.remove('sliders__item_active');
          content.classList.remove('sliders_second');
          content.classList.add('sliders_first')
      }               
  } 

    xDown = null;                                             
};

//modal window

const modals = document.querySelectorAll('[data-modal]');


modals.forEach(function(trigger) {
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const  exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function(exit) {
      exit.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});

//arrows

const left_arrow = document.getElementById('left-arrow');
const right_arrow = document.getElementById('right-arrow');
const firstList = document.getElementById('first-list');
const secondList = document.getElementById('second-list');
const firstBall = document.getElementById('first-ball');
const secondBall = document.getElementById('second-ball');

function swapBenefits() {
  right_arrow.addEventListener('click', () => {

    secondList.classList.add('modal__content_active');
    secondBall.classList.add('modal__switches__ball_active');
    firstList.classList.remove('modal__content_active');
    firstBall.classList.remove('modal__switches__ball_active');
    
  })
  left_arrow.addEventListener('click', () => {

    secondList.classList.remove('modal__content_active');
    secondBall.classList.remove('modal__switches__ball_active');
    firstList.classList.add('modal__content_active');
    firstBall.classList.add('modal__switches__ball_active');
    
  })
}

swapBenefits();