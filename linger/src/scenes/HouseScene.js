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

        // Add click to get coordinates (for collision debugging)
        this.input.on('pointerdown', (pointer) => {
            console.log(pointer.worldX, pointer.worldY);
        });

        // Add static group for walls (for collision)
        const walls = this.physics.add.staticGroup();

        // KITCHEN AREA
        // 1. COUNTERS
        // Create the first part of the kitchen counter, stove, fridge, plant pot
        // Left corner wall with kitchen counter (horizontal)
        const counterPart1 = this.add.zone(540, 220, 430, 40);
        this.physics.add.existing(counterPart1, true);
        // Create the second part (vertical)
        const counterPart2 = this.add.zone(360, 280, 40, 120);
        this.physics.add.existing(counterPart2, true);

        // Add both parts to the walls group
        walls.add(counterPart1);
        walls.add(counterPart2);


        // 2. DINING TABLE, 


        // Add player with start point (bed)
        this.player = this.physics.add.sprite(500, 300, 'player');
        // Scale player
        this.player.setScale(2);
        
        // Add the collider
        this.physics.add.collider(this.player, walls);

        // WASD movement
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });


        // Add camera zoom for better visibility
        this.cameras.main.setZoom(1.5);  
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