import Player from './player';
import Detective from './detective';
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const player = new Player(ctx, canvas);
const playerX = player.x;
const playerY = player.y;
const detective = new Detective(ctx, canvas, playerX, playerY)

canvas.width = 800;
canvas.height = 500;

const background = new Image();

background.src = "../dist/images/background.jpg";

function drawCharacter(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH){
  ctx.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH)
}

setInterval(() => {
  animate()
}, 40)

const animate = () => {
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  drawCharacter(player.char, player.width * player.animateX, player.height * player.animateY,
                player.width, player.height, player.x, player.y, player.width, player.height);
  drawCharacter(detective.char, detective.width * detective.animateX, detective.height * detective.animateY,
                detective.width, detective.height, detective.x, detective.y, detective.width, detective.height);
  player.moveChar()
  player.movementFrames();
  detective.chasePlayer(player.x, player.y);
  detective.movementFrames();
}

window.addEventListener('keydown', e => {
  player.keys[e.key] = true;
});

window.addEventListener('keyup', e => {
  delete player.keys[e.key]
});
