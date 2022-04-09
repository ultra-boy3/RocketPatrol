class Play extends Phaser.Scene {
      constructor() {
            //(Below) String is how our scene is named in code
            //Also, using constructor of parent class
            super("playScene");
      }

      create() {
            this.add.text(20, 20, "Rocket Patrol Play");
      }
}

//Scenes and other scripts need to be referenced in Index.html