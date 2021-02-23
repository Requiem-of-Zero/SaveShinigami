class Detective {
  constructor(dimensions){
    const character = new Image();
    character.src = "../dist/images/L.png";
    this.char = character;
    this.type = 'detective'
    this.dimensions = dimensions
    this.following = true;
    this.speed = 2;
    this.x = Math.random() * dimensions.width;
    this.y = Math.random() * dimensions.height;
    this.radius = 40;
    this.width = 32;
    this.height = 48;
    this.animateX = 0;
    this.animateY = 0;
    this.ctx = ctx;
    this.canvas = canvas;
  }

  chasePlayer(playerX, playerY){
    this.movementFrames();

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

  animate(ctx){
    ctx.drawImage(this.char,
      this.width * this.animateX,
      this.height * this.animateY,
      this.width, this.height,
      this.x, this.y,
      this.width/4, this.height/4
      )
  }

}

export default Detective;