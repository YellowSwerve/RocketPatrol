class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        // load images/tile sprite
        this.load.spritesheet('explosion' , './assets/explosion.png' ,
        {frameWidth: 64 , frameHeight: 32 , startFrame: 0 , endFrame: 9});
        // load spritesheet
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


        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'spaceship' , 0 , 30).setOrigin(0 , 0);
        this.ship02 = new Spaceship(this, game.config.width + 96, 196, 'spaceship' , 0 , 20).setOrigin(0 , 0);
        this.ship03 = new Spaceship(this, game.config.width + 10, 260, 'spaceship' , 0 , 10).setOrigin(0 , 0);
        //add spaceship x3

        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // define keyboard keys

        //animation config
        this.anims.create({
            key: 'explode' ,
            frames: this.anims.generateFrameNumbers('explosion' , {
                start: 0 , end: 9 , first: 0
            }),
            frameRate: 30
        });

        // score
        this.p1Score = 0;
    }

    update() {
        // scroll starfield
        this.starfield.tilePositionX -= 4;
        // this.starfield.tilePositionY -= 4;

        this.p1Rocket.update();
        // update rocket
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();
        // update spaceship

        if(this.checkCollision(this.p1Rocket , this.ship03)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
            // this.ship03.reset();
        }
        if(this.checkCollision(this.p1Rocket , this.ship02)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
            // this.ship02.reset();
        }
        if(this.checkCollision(this.p1Rocket , this.ship01)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
            // this.ship01.reset();
        }
        // check collisions
    }

    checkCollision(rocket , ship) {
        if (rocket.x < ship.x + ship.width &&
            rocket.x + rocket.width > ship.x &&
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship.y) {
                return true;
            } else {
                return false;
            }
        // simple AABB checking
    }

    shipExplode(ship) {
        ship.alpha = 0;  // temporarily hide ship
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x , ship.y , 'explosion').setOrigin(0,0);
        boom.anims.play('explode');  // play explode animation
        boom.on('animationcomplete' , () => {  // callback after animation completes
            ship.reset();  // reset ship position
            ship.alpha = 1;  // make ship visible again
            boom.destroy();  // remove explosion sprite
        });
    }
}