class Detective {
  constructor(ctx, canvas){
    const character = new Image();
    character.src = "../dist/images/L.png";
    this.char = character;
    this.following = true;
    this.speed = 2;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 40;
    this.width = 32;
    this.height = 48;
    this.animateX = 0;
    this.animateY = 0;
    this.ctx = ctx;
    this.canvas = canvas;
  }

  chasePlayer(playerX, playerY){
    if(this.x > playerX && this.following){
      this.animateY = 1
      this.x -= this.speed;
    }
    if(this.x < playerX && this.following) {
      this.animateY = 2;
      this.x += this.speed;
    }
    if(this.y > playerY && this.following){
      this.animateY = 3
      this.y -= this.speed;
    }
    if(this.y < playerY && this.following){
      this.animateY = 0;
      this.y += this.speed;
    }
    if(this.y === playerY || this.x === playerX){
      this.following = false;
    }
  }

  movementFrames(){
    if(this.animateX < 3 && !this.following ){
      this.animateX++
    } else {
      this.animateX = 0;
    }
  }

}

export default Detective;