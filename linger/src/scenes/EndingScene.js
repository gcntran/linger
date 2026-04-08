import Phaser from 'phaser';

class EndingScene extends Phaser.Scene {
    constructor() {
        super('EndingScene');
    }

    create() {
        const { width, height } = this.scale;

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

        // 1. BACKGROUND
        const bg = this.add.sprite(width / 2, height / 2, 'intro-bg');
        bg.setDisplaySize(width, height);

        // Transition from the HouseScene
        const curtain = this.add.rectangle(0, 0, width, height, 0x000000);
        curtain.setOrigin(0, 0).setDepth(1000);

        // Fade the curtain out
        this.tweens.add({
            targets: curtain,
            alpha: 0,
            duration: 1500,
            onComplete: () => {
                curtain.destroy();
        }
    });

        // 2. TITLE TEXT
        const title = this.add.text(width / 2, height * 0.3, 'LINGER', {
            fontSize: '84px',
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            fontStyle: 'normal'
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
        // Start with the default texture
        const menuBtn = this.add.image(width / 2, height * 0.8, 'go-to-title-button') 
            .setScale(0.8)
            .setInteractive({ useHandCursor: true })
            .setAlpha(0);

        // 5. ENTRANCE ANIMATIONS
        this.tweens.add({
            targets: [title],
            alpha: 1,
            duration: 3000,
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
            targets: [menuBtn],
            alpha: 1,
            duration: 1000,
            delay: 3500,
            ease: 'Power2'
        });

        // 6. BUTTON STATES & INTERACTION
        
        // Hover State
        menuBtn.on('pointerover', () => {
            menuBtn.setTexture('go-to-title-button-hovered');
            menuBtn.setScale(0.82); // Tiny "pop" effect
        });

        // Normal State
        menuBtn.on('pointerout', () => {
            menuBtn.setTexture('go-to-title-button');
            menuBtn.setScale(0.8);
        });

        // Active/Click State
        menuBtn.on('pointerdown', () => {
            // Play the clicking sound effect
            this.sound.play('click', { volume: 0.5 });
            menuBtn.setTexture('go-to-title-button-active');
            
            // Give the player a split second to see the 'active' state before switching scenes
            this.time.delayedCall(150, () => {
                this.sound.stopAll();
                this.scene.start('TitleScene');
            });
        });
    }
}

export default EndingScene;