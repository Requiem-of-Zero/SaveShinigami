export default class Apple {
  constructor(dimensions){
    this.dimensions = dimensions;
    this.type = 'apple';

    this.x = Math.random() * (dimensions.width - 150) + 100;
    this.y = Math.random() * (dimensions.height - 150) + 100;
  }

  drawApple(ctx){
    const apple = new Image();
    apple.src = '../dist/images/apple.png'
    ctx.drawImage(apple, this.x, this.y, 30, 40)
  }

  animate(ctx){
    this.drawApple(ctx);
  }

}