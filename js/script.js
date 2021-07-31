const logo = document.getElementById('logo');
const modal_window = document.getElementById('modal-one');

//logo 

logo.addEventListener('click', () => {
  if (modal_window.classList.contains('open')) {
    return;
  }
    first_item.style.transition = 'all .15s linear';
    second_item.style.transition = 'all .15s linear';
    third_item.style.transition = 'all .15s linear';
    first_item.style.left = '0';
    second_item.style.left = '100%';
    third_item.style.left = '200%';
})

//first button 

const first_button =  document.getElementById('first-button');
first_button.addEventListener('click', () => {
  first_item.style.transition = 'all .15s linear';
  second_item.style.transition = 'all .15s linear';
  first_item.style.left = '-100%';
  second_item.style.left = '0';
  first_item.style.display = 'block';
})

//swipe

const first_item = document.getElementById('first-item');
const second_item = document.getElementById('second-item');
const third_item = document.getElementById('third-item');

let startingX;

first_item.addEventListener('touchstart', e =>  {
  startingX = e.touches[0].clientX
});
first_item.addEventListener('touchmove', e => {
  e.preventDefault();
  let touch = e.touches[0];
  let change = startingX - touch.clientX;
  if (change < 0) {
    return;
  }
  first_item.style.left = '-' + change + 'px';
  second_item.style.left = (screen.width - change) + 'px';
});
first_item.addEventListener('touchend', e => {
  let change = startingX - e.changedTouches[0].clientX;
  let threshold = screen.width / 20;
  if (change < threshold) {
    first_item.left = 0;
  } else {
    first_item.style.transition = 'all .15s linear';
    second_item.style.transition = 'all .15s linear';
    third_item.style.transition = 'all .15s linear';
    first_item.style.left = '-100%';
    second_item.style.left = '0';
    third_item.style.left = '100%';
  }
}, );

second_item.addEventListener('touchstart', (e) => {
  startingX = e.touches[0].clientX;
});
second_item.addEventListener('touchmove', e => {
  function left(e) {
    e.preventDefault();
    let touch = e.touches[0];
    let change = touch.clientX - startingX;
    if (change < 0) {
      return;
    }
    first_item.left = (change - screen.width) + 'px';
    second_item.left = change + 'px';
  };
  
  function right(e) {
    e.preventDefault();
    let touch = e.touches[0];
    let change = startingX - touch.clientX;
    if (change < 0) {
      return;
    }
    second_item.style.left = '-' + change + 'px';
    third_item.style.left = (screen.width - change) + 'px';
  };

  left(e);
  right(e);
});
second_item.addEventListener('touchend', e => {
  function left(e) {
    let change = e.changedTouches[0].clientX - startingX;
    let threshold = screen.width / 20;
    if (change < threshold) {
      first_item.style.left = '-100%';
      second_item.left = '0';
    } else {
      first_item.style.transition = 'all .15s linear';
      second_item.style.transition = 'all .15s linear';
      third_item.style.transition = 'all .15s linear';
      first_item.style.left = '0';
      second_item.style.left = '100%';
      third_item.style.left = '200%';
   }
  };

  function right(e) {
    
    let change = startingX - e.changedTouches[0].clientX;
    let threshold = screen.width / 20;
    if (change < threshold) {
      second_item.left = 0;
    } else {
      second_item.style.transition = 'all .15s linear';
      third_item.style.transition = 'all .15s linear';
      first_item.style.left = '-200%';
      second_item.style.left = '-100%';
      third_item.style.left = '0';
    }
  };

  right(e);
  left(e);
});

third_item.addEventListener('touchstart', e =>  {
  startingX = e.touches[0].clientX
});

third_item.addEventListener('touchmove', e => { 
  e.preventDefault();
  let touch = e.touches[0];
  let change = touch.clientX - startingX;
  if (change < 0) {
    return;
  }
  second_item.style.display = 'block';
  second_item.left = (change - screen.width) + 'px';
  third_item.left = change + 'px';
})

third_item.addEventListener('touchend', e => { 
  if (modal_window.classList.contains('open')) {
    return;
  } else {
    let change = e.changedTouches[0].clientX - startingX;
    let threshold = screen.width / 20;
    if (change < threshold) {
      second_item.style.left = '-100%';
      second_item.display = 'none';
      third_item.left = '0';
    } else {
      first_item.style.transition = 'all .15s linear';
      second_item.style.transition = 'all .15s linear';
      third_item.style.transition = 'all .15s linear';
      first_item.style.left = '-100%';
      second_item.style.left = '0';
      third_item.style.left = '100%';
   }
  }
})
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

function swapBenefits() {
  right_arrow.addEventListener('click', function(e) {
    e.preventDefault();
    const firstList = document.getElementById('first-list');
    const secondList = document.getElementById('second-list');
    const firstBall = document.getElementById('first-ball');
    const secondBall = document.getElementById('second-ball');

    secondList.classList.add('modal__content_active');
    secondBall.classList.add('modal__switches__ball_active');
    firstList.classList.remove('modal__content_active');
    firstBall.classList.remove('modal__switches__ball_active');
    
  })
  left_arrow.addEventListener('click', function(e) {
    e.preventDefault();
    const firstList = document.getElementById('first-list');
    const secondList = document.getElementById('second-list');
    const firstBall = document.getElementById('first-ball');
    const secondBall = document.getElementById('second-ball');

    secondList.classList.remove('modal__content_active');
    secondBall.classList.remove('modal__switches__ball_active');
    firstList.classList.add('modal__content_active');
    firstBall.classList.add('modal__switches__ball_active');
    
  })
}

swapBenefits();

//scroll <--Working with mouse only rn/ no touches-->

const slider = document.getElementById('scrollbar');
const thumb = document.getElementById('thumb');
const textarea = document.getElementById('text');

thumb.addEventListener('mousedown' , event => {
  event.preventDefault();
  let shiftY = event.clientY - thumb.getBoundingClientRect().top;
    

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newTop = event.clientY - shiftY - slider.getBoundingClientRect().top;

        
    if (newTop < 0) {
        newTop = 0;
    }
    let topEdge = slider.offsetHeight - thumb.offsetHeight;
    
    if (newTop > topEdge) {
        newTop = topEdge;
    }

    thumb.style.top = newTop + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }


})


thumb.addEventListener('dragstart', () => {
    return false;
})