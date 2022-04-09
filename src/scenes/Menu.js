class Menu extends Phaser.Scene {
      constructor() {
            //(Below) String is how our scene is named in code
            //Also, using constructor of parent class
            super("menuScene");
      }

      create() {
            this.add.text(20, 20, "Rocket Patrol Menu");
      }
}