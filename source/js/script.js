const colors = ['#0f9e9e', '#e2f537', '#b35afc', '#d43333'];

let color_el = document.querySelector('.color-index');
let btn_el = document.getElementById('btn');


function randomiseColor() {
   let random = Math.floor(Math.random() * colors.length);
   let randomColor = colors[random];
   document.body.style.backgroundColor = `${randomColor}`;
   color_el.innerHTML = `${randomColor}`;
}
btn_el.addEventListener('click', randomiseColor);