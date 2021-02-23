export default class Map {
  constructor(position){
    this.position = position;
  }

  drawMap(ctx){
    const map = new Image();
    map.src = '../ddist/images/background.jpg';
    ctx.drawImage(map, 0, 0, this.position.width, this.position.height);
  }

  animate(ctx){
    ctx.clearRect(0,0, this.position.width, this.position.height);
    this.drawMap(ctx);
  }
}