let config = { //This is a JS object - similar to a dictionary
      type: Phaser.CANVAS,
      width: 640,
      height: 480,
      scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// Set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;