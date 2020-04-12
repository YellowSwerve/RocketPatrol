let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    // loads the menu and then play
};

let game = new Phaser.Game(config);
// loads the config above into phaser itself

let keyF, keyLEFT, keyRIGHT, keyA , keyD, keyJ;
//reserve some keyboard variables

game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}