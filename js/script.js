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

const toMatrix = (pos) => {
   let text = "ABCDEFGH";
   pos = pos.split("");
   let row = 8 - pos[1];
   let column = text.indexOf(pos[0]);
   return {x: column, y: row}
} 

btn.addEventListener('click', () => {
   let obj1 = toMatrix(inpX.value);
   let obj2 = toMatrix(inpY.value);
   ctx.fillStyle = '#' + parseInt(Math.random() * Math.pow(2, 24).toString(16));
   ctx.beginPath();
   ctx.arc(110 + obj1.x * 70, 110 + obj1.y * 70, 25, 0, 2 * Math.PI);
   
   ctx.closePath();
   ctx.fill();


   ctx.beginPath();
   ctx.arc(110 + obj2.x * 70, 110 + obj2.y * 70, 25, 0, 2 * Math.PI);
   ctx.fillStyle = '#' + parseInt(Math.random() * Math.pow(2, 24).toString(16));
   ctx.closePath();
   ctx.fill();

   if (obj1.x + obj1.y === obj2.x + obj2.y) {
      ctx.strokeStyle = 'red';
      ctx.moveTo(85 + obj1.x * 70, 85 + obj1.y * 70);
      ctx.lineTo(85 + obj2.x * 70, 85 + obj2.y * 70);
      ctx.stroke();
   }

});