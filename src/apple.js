export default class Apple {
  constructor(dimensions){
    this.dimensions = dimensions;
    this.type = 'apple';

    this.x = Math.random() * (this.dimensions.width - 150) + 100;
    this.y = Math.random() * (this.dimensions.height - 150) + 100;
  }

  drawApple(ctx){
    const apple = new Image();
    apple.src = '../dist/images/apple.png'
    ctx.drawImage(apple, this.x, this.y, 15, 15)
  }

  animate(ctx){
    this.drawApple(ctx);
  }

}