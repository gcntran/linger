import Phaser from 'phaser';

class EndingScene extends Phaser.Scene {
    constructor() {
        super('EndingScene');
    }

    create() {
        const { width, height } = this.scale;

        // 1. BACKGROUND
        // We'll use a deep, cozy black or dark purple to match the tarot vibe
        this.add.rectangle(0, 0, width, height, 0x1a1a1a).setOrigin(0);

        // 2. TITLE TEXT
        const title = this.add.text(width / 2, height * 0.3, 'LINGER', {
            fontSize: '84px',
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic'
        }).setOrigin(0.5).setAlpha(0);

        // 3. CREDITS TEXT
        const credits = this.add.text(width / 2, height * 0.5, 
            'A Capstone Project by Gia Tran\n\n' +
            'Art, Code, and Narrative Design\n' +
            'Built with Phaser 3\n\n' +
            'Thank you for finding your way home.', 
            {
                fontSize: '24px',
                color: '#cccccc',
                align: 'center',
                lineSpacing: 10
            }
        ).setOrigin(0.5).setAlpha(0);

        // 4. BACK TO MENU BUTTON
        const menuBtn = this.add.image(width / 2, height * 0.8, 'start-button') 
            .setScale(0.8)
            .setInteractive({ useHandCursor: true })
            .setAlpha(0);

        const btnText = this.add.text(width / 2, height * 0.8, 'Main Menu', {
            fontSize: '20px',
            color: '#ffffff'
        }).setOrigin(0.5).setAlpha(0);

        // 5. ENTRANCE ANIMATION (Fading everything in slowly)
        this.tweens.add({
            targets: [title],
            alpha: 1,
            duration: 2000,
            ease: 'Power2'
        });

        this.tweens.add({
            targets: [credits],
            alpha: 1,
            duration: 2000,
            delay: 1500,
            ease: 'Power2'
        });

        this.tweens.add({
            targets: [menuBtn, btnText],
            alpha: 1,
            duration: 1000,
            delay: 3500,
            ease: 'Power2'
        });

        // 6. BUTTON INTERACTION
        menuBtn.on('pointerdown', () => {
            // Stop any playing music if you have it
            this.sound.stopAll();
            // Go back to the Title Scene
            this.scene.start('TitleScene');
        });

        // Hover effect for the button
        menuBtn.on('pointerover', () => menuBtn.setTint(0xcccccc));
        menuBtn.on('pointerout', () => menuBtn.clearTint());
    }
}

export default EndingScene;