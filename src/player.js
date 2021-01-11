class Player {
  constructor(ctx, canvas){
    const character = new Image();
    character.src = "../dist/images/mandalorian2.png";
    this.char = character;
    this.moving = false;
    this.speed = 5;
    this.x = 400;
    this.y = 400;
    this.radius = 40;
    this.width = 32;
    this.height = 48;
    this.animateX = 0;
    this.animateY = 0;
    this.ctx = ctx;
    this.keys = [];
    this.canvas = canvas;
  }

  moveChar(){
    this.movementFrames();

    this.moving = false;
    if(this.keys['w'] && this.y > 50){
    this.y -= this.speed;
    this.animateY = 3;
    this.moving = true
  }
  if(this.keys['a'] && this.x > 0){
    this.x -= this.speed;
    this.animateY = 1;
    this.moving = true
  }
  if(this.keys['s'] && (this.canvas.height - 50) - this.height > this.y ){
    this.y += this.speed;
    this.animateY = 0;
    this.moving = true
  }
  if(this.keys['d'] && this.canvas.width - this.width > this.x){
    this.x += this.speed;
    this.animateY = 2;
    this.moving = true
  }
  }

  movementFrames(){
    if(this.animateX < 3 && this.moving ){
      this.animateX++
    } else {
      this.animateX = 0;
    }
  }

//   drawCharacter(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH){
//   this.ctx.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH)
// }

}

export default Player;