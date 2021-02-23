class Player {
  constructor(dimensions){
    const character = new Image();
    character.src = "../dist/images/lightyagami.png";
    this.char = character;

    this.moving = false;
    this.speed = 5;
    this.type = 'player'
    this.dimensions = dimensions
    this.x = 400;
    this.y = 400;

    this.width = 32;
    this.height = 48;
    this.animateX = 0;
    this.animateY = 0;

    this.keys = [];
  }

  moveChar(keys){
    this.movementFrames();

    this.moving = false;
    if(keys['w'] && this.y > 50){
      this.y -= this.speed;
      this.animateY = 3;
      this.moving = true
    }
    if(keys['a'] && this.x > 0){
      this.x -= this.speed;
      this.animateY = 1;
      this.moving = true
    }
    if(keys['s'] && this.y < this.dimensions.height - this.height ){
      this.y += this.speed;
      this.animateY = 0;
      this.moving = true
    }
    if(keys['d'] && this.x < this.dimensions.width - this.width){
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
      this.width, this.height,
      this.x, this.y,
      this.width, this.height
      );
  }
}

export default Player;