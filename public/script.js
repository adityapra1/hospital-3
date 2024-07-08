let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 
}

var swiper = new Swiper(".home", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
let valueDisplays =  document.querySelectorAll(".num");
let interval = 1000;


valueDisplays.forEach((valueDisplay) => { 
  let startValue =1000;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue );
  let counter = setInterval(function () {
  startValue +=1;
  valueDisplay.textContent = startValue;
  if (startValue == endValue) {
    clearInterval(counter);
  }
 }, duration);
}); 

