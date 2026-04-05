import Phaser from 'phaser';

class AssetLoader extends Phaser.Scene {
    constructor() {
        super('AssetLoader');
    }

    preload() {
        this.load.image('layout-house', '/assets/environment/layout-house.png');
        this.load.image('player', '/assets/characters/playerplaceholder.png');

        // Background music
        this.load.audio('bgm', '/assets/sounds/cozy-piano.mp3'); // src: https://pixabay.com/music/modern-classical-cozy-piano-130875/
        // Footstep sound effect
        this.load.audio('walk', '/assets/sounds/footstep-sfx.m4a');
        // Door sound effect
        this.load.audio('door-opening', '/assets/sounds/door-opening.mp3'); // src: https://pixabay.com/sound-effects/household-dorm-door-opening-6038/
        this.load.audio('door-closing', '/assets/sounds/door-closing.mp3'); // src: https://pixabay.com/sound-effects/household-door-closed-382707/
    }

    create() {
        console.log("AssetLoader finished");
        this.scene.start('HouseScene');

        // Background music
        const music = this.sound.add('bgm');
        music.play({
            loop: true,
            volume: 0.1
        });
    }
}

export default AssetLoader;