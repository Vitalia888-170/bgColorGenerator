let hue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];

let color_el = document.querySelector('.color-index');
let btn_el = document.getElementById('btn');


function randomiseColor() {
   let hesh = "#";
   for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hue.length);
      hesh += hue[random];
   }
   document.body.style.backgroundColor = hesh;
   color_el.innerHTML = hesh;

}
btn_el.addEventListener('click', randomiseColor);