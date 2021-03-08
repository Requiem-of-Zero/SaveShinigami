import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas  = document.getElementById('game-canvas')
  let game;
  const music = document.getElementById('music');
  const startBtn = document.getElementById('start-btn');
  const instructionBtn = document.getElementById('instructions-btn');
  const musicControls = document.getElementsByClassName('music-controls')[0];
  const musicPlay = document.getElementById('music-unmute');
  const musicPause = document.getElementById('music-mute');
  const instructions = document.getElementById('instructions');
  const buttonSound = document.getElementById('button-sound');
  const homeBtn = document.getElementById('home-btn');
  const gameOver =  document.getElementById('game-over');
  const startScreen = document.getElementById('start-screen');
  const restartBtn = document.getElementById('restart-btn');

  musicPlay.addEventListener('click', () => {
      music.play();
      musicPause.style.display = 'block'
      musicPlay.style.display = 'none'
  })

  musicPause.addEventListener('click', () => {
    music.pause();
    musicPlay.style.display = 'block'
    musicPause.style.display = 'none';
  })

  homeBtn.addEventListener('click', () => {
    music.play();
    gameOver.style.display = 'none';
    startScreen.style.display = 'block';
    buttonSound.play();
  })

  restartBtn.addEventListener('click', () => {
    buttonSound.play();
    game = new Game(canvas)
    game.restart();
  })
  
  instructionBtn.addEventListener('click', () => {
    if(instructions.style.display === 'none'){
      instructions.style.display = 'block'
      buttonSound.play();
    } else {
      instructions.style.display = 'none'
      buttonSound.play();
    }
  })

  startBtn.addEventListener('click', () => {
    music.volume = 0.05;
    buttonSound.play();
    game = new Game(canvas)
    game.play();
  })
})