import Phaser from 'phaser';

class HouseScene extends Phaser.Scene {
    constructor() {
        super('HouseScene');
    }

    create() {

        console.log("HouseScene loaded");

        this.add.text(100, 100, "Hello", { fontSize: '32px', color: '#ffffff' });

        // Debug background (optional)
        this.add.rectangle(0, 0, 1024, 768, 0x222222).setOrigin(0, 0);

        // Load the house layout
        this.add.image(0, 0, 'layout-house').setOrigin(0, 0);

        // Add player
        this.player = this.physics.add.sprite(400, 300, 'player');

        // Scale player and camera
        this.player.setScale(2);
        this.cameras.main.setZoom(1.5);

        // WASD movement
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });

        // Camera
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 1920, 1080);

        // World bounds
        this.physics.world.setBounds(0, 0, 1920, 1080);
        this.player.setCollideWorldBounds(true);
    }

    update() {
        const speed = 150;
        this.player.setVelocity(0, 0);

        if (this.wasd.up.isDown) {
            this.player.setVelocityY(-speed);
        } else if (this.wasd.down.isDown) {
            this.player.setVelocityY(speed);
        }

        if (this.wasd.left.isDown) {
            this.player.setVelocityX(-speed);
        } else if (this.wasd.right.isDown) {
            this.player.setVelocityX(speed);
        }
    }
}

export default HouseScene;