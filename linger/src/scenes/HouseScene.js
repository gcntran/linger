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

        // COLLISION ZONES
        // KITCHEN AREA
        // 1. COUNTERS
        // Create the first part of the kitchen counter, stove, fridge, plant pot
        // Left corner kitchen counter (horizontal)
        const counterPart1 = this.add.zone(540, 230, 430, 40);
        this.physics.add.existing(counterPart1, true);
        // Create the second part (vertical)
        const counterPart2 = this.add.zone(360, 280, 45, 120);
        this.physics.add.existing(counterPart2, true);

        // 2. DINING TABLE, DINING CHAIRS LEFT AND RIGHT
        const diningTable = this.add.zone(592, 370, 195, 60);
        this.physics.add.existing(diningTable, true);

        // 3. DINING CHAIRS BOTTOM
        const diningChairs = this.add.zone(592, 403, 100, 50);
        this.physics.add.existing(diningChairs, true);

        // 4. KITCHEN CABINET
        const kitchenCabinet = this.add.zone(340, 380, 25, 100);
        this.physics.add.existing(kitchenCabinet, true);

        // 5. TRASH CAN
        const trashCan = this.add.zone(360, 360, 20, 20);
        this.physics.add.existing(trashCan, true);

        // 6. WALL BETWEEN KITCHEN AND LIVING ROOM
        const wallKitchen = this.add.zone(758, 290, 30, 370);
        walls.add(wallKitchen);

        // 7. LEFT WALL FROM KITCHEN TO BATHROOM
        const wallLeft = this.add.zone(315, 519, 30, 770);
        walls.add(wallLeft);

        // BATHROOM AREA
        // 1. HALF WALL BETWEEN BATHROOM AND DOOR
        const wallBathroom1 = this.add.zone(415, 575, 165, 30);
        walls.add(wallBathroom1);

        // 2. HALF WALL BETWEEN BATHROOM AND DOOR
        const wallBathroom2 = this.add.zone(612, 575, 60, 30);
        walls.add(wallBathroom2);

        // Door save for later reference in openDoor function
        this.wallBathroom1 = wallBathroom1;
        this.wallBathroom2 = wallBathroom2;

        // Door interaction zone (for future use)
        const doorZone = this.add.zone(540, 575, 80, 30);
        this.physics.add.existing(doorZone, true);

        // Click cursor to open the door
        this.input.on('pointerdown', () => {
            if (this.playerNearDoor) {
                this.openDoor();
            }
        });

        // 3. WALL BETWEEN BATHROOM AND LAUNDRY
        const wallBathroom3 = this.add.zone(654, 740, 25, 300);
        walls.add(wallBathroom3);


        // Add player with start point (bed)
        this.player = this.physics.add.sprite(500, 300, 'player');
        // Scale player
        this.player.setScale(2);
        // Scale the player hitbox smaller
        this.player.body.setSize(16, 20);
        this.player.body.setOffset(8, 12);

        // Door overlap detection
        this.physics.add.overlap(this.player, doorZone, () => {
            this.playerNearDoor = true;
        });

        this.physics.add.overlap(this.player, doorZone, () => {}, (player, zone) => {
            this.playerNearDoor = false;
        });
        

        // Add the collider
        // KITCHEN AREA
        this.physics.add.collider(this.player, walls);
        this.physics.add.collider(this.player, counterPart1);
        this.physics.add.collider(this.player, counterPart2);
        this.physics.add.collider(this.player, diningTable);
        this.physics.add.collider(this.player, diningChairs);
        this.physics.add.collider(this.player, kitchenCabinet);
        this.physics.add.collider(this.player, trashCan);
        // LIVING ROOM AREA


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

    // Open door function to remove the wall colliders blocking the door

    openDoor() {
        console.log("Door opened!");
    
        // Remove the wall collider blocking the door
        const wallBathroom1 = this.add.zone(415, 575, 165, 30);
        this.physics.add.existing(wallBathroom1, true);  // ← REQUIRED
        walls.add(wallBathroom1);

        const wallBathroom2 = this.add.zone(612, 575, 60, 30);
        this.physics.add.existing(wallBathroom2, true);  // ← REQUIRED
        walls.add(wallBathroom2);
    
        // Optionally play animation or sound
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

        // Full screen button (temporary, for testing purposes)
    const button = this.add.text(20, 20, 'Fullscreen', {
        fontSize: '32px',
        color: '#ffffff',
        backgroundColor: '#333'
    })
    .setPadding(10)
    .setInteractive({ useHandCursor: true });
    button.on('pointerup', () => {
        if (this.scale.isFullscreen) {
            this.scale.stopFullscreen();
        } else {
            this.scale.startFullscreen();
        }
    });

    }
}

export default HouseScene;