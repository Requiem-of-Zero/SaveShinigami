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
})