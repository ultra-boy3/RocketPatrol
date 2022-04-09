//const { Phaser } = require("../../lib/phaser");
/*I'm gonna assume the above line doesn't work because index.html
is already doing its job. Doesn't seem to help with autofill...*/

class Play extends Phaser.Scene {
      constructor() {
            //(Below) String is how our scene is named in code
            //Also, using constructor of parent class
            super("playScene");
      }

      preload() {
            //load images/tile sprites
            this.load.image('rocket', './assets/rocket.png');
            this.load.image('spaceship', './assets/spaceship.png');
            this.load.image('starfield', './assets/starfield.png');
            console.log("Preload finished");
      }

      create() {
            // Place the tile sprite
            this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
            //Seems that by default, origin is in the sprite's center

            // Green UI background
            this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
            // White borders
            this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
            this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
            this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
            this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
            // Each has parameters: Position, Size, Color
            //setOrigin adjusts the object's origin/pivot
            console.log("Create finished");
      }

      update() {
            this.starfield.tilePositionX -= 4;
      }
}

//Scenes and other scripts need to be referenced in Index.html