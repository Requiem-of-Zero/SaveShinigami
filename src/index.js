import Game from './game';
import Map from './map';

document.addEventListener('DOMContentLoaded', () => {
  const canvas  = document.getElementById('game-canvas')
  const game = new Game(canvas);
  const music = document.getElementById('music');
  const startBtn = document.getElementById('start-btn');
  const instructionBtn = document.getElementById('instructions-btn');
  const musicControls = document.getElementsByClassName('music-controls')[0];
  const musicPlay = document.getElementById('music-unmute');
  const musicPause = document.getElementById('music-mute');
  const instructions = document.getElementById('instructions');
  const buttonSound = document.getElementById('button-sound');

  musicPlay.addEventListener('click', () => {
      music.play();
      console.log('hi')
      musicPause.style.display = 'block'
      musicPlay.style.display = 'none'
  })

  musicPause.addEventListener('click', () => {
    music.pause();
    musicPlay.style.display = 'block'
    musicPause.style.display = 'none';
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
})