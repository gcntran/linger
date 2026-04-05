import Phaser from 'phaser';

class AssetLoader extends Phaser.Scene {
    constructor() {
        super('AssetLoader');
    }

    preload() {
        this.load.image('layout-house', '/assets/environment/layout-house.png');
        this.load.image('player', '/assets/characters/playerplaceholder.png');

        // Background music
        this.load.audio('bgm', '/assets/sounds/cozy-piano.mp3');
        // Footstep sound effect
        this.load.audio('walk', '/assets/sounds/footstep-sfx.mp3');
        // Door sound effect
        this.load.audio('door-sound', '/assets/sounds/door-sfx.mp3');
    }

    create() {
        console.log("AssetLoader finished");
        this.scene.start('HouseScene');

        // Background music
        const music = this.sound.add('bgm');
        music.play({
            loop: true,
            volume: 0.2
        });

        // Footstep sound effect
        this.walkSound = this.sound.add('walk', { volume: 1, loop: true });
    }
}

export default AssetLoader;