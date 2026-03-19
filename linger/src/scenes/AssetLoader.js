import Phaser from 'phaser';

class AssetLoader extends Phaser.Scene {
    constructor() {
        super('AssetLoader');
    }

    preload() {
        this.load.image('layout-house', '/assets/environment/layout-house.png');
        this.load.image('player', '/assets/characters/playerplaceholder.png');
    }

    create() {
        console.log("AssetLoader finished");
        this.scene.start('HouseScene');
    }
}

export default AssetLoader;