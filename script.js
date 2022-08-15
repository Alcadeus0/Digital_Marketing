const bar = document.querySelector(".circle");
const nav = document.querySelector('nav');

bar.addEventListener("click", ()=>{
    nav.classList.toggle("nav");
})
let counter = 1;

setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
