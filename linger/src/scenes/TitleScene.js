import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    create() {
        console.log("TitleScene loaded");
        const { width, height } = this.scale;

        // Add the animated background
        this.anims.create({
            key: 'title-flow',
            frames: this.anims.generateFrameNumbers('title-bg', { start: 0, end: 16 }),
            frameRate: 10,
            repeat: -1
        });

        // Add the spritesheet and play the animation
        const bg = this.add.sprite(width / 2, height / 2, 'title-bg');
        bg.play('title-flow');

        bg.setDisplaySize(width, height);

        // Title text
        const title = this.add.text(width / 2, height * 0.4, 'LINGER', { // For left: const title = this.add.text(width * 0.25, height * 0.5, 'LINGER', {
            fontSize: '100px',
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            fontStyle: 'normal'
        }).setOrigin(0.5).setAlpha(0); // Start invisible to match the ending logic
        
        // Fade it in gracefully
        this.tweens.add({
            targets: title,
            alpha: 1,
            duration: 3000, // 3s
            ease: 'Power2'
        });

        // Start background music
        if (!this.sound.get('bgm')) {
        const music = this.sound.add('bgm', {
            loop: true,
            volume: 0.1
        });
            music.play();
        }
    
        // Initial button state (Normal)
        const startBtn = this.add.image(width / 2, height * 0.7, 'start-button') // For left: const startBtn = this.add.image(width * 0.25, height * 0.8, 'start-button')
            .setInteractive({ useHandCursor: true });
    
        // 1. Hover State (Mouse enters button)
        startBtn.on('pointerover', () => {
            startBtn.setTexture('start-button-hovered');
        });
    
        // 2. Normal State (Mouse leaves button)
        startBtn.on('pointerout', () => {
            startBtn.setTexture('start-button');
        });
    
        // 3. Active State (Mouse clicks/holds down)
        startBtn.on('pointerdown', () => {
            // If the music was blocked, this line wakes it up.
            if (this.sound.context.state === 'suspended') {
                this.sound.context.resume();
            }
            
            // Play the clicking sound effect
            this.sound.play('click', { volume: 0.5 });

            startBtn.setTexture('start-button-active');

            console.log("Transitioning to Intro...");

            // Fade out transition to introSene
            this.tweens.add({
            targets: [title, startBtn, bg], 
            alpha: 0,
            duration: 500,
            onComplete: () => {
            // Scene change happens after the fade
            this.scene.start('IntroScene');
            }
            });
        });
    }
}

export default TitleScene;