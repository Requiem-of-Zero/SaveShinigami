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
    this.score = 0;

    this.then = Date.now();
    this.now;

    this.map = new Map(this.dimensions);
    this.detective = new Detective(this.dimensions);
    this.map.animate(this.ctx);
    this.lastDetectiveCollision = Date.now();

    this.play = this.play.bind(this);
    this.detectiveCollisionDetection = this.detectiveCollisionDetection.bind(this);
    this.appleCollisionDetection = this.appleCollisionDetection.bind(this);
    this.animate = this.animate.bind(this);
    
    this.handleKeys();
  }

  appleCollisionDetection(){
    let distance = this.distance(this.player.x, this.player.y, this.apple.x, this.apple.y);
    if(distance < this.player.width / 2) {
      return true;
    }
    return false;
  }

  detectiveCollisionDetection(){
    let distance = this.distance(this.player.x, this.player.y, this.detective.x, this.detective.y)
    if(distance < (this.player.width / 3)) {
      return distance;
    } else {
      return 0;
    }
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

  handleKeys(){
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  handleScore(){
    let score = this.score
    const scoreBoard = document.querySelector('score')
    scoreBoard.textContent = `SCORE: ${score}`
  }

  handleKeyDown(e){
    if(e.key === ''){
      if(this.playing){
        this.gameActive === true ? this.pause() : this.resume();
      } else {
        this.restart();
      }
    } else if(e.key === 'Escape'){
      
    } else {
      this.keys[e.key] = true;
    }
  }

  handleKeyUp(e) {
    if(this.keys[e.key]) delete this.keys[e.key];
    if(this.player) this.player.moving = false;
  }

  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  }

  checkHighScore() {
    let highScore = localStorage.getItem('gameHighScore') || 0;

    if(this.score > localStorage.getItem('gameHighScore')) {
      localStorage.setItem('gameHighScore', this.score);
        highScore = this.score;
        highScoreBoard.textContent = `HIGH SCORE: ${highScore}`
    }
  }

  gameOver(message) {
    this.gameActive = false;
    this.playing = false;
    this.checkHighScore();
  }

  play() {
    this.gameActive = true;
    this.playing = true;
    this.score = 0;

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-canvas').style.display = 'block';
    document.getElementById('high-score').style.display = 'block';
    document.getElementById('game-wrapper').style.display = 'block';

    this.apple = new Apple(this.dimensions);
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
    this.now = Date.now();

    let elapsedTime = this.now - this.then;

    if(elapsedTime > 45 && this.gameActive) {
      this.then = this.now - (elapsedTime % 45);

      if(this.appleCollisionDetection()){
        this.handleAppleCollision.call(this);
      }

      let detectiveDistance = this.detectiveCollisionDetection()

      if(detectiveDistance && this.now > 200) {
        this.lastDetectiveCollision = this.now;
        this.handleDetectiveCollision.call(this, detectiveDistance);
      }
  
      this.map.animate(this.ctx)
      this.apple.animate(this.ctx)
  
      this.detective.chasePlayer(this.player.x, this.player.y);
      this.detective.animate(this.ctx)
  
      this.player.moveChar(this.keys)
      this.player.animate(this.ctx)
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}
