const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const inpX = document.querySelector('.x');
const inpY = document.querySelector('.y');
const btn = document.querySelector('.btn');

let text = "ABCDEFGH";
ctx.font = '28px Verdana';
for (let i = 0; i < 8; i++) {
   ctx.fillStyle = 'black';
   ctx.fillText(8 - i, 10, 95 + 77 * i);
   ctx.fillText(text[i], 70 + i * 75, 40);
   for (let j = 0; j < 8; j++) {
      ctx.beginPath();
      ctx.fillStyle = ["white", "black"][(i + j) % 2];
      ctx.fillRect(50 + j * 75, 60 + i * 75, 75, 75);
      ctx.closePath();
   }
}

btn.addEventListener('click', );



