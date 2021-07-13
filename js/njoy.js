const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const btnright = document.getElementById("right");
const btnleft = document.getElementById("left");

left.addEventListener('mouseenter', () => {
  content.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
  content.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
  content.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
  content.classList.remove('hover-right');
})

btnright.addEventListener('click', () => {
  right.classList.add('big-right');
})

right.addEventListener('mouseleave', () => {
  right.classList.remove('big-right');
})
btnleft.addEventListener('click', () => {
  left.classList.add('big-left');
})

left.addEventListener('mouseleave', () => {
  left.classList.remove('big-left');
})



// OVERLAY
TweenMax.to(".overlay.first", 1.5, {
    delay: .5,
    top: "-100%",
    ease: Expo.easeInOut
  });

  TweenMax.to(".overlay.second", 1.5, {
    delay: .7,
    top: "-100%",
    ease: Expo.easeInOut
  });

  TweenMax.to(".overlay.third", 1.5, {
    delay: .9,
    top: "-100%",
    ease: Expo.easeInOut
  });
  

  
// OVERLAY SALIDA
TweenMax.to(".salida-first", 1.5, {
    delay: .5,
    left: "-100%",
    ease: Expo.easeInOut
  });

  TweenMax.to(".salida-second", 1.5, {
    delay: .7,
    left: "-100%",
    ease: Expo.easeInOut
  });

  TweenMax.to(".salida-third", 1.5, {
    delay: .9,
    left: "-100%",
    ease: Expo.easeInOut
  });
