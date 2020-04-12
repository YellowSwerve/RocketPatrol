// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene , x , y , texture , frame) {
        super(scene , x , y , texture , frame);
        scene.add.existing(this);
        // when making prefabs we have to put it in the game ourselves
        // add an object to existing scene
        this.isFiring = false;  // track rocet's firing status
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        if(!this.isFiring) {
            if(keyA.isDown && this.x >= 47) {
                this.x -= 2;
            } else if (keyD.isDown && this.x <= 578) {
                this.x += 2;
            }
        }
        // left/right movement
        // isDown checks every frame

        if(Phaser.Input.Keyboard.JustDown(keyJ)) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // fire rocket
        // JustDown checks every frame

        if(this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        // if fired, move up

        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
        // reset on miss
    }

    // reset rocket on miss
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}