import Phaser from 'phaser';
import { storyData } from './DialogueData.js';

class IntroScene extends Phaser.Scene {
    constructor() {
        super('IntroScene');
    }

    create() {
        const { width, height } = this.scale;
        console.log("IntroScene loaded");

        // Fullscreen button
        const fsButton = this.add.text(20, 20, 'Fullscreen', {
            fontSize: '20px', 
            color: '#cccccc', 
            backgroundColor: '#333',
        })
        .setPadding(10)
        .setInteractive({ useHandCursor: true })
        .setDepth(2000) // Super high depth so it sits above fade curtains
        .setScrollFactor(0);

        fsButton.on('pointerup', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });

        // 0. BACKGROUND & LAYOUT
        const introBG = this.add.image(width / 2, height / 2, 'intro-bg');
        introBG.setDisplaySize(width, height);
        introBG.setAlpha(0);

        // Fade in transition from TitleScene
        this.tweens.add({
            targets: introBG,
            alpha: 1,
            duration: 1000
        });
    
        // 1. DATA SETUP
        this.introLines = storyData.intro;
        this.lineIndex = 0;

        // Dialogue Box (using the same assets as your HouseScene)
        this.dialogBg = this.add.image(1920 / 2, 850, 'dialogue-box')
        .setScale(1.7)

        
        this.dialogText = this.add.text(520, 800, '', {
            fontSize: '30px', 
            color: '#2F3A56', 
            align: 'start', 
            wordWrap: { 
                width: 910,
                useAdvancedWrap: true // This helps align the right edge more precisely 
            }, 
            fontStyle: 'italic'
        }).setOrigin(0.0);

        // Animated Arrow
        this.dialogArrow = this.add.image(1920 / 2 + 500, 950, 'dialogue-arrow').setScale(1.2);
        this.tweens.add({
            targets: this.dialogArrow,
            y: '+=10', duration: 600, yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });

        // 3. INITIAL TEXT
        this.updateText();

        // 4. INPUT LOGIC
        this.input.on('pointerdown', () => {
            this.lineIndex++;
            if (this.lineIndex < this.introLines.length) {
                this.updateText();
                this.sound.play('click', { volume: 0.5 });
            } else {
            const { width, height } = this.scale;

            // Transition to HouseScene
            // Create a curtain for the transition
            const curtain = this.add.rectangle(0, 0, width, height, 0x000000);
            curtain.setOrigin(0, 0).setAlpha(0).setDepth(1000);

            // Play the fade-out tween
            this.tweens.add({
                targets: curtain,
                alpha: 1,
                duration: 1000, // 1s
                onComplete: () => {
                // 3. Move to the house only after the fade is done
                this.scene.start('HouseScene');
            }
        });
            }
        });
    }

    updateText() {
        const currentLine = this.introLines[this.lineIndex];
        this.dialogText.setText(currentLine.text);
    }
}

export default IntroScene;