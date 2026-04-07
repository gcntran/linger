import Phaser from 'phaser';
import { storyData } from './DialogueData.js';

class IntroScene extends Phaser.Scene {
    constructor() {
        super('IntroScene');
    }

    create() {
        // 1. DATA SETUP
        this.introLines = storyData.intro;
        this.lineIndex = 0;
        const { width, height } = this.scale;

        // 2. VISUALS (Black background for atmosphere)
        this.add.rectangle(0, 0, width, height, 0x000000).setOrigin(0);

        // Dialogue Box (using the same assets as your HouseScene)
        this.dialogBg = this.add.image(width / 2, height - 150, 'dialogue-box').setScale(1.7);
        
        this.dialogText = this.add.text(width / 2, height - 150, '', {
            fontSize: '28px', 
            color: '#ffffff', 
            align: 'center', 
            wordWrap: { width: 1000 }, 
            fontStyle: 'italic'
        }).setOrigin(0.5);

        // Animated Arrow
        this.dialogArrow = this.add.image(width / 2 + 500, height - 100, 'dialogue-arrow').setScale(1.2);
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
                // Intro finished, go to the house!
                this.scene.start('HouseScene');
            }
        });
    }

    updateText() {
        const currentLine = this.introLines[this.lineIndex];
        this.dialogText.setText(currentLine.text);
    }
}

export default IntroScene;