import Phaser from 'phaser';

class HouseScene extends Phaser.Scene {
    constructor() {
        super('HouseScene');
    }

    create() {
        console.log("HouseScene loaded");

        // 1. BACKGROUND & LAYOUT
        const layout = this.add.image(0, 0, 'layout-house').setOrigin(0, 0);

        // 2. PHYSICS GROUPS
        this.walls = this.physics.add.staticGroup();

        // 3. KITCHEN AREA COLLISIONS
         // Using a helper array to define zones quickly
        const kitchenZones = [
            { x: 540, y: 230, w: 430, h: 40 },  // Counter Part 1
            { x: 360, y: 280, w: 45, h: 120 },  // Counter Part 2
            { x: 592, y: 370, w: 195, h: 60 },  // Dining Table
            { x: 592, y: 403, w: 100, h: 50 },  // Dining Chairs
            { x: 340, y: 380, w: 25, h: 100 },   // Kitchen Cabinet
            { x: 360, y: 360, w: 20, h: 20 },    // Trash Can
            { x: 758, y: 290, w: 30, h: 370 },   // Wall Kitchen/Living
            { x: 315, y: 519, w: 30, h: 770 }    // Left Wall
        ];

        kitchenZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            // Adding physics to the zone and making it immovable (static) so it acts as a solid object for collisions.
            this.physics.add.existing(zone, true);
            // Adding the zone to the walls group so that it will be included in collision checks with the player. 
            // This allows the player to collide with these zones as if they were solid objects in the game world.
            this.walls.add(zone);
        });
        // 4. BATHROOM & DOOR LOGIC
        const bathroomZones = [
            { x: 415, y: 575, w: 165, h: 30 }, // Bathroom wall
            { x: 612, y: 575, w: 60, h: 30 }, // Door wall (will be removed when door opens)
            { x: 654, y: 740, w: 25, h: 300 }, // Wall Bathroom/Laundry
            { x: 415, y: 670, w: 170, h: 30 }, // Left Wall/Floor
            { x: 615, y: 670, w: 70, h: 30 }, // Right Wall/Floor
            { x: 410, y: 700, w: 93, h: 30 }, // Cabinet
            { x: 613, y: 700, w: 26, h: 30 }, // Plant pot
            { x: 613, y: 700, w: 26, h: 30 }, // Plant pot
        ];
         // Using the same helper array approach for bathroom zones
        bathroomZones.forEach(z => {
            // Create a zone for each bathroom collision area. 
            // Why z is used? It's zone, and it contains the properties x, y, w, h that define the position and size of the collision area.
            // z.x and z.y are the center coordinates, while z.w and z.h are the width and height of the zone.
            let zone = this.add.zone(z.x, z.y, z.w, z.h); 
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // Door setup: Create a separate zone for the door's collision and a larger one for the trigger area
        this.doorWall = this.add.zone(540, 635, 80, 150);
        this.physics.add.existing(this.doorWall, true);
        this.walls.add(this.doorWall);

        // This trigger zone is larger than the door itself to allow for easier interaction
        this.doorTrigger = this.add.zone(540, 575, 100, 80);
        this.physics.add.existing(this.doorTrigger, true);

        // 5. PLAYER SETUP
        this.player = this.physics.add.sprite(500, 300, 'player');
        this.player.setScale(2);
        this.player.body.setSize(16, 20);
        this.player.body.setOffset(8, 12);
        this.player.setCollideWorldBounds(true);
        this.player.setDepth(10); // Keeps player above the floor

        // 6. COLLISIONS & INTERACTIONS
        this.physics.add.collider(this.player, this.walls);
        this.playerNearDoor = false;

        // Adding a pointerdown event listener to the entire game canvas. 
        // When the player clicks anywhere, it checks if they are near the door and opens it if they are.
        this.input.on('pointerdown', (pointer) => {
            console.log(`Clicked at: ${pointer.worldX}, ${pointer.worldY}`);
            if (this.playerNearDoor) {
                this.openDoor();
            }
        });

        // 7. CONTROLS & MAIN CAMERA
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });


        // The main camera is set to follow the player
        this.cameras.main.startFollow(this.player);
        // The camera bounds are set to the size of the layout image, ensuring that the camera doesn't show areas outside of the intended game world.
        this.cameras.main.setBounds(0, 0, 1920, 1080);
        // The zoom level of the camera is set to 1.5, which means the camera will zoom in by 50%
        this.cameras.main.setZoom(1.5);
        this.cameras.main.setBackgroundColor('#222222');
        // The physics world bounds are also set to match the layout size, ensuring that the player cannot move outside of the intended game area.
        this.physics.world.setBounds(0, 0, 1920, 1080);

        // 8. UI CAMERA & FULLSCREEN BUTTON (The Fix)
        // Create a new camera specifically for UI that doesn't zoom
        const uiCam = this.cameras.add(0, 0, this.scale.width, this.scale.height);
        uiCam.renderGL = false; // This prevents the debug overlay from double-rendering on this camera
        uiCam.ignore(this.physics.world.debugGraphic);
    
        // Create a fullscreen toggle button in the top-left corner of the screen.
        const fsButton = this.add.text(20, 20, 'Fullscreen', {
            fontSize: '20px',
            color: '#ffffff',
            backgroundColor: '#333'
        })
        .setPadding(10)
        .setInteractive({ useHandCursor: true })
        .setDepth(100); // Forces the button to render on top of everything

        // Instruct the main camera to ignore the UI button, 
        // and the UI camera to ignore the game world
        this.cameras.main.ignore(fsButton);
        uiCam.ignore([layout, this.player, this.walls]);

        // Add a click event listener to the fullscreen button that toggles fullscreen mode when clicked.
        fsButton.on('pointerup', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
    }

    // The openDoor method is responsible for "opening" the door by destroying the doorWall zone, which removes the collision and allows the player to pass through where the door was located.
    openDoor() {
        if (this.doorWall) {
            console.log("Door opened! Removing collision...");
            this.doorWall.destroy(); 
            this.doorWall = null;    
        }
    }

    update() {
        const speed = 150;
        this.player.setVelocity(0, 0);

        // Check if the player is overlapping with the door trigger zone. If they are, set playerNearDoor to true, allowing them to interact with the door. If they are not overlapping, set it to false.
        if (this.physics.overlap(this.player, this.doorTrigger)) {
            this.playerNearDoor = true;
        } else {
            this.playerNearDoor = false;
        }

        // The player's velocity is set based on the WASD input
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

        if (this.player.body.velocity.x !== 0 && this.player.body.velocity.y !== 0) {
            this.player.body.velocity.normalize().scale(speed);
        }
    }
}

export default HouseScene;