import Phaser from 'phaser';
import { storyData } from './DialogueData.js';

class IntroScreen extends Phaser.Scene {
    constructor() {
        super('IntroScreen');
    }

    create() {
        this.introLines = storyData.intro;
        this.lineIndex = 0;

        const { width, height } = this.scale;

        // Set up black background for the atmosphere
        this.add.rectangle(0, 0, width, height, 0x000000).setOrigin(0);

        // Dialogue Box (using your existing asset)
        this.dialogBg = this.add.image(width / 2, height - 150, 'dialogue-box').setScale(1.7);
        this.dialogText = this.add.text(width / 2, height - 150, '', {
            fontSize: '28px', color: '#ffffff', align: 'center', wordWrap: { width: 1000 }, fontStyle: 'italic'
        }).setOrigin(0.5);

        this.updateText();

        this.input.on('pointerdown', () => {
            this.lineIndex++;
            if (this.lineIndex < this.introLines.length) {
                this.updateText();
                this.sound.play('click', { volume: 0.5 });
            } else {
                // All intro lines done, go to the house!
                this.scene.start('HouseScene');
            }
        });
    }

    updateText() {
        this.dialogText.setText(this.introLines[this.lineIndex].text);
    }
}

export default IntroScreen;