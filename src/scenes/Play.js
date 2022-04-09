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

            //add rocket (p1) to horizontal middle of screen
            this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding,
            'rocket').setOrigin(0.5, 0);

            //add spaceships (x3)
            // Spaces the ships apart on x axis by borderUISize (width of the border)
            // Each ship has diff point value passed into constrcutor's point argument
            // They're also outside the viewport
            this.ship01 = new Spaceship(this, game.config.width + borderUISize*6,
                  borderUISize*4, 'spaceship', 0, 30).setOrigin(0, 0);
            this.ship02 = new Spaceship(this, game.config.width + borderUISize*3,
                  borderUISize*5 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0, 0);
            this.ship03 = new Spaceship(this, game.config.width,
                  borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0, 0);

            //define keys
            keyFire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
            keyRestart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
            keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

            console.log("Create finished");
      }

      update() {
            this.starfield.tilePositionX -= 4;

            // Game objects are not updated automatically
            this.p1Rocket.update();
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
      }
}

//Scenes and other scripts need to be referenced in Index.html