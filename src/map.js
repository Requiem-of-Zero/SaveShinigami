export default class Map {
  constructor(dimensions){
    this.dimensions = dimensions;
  }

  drawMap(ctx){
    const map = new Image();
    map.src = './dist/images/background.jpg';
    ctx.drawImage(map, 0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx){
    ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);
    this.drawMap(ctx);
  }
}