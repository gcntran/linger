import Phaser from 'phaser';
import { storyData } from './DialogueData.js';

class IntroScene extends Phaser.Scene {
    constructor() {
        super('IntroScene');
    }

    create() {
        const { width, height } = this.scale;
        console.log("IntroScene loaded");

        // // Fullscreen button
        // const fsButton = this.add.text(1720, 20, 'Fullscreen', {
        //     fontSize: '20px', 
        //     color: '#cccccc', 
        // })
        // .setPadding(10)
        // .setInteractive({ useHandCursor: true })
        // .setDepth(2000) // Super high depth so it sits above fade curtains
        // .setScrollFactor(0);

        // fsButton.on('pointerup', () => {
        //     if (this.scale.isFullscreen) {
        //         this.scale.stopFullscreen();
        //     } else {
        //         this.scale.startFullscreen();
        //     }
        // });

        // 0. BACKGROUND & LAYOUT
        // Add the animated background
        this.anims.create({
            key: 'intro-flow',
            frames: this.anims.generateFrameNumbers('intro-bg', { start: 0, end: 16 }),
            frameRate: 10,
            repeat: -1
        });

        // Add the spritesheet and play the animation
        const bg = this.add.sprite(width / 2, height / 2, 'intro-bg');
        bg.play('intro-flow');
        bg.setDisplaySize(width, height);
        bg.setDepth(0);

        // Dark overlay, dimmer background
        const overlay = this.add.rectangle(0, 0, width, height, 0x000000);
        overlay.setOrigin(0, 0);
        overlay.setAlpha(0.3); 
        overlay.setDepth(1);  

        // Fade in transition from TitleScene
        this.tweens.add({
            targets: bg,
            alpha: 1,
            duration: 1000
        });

        // 1. DATA SETUP
        this.introLines = storyData.intro;
        this.lineIndex = 0;

        // Dialogue Box (using the same assets as the HouseScene)
        //this.dialogBg = this.add.image(1250, 850, 'dialogue-box')
        //.setScale(1.7)

        this.dialogText = this.add.text(780, 1080 / 2, '', {
            fontSize: '34px',
            lineSpacing: 10,
            color: '#ffffff',
            align: 'start',
            wordWrap: {
                width: 1000,
                useAdvancedWrap: true // This helps align the right edge more precisely 
            },
            fontStyle: 'italic'
        })
        .setOrigin(0.0)
        .setDepth(2); 

        // Animated Arrow
        //this.dialogArrow = this.add.image(1250 + 500, 950, 'dialogue-arrow').setScale(1.2);
        //this.tweens.add({
        //targets: this.dialogArrow,
        //y: '+=10', duration: 600, yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        //});

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