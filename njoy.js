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

