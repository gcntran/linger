import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    create() {
        const { width, height } = this.scale;
    
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
            startBtn.setTexture('start-button-active');
            
            // Slight delay so the player can actually see the "active" texture before the scene changes
            this.time.delayedCall(100, () => {
                this.scene.start('IntroScene');
            });
        });
    }
}

export default TitleScene;