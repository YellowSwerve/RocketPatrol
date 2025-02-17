class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        let textSpacer = 64;

        this.add.text(centerX , centerY - textSpacer , 'ROCKET PATROL' , menuConfig).setOrigin(.5);
        this.add.text(centerX , centerY , 'Use A & D keys to move & (J) to Fire', menuConfig).setOrigin(.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX , centerY + textSpacer , 'Press A for Easy or D for Hard' , menuConfig).setOrigin(.5);

        console.log(this);
        this.add.text(20,20, "Rocket Patrol Menu");
    
        // launches the next scene
        // this.scene.start("playScene");
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyA)) {
            // easy modo
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene"); 
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            // hard modo
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene"); 
        }
    }
}