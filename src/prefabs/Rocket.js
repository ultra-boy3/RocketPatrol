//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
      constructor(scene, x, y, texture, frame) {
            super(scene, x, y, texture, frame);

            // Add object to existing scene
            scene.add.existing(this);
            this.isFiring = false;
            this.moveSpeed = 2;
      }

      update() {
            if(!this.isFiring) {
                  if(keyLeft.isDown){
                        console.log("Left");
                  }
                  else if(keyRight.isDown){
                        console.log("Right");
                  }
            }
            // fire button
            if(Phaser.Input.Keyboard.JustDown(keyFire)){
                  console.log("Fire!");
            }
      }
}