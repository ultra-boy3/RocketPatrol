//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
      constructor(scene, x, y, texture, frame) {
            super(scene, x, y, texture, frame);

            //Add object to existing scene
            scene.add.existing(this);
      }
}