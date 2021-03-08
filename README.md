# Save the Shinigami
[SaveShinigami](https://requiem-of-zero.github.io/SaveShinigami/) is a nostalgic 2D game inspired by the anime Death Note. The objective of the game is to pick up as many apples as possible before getting caught by the detective; L.

## Features
* Player movement
* Collision detection
* Bot AI
* Randomly generated apples on canvas

## Technologies Used:
* Javascript for logic
* HTML and CSS for visuals
* Canvas for rendering images and sprites

## Bot Logic:
  * The detective follows the player indefinitely:
    * Chase player logic will determine whether to increase or decrease from the bot's x or y coordinate.

  ``` js
      chasePlayer(playerX, playerY){
      this.movementFrames();

      if(this.x > playerX && this.following){
        this.animateY = 1
        this.x -= this.speed;
      }
      if(this.x < playerX && this.following) {
        this.animateY = 2;
        this.x += this.speed;
      }
      if(this.y > playerY && this.following){
        this.animateY = 3
        this.y -= this.speed;
      }
      if(this.y < playerY && this.following){
        this.animateY = 0;
        this.y += this.speed;
      }
      if(this.y === playerY || this.x === playerX){
        this.following = false;
      }
    }
   ```

## Limiting Framerates:

  *Javascript's built-in requestAnimationFrame was too fast for the sprite sheet that made the player and detective move too quickly
  * Solved this by using `Date.now()` to calculate the elapsed time between frames integrated with a this.gameActive instance variable to handle framerates.

  ``` js
    animate() {
      this.now = Date.now();

      let elapsedTime = this.now - this.then;

      if(elapsedTime > 45 && this.gameActive && this.playing ) {
        this.setScore();
        this.then = this.now - (elapsedTime % 45);
        this.checkHighScore();
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
   ```

  ## Future Features:
  
  * Golden apple that makes the player invincible for a certain duration
  * Being able to choose your characters
  * Player wrapping; player will move to opposite side of canvas when breaching the canvas boundaries