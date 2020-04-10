class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');

        // load images/tile sprite
    }

    create() {
        //console.log(this);
        //this.add.text(20, 20, "Rocket Patrol Play");
        // these lines were just for testing
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0,0);

        this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);

        // white rectangle border

        this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);
        // green UI background

        this.p1Rocket = new Rocket(this , game.config.width / 2, 431 ,
            'rocket').setScale(.5 , .5).setOrigin(0 , 0);
        // constructor(scene , x , y , texture);
        // add rocket (p1)
    }

    update() {
        // scroll starfield
        this.starfield.tilePositionX -= 4;
        // this.starfield.tilePositionY -= 4;
    }
}