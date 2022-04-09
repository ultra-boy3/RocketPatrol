//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
      constructor(scene, x, y, texture, frame) {
            super(scene, x, y, texture, frame);

            // Add object to existing scene
            scene.add.existing(this);
            this.isFiring = false;
            this.moveSpeed = 2; //Pixels per frame
      }

      // Called 60 times per second
      update() {
            if(!this.isFiring) {
                  if(keyLeft.isDown && this.x >= borderUISize + this.width){
                        this.x -= this.moveSpeed;
                  }
                  else if(keyRight.isDown && this.x <= game.config.width - borderUISize - this.width){
                        this.x += this.moveSpeed;
                  }
            }
            // fire button
            if(Phaser.Input.Keyboard.JustDown(keyFire)){
                  this.isFiring = true;
            }
            // if fired, move up
            if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
                  this.y -= this.moveSpeed;
            }
            // reset on miss
            if(this.y <= borderUISize * 3 + borderPadding) {
                  this.isFiring = false;
                  this.y = game.config.height - borderUISize - borderPadding;
            }
      }
}