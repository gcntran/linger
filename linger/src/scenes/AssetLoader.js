import Phaser from 'phaser';

class AssetLoader extends Phaser.Scene {
    constructor() {
        super('AssetLoader');
    }

    preload() {
        this.load.image('layout-house', '/assets/environment/layout-house.png');
        this.load.image('player', '/assets/characters/playerplaceholder.png');

        // Tarot cards
        for (let i = 0; i < 12; i++) {
            this.load.image('tarot-${i}', '/assets/tarot/tarot-${i}.png');
        }

        // Dialogues
        this.load.image('dialogue-box', '/assets/ui/dialogues/dialogue.png'); // main dialogue box
        this.load.image('dialogue-rem', '/assets/ui/dialogues/dialogue-rem.png'); // Rem's dialogue box
        this.load.image('dialogue-dot', '/assets/ui/dialogues/dialogue-dot.png'); // Dot's dialogue box
        this.load.image('dialogue-arrow', '/assets/ui/dialogues/dialogue-arrow.png'); // arrow for multiple dialogues

        // Dialogue sound effects
        this.load.audio('click', '/assets/sounds/click-sfx.mp3'); // src: https://pixabay.com/sound-effects/film-special-effects-pen-click-411629/

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