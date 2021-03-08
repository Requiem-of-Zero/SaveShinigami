class Player {
  constructor(dimensions){
    const character = new Image();
    character.src = "./dist/images/lightyagami.png";
    this.char = character;

    this.moving = false;
    this.speed = 3;
    this.type = 'player'
    this.dimensions = dimensions
    this.x = 100;
    this.y = 100;

    this.width = 32;
    this.height = 48;
    this.animateX = 0;
    this.animateY = 0;
  }

  moveChar(keys){
    this.movementFrames();

    this.moving = false;
    if(keys['w'] && this.y > 0){
      this.y -= this.speed;
      this.animateY = 3;
      this.moving = true
    }
    if(keys['a'] && this.x > 0){
      this.x -= this.speed;
      this.animateY = 1;
      this.moving = true
    }
    if(keys['s'] && this.y < this.dimensions.height - (this.height * 0.5) ){
      this.y += this.speed;
      this.animateY = 0;
      this.moving = true
    }
    if(keys['d'] && this.x < this.dimensions.width - (this.width * 0.5) ){
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

  animate(ctx) {
    ctx.drawImage(this.char,
      this.width * this.animateX,
      this.height * this.animateY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * 0.5,
      this.height * 0.5);
  }
}

export default Player;