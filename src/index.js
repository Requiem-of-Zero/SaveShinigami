import Player from './player';
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const player = new Player(ctx, canvas);
// const keys = [];
// const player = {
//   moving: false,
//   speed: 5,
//   x: 400,
//   y: 400,
//   width: 32,
//   height: 48,
//   animateX: 0,
//   animateY: 0,
// }

canvas.width = 800;
canvas.height = 500;

// const character = new Image();
const background = new Image();
// character.src = "../dist/images/mandalorian2.png"
background.src = "../dist/images/background.jpg";

// const moveChar = () => {
//   player.moving = false;
//   if(keys['w'] && player.y > 50){
//     player.y -= player.speed;
//     player.animateY = 3;
//     player.moving = true
//   }
//   if(keys['a'] && player.x > 0){
//     player.x -= player.speed;
//     player.animateY = 1;
//     player.moving = true
//   }
//   if(keys['s'] && (canvas.height - 50) - player.height > player.y ){
//     player.y += player.speed;
//     player.animateY = 0;
//     player.moving = true
//   }
//   if(keys['d'] && canvas.width - player.width > player.x){
//     player.x += player.speed;
//     player.animateY = 2;
//     player.moving = true
//   }
// }

// const movementFrames = () => {
//   if(player.animateX < 3 && player.moving ) {
//     player.animateX++
//   } else {
//     player.animateX = 0;
//   }
// }

function drawCharacter(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH){
  ctx.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH)
}

setInterval(() => {
  animate()
}, 35)

const animate = () => {
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  drawCharacter(player.char, player.width * player.animateX, player.height * player.animateY,
                player.width, player.height, player.x, player.y, player.width, player.height);
  // moveChar();
  player.moveChar()
  player.movementFrames();
}

window.addEventListener('keydown', e => {
  player.keys[e.key] = true;
});

window.addEventListener('keyup', e => {
  delete player.keys[e.key]
});
