import Phaser from 'phaser';

class AssetLoader extends Phaser.Scene {
    constructor() {
        super('AssetLoader');
    }

    preload() {
        // Load the cursors
        this.load.image('cursor-default', 'assets/ui/cursors/cursor-default.png');
        this.load.image('cursor-hover', 'assets/ui/cursors/cursor-hover.png');

        // Load the buttons
        // Title button
        this.load.image('start-button', 'assets/ui/buttons/start-button.png');
        this.load.image('start-button-hovered', 'assets/ui/buttons/start-button-hovered.png');
        this.load.image('start-button-active', 'assets/ui/buttons/start-button-active.png');
        // Ending buttons
        this.load.image('go-to-title-button', 'assets/ui/buttons/go-to-title-button.png');
        this.load.image('go-to-title-button-hovered', 'assets/ui/buttons/go-to-title-button-hovered.png');
        this.load.image('go-to-title-button-active', 'assets/ui/buttons/go-to-title-button-active.png');

        // Load the background gif for title scene
        this.load.spritesheet('title-bg', 'assets/environment/cat-pinterest-sheet.png', {
            frameWidth: 800, 
            frameHeight: 535
        });

        // Load the intro image
        this.load.image('intro-bg', 'assets/environment/intro-bg.png');

        // Load the ending image
        this.load.image('intro-bg', 'assets/environment/intro-bg.png');

        // Load the house layout
        this.load.image('layout-house', 'assets/environment/layout-house.png');
        // this.load.image('player', 'assets/characters/playerplaceholder.png');

        // Load the spritesheet for Rem's animation
        this.load.spritesheet('player', 'assets/characters/rem.png', { 
            frameWidth: 64, 
            frameHeight: 80 
        });

        // Load the spritesheet for Dot's animation
        this.load.spritesheet('dot', 'assets/characters/dot.png', { 
            frameWidth: 64, 
            frameHeight: 48 
        });

        // Load card collected HUD
        this.load.image('card-collected-hud', 'assets/ui/hud/card-collected.png');

        // Tarot cards
        // Only major arcana cards are used
        for (let i = 0; i <= 11; i++) {
            // Use backticks `` so that ${i} turns into the actual number
            const assetKey = `tarot-${i}`;
            const filePath = `assets/tarot/tarot-${i}.png`;
            // Check if the key is already in the queue to prevent double-loading
            if (!this.textures.exists(assetKey)) {
                this.load.image(assetKey, filePath);
            }
        }

        // Card flipping transition sound effect
        this.load.audio('card-flip', 'assets/sounds/card-sfx.mp3'); // src: https://pixabay.com/sound-effects/film-special-effects-flipcard-91468/

        // Dialogues
        this.load.image('dialogue-box', 'assets/ui/dialogues/dialogue.png'); // main dialogue box
        this.load.image('dialogue-rem', 'assets/ui/dialogues/dialogue-rem.png'); // Rem's dialogue box
        this.load.image('dialogue-dot', 'assets/ui/dialogues/dialogue-dot.png'); // Dot's dialogue box
        this.load.image('dialogue-arrow', 'assets/ui/dialogues/dialogue-arrow.png'); // arrow for multiple dialogues

        // Dialogue sound effects
        this.load.audio('click', 'assets/sounds/click-sfx.mp3'); // src: https://pixabay.com/sound-effects/film-special-effects-pen-click-411629/

        // Background music
        this.load.audio('bgm', 'assets/sounds/bgm.mp3'); // src: https://pixabay.com/music/modern-classical-cozy-piano-130875/
        
        // Footstep sound effect
        this.load.audio('walk', 'assets/sounds/footstep-sfx.m4a');
        
        // Door sound effect
        this.load.audio('door-opening', 'assets/sounds/door-opening.mp3'); // src: https://pixabay.com/sound-effects/household-dorm-door-opening-6038/
        this.load.audio('door-closing', 'assets/sounds/door-closing.mp3'); // src: https://pixabay.com/sound-effects/household-door-closed-382707/
    }

    create() {
        console.log("AssetLoader finished");
        this.scene.start('TitleScene');
    }
}

export default AssetLoader;