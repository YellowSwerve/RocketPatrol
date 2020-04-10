// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene , x , y , texture , frame) {
        super(scene , x , y , texture , frame);
        // when making prefabs we have to put it in the game ourselves
        // add and object to existing scene
        scene.add.existing(this);
    }
}