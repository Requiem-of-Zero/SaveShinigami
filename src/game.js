import Player from './player';
import Apple from './apple';
import Map from './map';
import Detective from './detective';

export default class SaveShinigami {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height }
    this.keys = {};

    this.playing = false;
    this.welcome = true;

    this.map = new Map(this.dimensions);
    this.map.animate(this.ctx);
  }

  appleCollisionDetection(){
    let distance = this.distance(this.player.x, this.player.y, this.apple.x, this.apple.y);
    distance < this.player.width ? true : false;
  }

  detectiveCollisionDetection(){
    let distance = this.distance(this.player.x, this.player.y, this.detective.x, this.detective.y)
    distance < (this.player.width + this.detective.width / 1.5 ) ? distance : 0;
  }

  handleAppleCollision(){
    this.apple = new Apple(this.dimensions);
    this.score += 1;
  }

  handleDetectiveCollision(distance){
    if(distance < Math.random() * 150) {
      this.gameOver('You got caught!')
    }
  }

  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  }

  gameOver(message) {
    this.gameActive = false;
    this.playing = false;
  }

  play() {
    this.gameActive = true;
    this.playing = true;
    this.score = 0;
    
    apple = new Apple(this.dimensions);
    this.player = new Player(this.dimensions);

    this.animate();
  }

  restart() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.play()
  }

  pause() {
    this.gameActive = false;
  }

  resume() {
    this.gameActive = true;
    this.animate();
  }

  animate() {
    if(this.appleCollisionDetection()){
      this.handleAppleCollision.call(this);
    }
  }
}
