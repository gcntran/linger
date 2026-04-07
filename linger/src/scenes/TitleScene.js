import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    create() {
        const { width, height } = this.scale;

        // Start background music
        if (!this.sound.get('bgm')) {
        const music = this.sound.add('bgm', {
            loop: true,
            volume: 0.1
        });
            music.play();
        }
    
        // Initial button state (Normal)
        const startBtn = this.add.image(width / 2, height / 2, 'start-button')
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

            console.log("Button clicked!");
            
            // Slight delay so the player can actually see the "active" texture before the scene changes
            this.time.delayedCall(150, () => {
                this.scene.start('IntroScene');
            });
        });
    }
}

export default TitleScene;