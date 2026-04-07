import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    create() {
        // Add your background image here if you have one
        const { width, height } = this.scale;

        // Add the Start Button
        const startBtn = this.add.image(width / 2, height / 2, 'start-button')
            .setInteractive({ useHandCursor: true });

        startBtn.on('pointerdown', () => {
            // Transition to the Intro Dialogue screen
            this.scene.start('IntroScreen');
        });
    }
}

export default TitleScene;