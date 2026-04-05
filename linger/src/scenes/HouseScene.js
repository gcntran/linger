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


        
        // 4. KITCHEN AREA COLLISIONS
         // Using a helper array to define zones quickly
        const kitchenZones = [
            { x: 540, y: 230, w: 430, h: 40 },  // Counter Part 1
            { x: 360, y: 280, w: 45, h: 120 },  // Counter Part 2
            { x: 592, y: 370, w: 195, h: 60 },  // Dining Table
            { x: 592, y: 403, w: 100, h: 50 },  // Dining Chairs
            { x: 340, y: 380, w: 25, h: 100 },  // Kitchen Cabinet
            { x: 360, y: 360, w: 20, h: 20 },   // Trash Can
        ];

        kitchenZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // 5. BATHROOM AREA COLLISIONS
        const bathroomZones = [
            { x: 612, y: 575, w: 60, h: 30 },   // Door wall 
            { x: 415, y: 670, w: 170, h: 30 },  // Left wall/floor
            { x: 615, y: 670, w: 70, h: 30 },   // Right wall/floor 
            { x: 410, y: 700, w: 93, h: 30 },   // Cabinet
            { x: 613, y: 700, w: 26, h: 30 },   // Plant pot
            { x: 345, y: 760, w: 20, h: 20 },   // Trash can
            { x: 360, y: 800, w: 50, h: 30 },   // Toilet
            { x: 405, y: 855, w: 150, h: 50 },  // Bath
            { x: 570, y: 850, w: 70, h: 50 },   // Sink
            { x: 620, y: 780, w: 40, h: 20 },   // Cat litter box
        ];

        bathroomZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h); 
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });
        

        // 6. LAUNDRY AREA COLLISIONS
        const laundryZones = [
            { x: 683, y: 770, w: 20, h: 120 },  // Right wall/floor
            { x: 683, y: 770, w: 20, h: 120 },   // Laundry cabinet
            { x: 727, y: 850, w: 70, h: 70 },   // Washer/Dryer
            { x: 776, y: 752, w: 25, h: 25 },   // Box
        ];
        
        laundryZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h); 
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // 7. LIVING ROOM AREA COLLISIONS
        const livingZones = [
            { x: 820, y: 240, w: 50, h: 40 },    // End table
            { x: 930, y: 220, w: 150, h: 70 },   // Sofa top
            { x: 1057, y: 335, w: 68, h: 115 },  // Sofa right  
            { x: 928, y: 422, w: 77, h: 32 },    // Sofa bottom      
            { x: 930, y: 345, w: 100, h: 40 },   // Coffee table
            { x: 1000, y: 400, w: 35, h: 60 },   // Floor lamp
            { x: 1053, y: 220, w: 75, h: 20 },    // CD player
            { x: 1165, y: 225, w: 130, h: 22 },    // Bookshelf    
            { x: 1165, y: 225, w: 130, h: 22 },    // Shoe rack
            { x: 1165, y: 225, w: 130, h: 22 },    // Clothes rack
            { x: 1165, y: 225, w: 130, h: 22 },    // Outerwear cabinet


        ];

        livingZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h); 
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });


        // 8. BEDROOM AREA COLLISIONS
        const bedroomZones = [
            { x: 1303, y: 230, w: 60, h: 30 },    // Bookshelf
            { x: 1392, y: 220, w: 105, h: 70 },   // Desk
            { x: 1394, y: 255, w: 45, h: 55 },  // Chair 
            { x: 1478, y: 245, w: 47, h: 25 },    // End table   
            { x: 1555, y: 295, w: 100, h: 100 },   // Bed
            { x: 1473, y: 380, w: 50, h: 30 },   // Cat Bed
            { x: 1480, y: 422, w: 100, h: 20 },    // Cabinet
            { x: 1367, y: 422, w: 95, h: 22 },    // Keyboard
            { x: 1285, y: 452, w: 40, h: 30 },    // Plant pot
        ];

        bedroomZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h); 
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // 9. STORAGE AREA COLLISIONS
        const storageZones = [
            { x: 1132, y: 760, w: 20, h: 160 },   // Laundry cabinet
            { x: 1223, y: 750, w: 40, h: 10 },   // Box
        ];
        
        storageZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h); 
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // 3. MAIN WALLS
        const mainWalls = [
            { x: 970, y: 119, w: 1330, h: 30 },  // Top wall
            { x: 315, y: 519, w: 30, h: 770 },  // Left wall
            { x: 800, y: 910, w: 935, h: 30 },  // Bottom wall
            { x: 758, y: 290, w: 30, h: 370 },  // Wall Kitchen/Living
            { x: 415, y: 575, w: 165, h: 30 },  // Bathroom wall left
            { x: 663, y: 575, w: 35, h: 30 },  // Laundry wall left
            { x: 793, y: 575, w: 35, h: 30 },  // Laundry wall right
            { x: 654, y: 740, w: 25, h: 300 },  // Wall Bathroom/Laundry
            { x: 800, y: 740, w: 20, h: 310 },  // Wall Laundry/Living
            { x: 1645, y: 320, w: 25, h: 340 },  // Right wall
            { x: 1252, y: 220, w: 20, h: 150 },  // Wall Living/Bedroom part 1
            { x: 1252, y: 665, w: 20, h: 500 },  // Wall Living/Bedroom part 2
            { x: 1445, y: 500, w: 365, h: 20 },  // Bottom bedroom wall
            { x: 1104, y: 740, w: 20, h: 310 },  // Wall Storage/Living
            { x: 1113, y: 575, w: 38, h: 30 },  // Storage wall left
            { x: 1238, y: 575, w: 35, h: 30 },  // Storage wall right
        ];

        mainWalls.forEach(z => {
            // Create a zone for each bathroom collision area. 
            // Why z is used? It's zone, and it contains the properties x, y, w, h that define the position and size of the collision area.
            // z.x and z.y are the center coordinates, while z.w and z.h are the width and height of the zone.
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            // Adding physics to the zone and making it immovable (static) so it acts as a solid object for collisions.
            this.physics.add.existing(zone, true);
            // Adding the zone to the walls group so that it will be included in collision checks with the player. 
            // This allows the player to collide with these zones as if they were solid objects in the game world.
            this.walls.add(zone);
        });


        // 10. ALL DOORS LOGIC
        this.doorList = []

        // Bathroom door
        this.addDoor(540, 635, 80, 150, 'bathroom');
        // Laundry doors
        this.addDoor(727, 635, 80, 150, 'laundry');
        // Bedroom door
        this.addDoor(1252, 355, 20, 110, 'bedroom');
        // Storage door
        this.addDoor(1178, 635, 80, 150, 'storage');
        


        // 11. PLAYER SETUP
        this.player = this.physics.add.sprite(920, 550, 'player');
        this.player.setScale(2);
        this.player.body.setSize(16, 20);
        this.player.body.setOffset(8, 12);
        this.player.setCollideWorldBounds(true);
        this.player.setDepth(10); // Keeps player above the floor

        // 12. COLLISIONS & INTERACTIONS
        this.physics.add.collider(this.player, this.walls);

        // Adding a pointerdown event listener to the entire game canvas. 
        // When the player clicks anywhere, it checks if they are near the door and opens it if they are.
        this.input.on('pointerdown', (pointer) => {
            console.log(`Clicked at: ${pointer.worldX}, ${pointer.worldY}`);
            // If player is in the zone AND the door is currently solid/enabled
            // Check both proximity AND if the door is currently closed
            // Check every door in the list
            this.doorList.forEach(door => {
                if (door.isNear && door.isOpen === false) {
                    this.openDoor(door);
                }
            });
        });

        // 13. CONTROLS & MAIN CAMERA
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


        // 14. UI CAMERA & FULLSCREEN BUTTON (The Fix)
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

        // CAMERA FIX: The UI camera MUST ignore the game world and door triggers
        uiCam.ignore([layout, this.player, this.walls]);
        
        this.doorList.forEach(door => {
            uiCam.ignore(door.trigger);
        });

        // Add a click event listener to the fullscreen button that toggles fullscreen mode when clicked.
        fsButton.on('pointerup', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
    }


    // 15. DOOR HELPER FUNCTION
    addDoor(x, y, w, h) {
        // Create the physical wall
        let wall = this.add.zone(x, y, w, h);
        this.physics.add.existing(wall, true);
        this.walls.add(wall);

        // Create the trigger zone
        // Door trigger when the doors are in horizontal position
        let triggerW = (h > w) ? w + 60 : w + 40; 
        // Door trigger when the doors are in vertical position
        let triggerH = (h > w) ? h + 20 : h + 30;

        let trigger = this.add.zone(x, y, triggerW, triggerH);
        this.physics.add.existing(trigger, true);

        // Save this door's data
        this.doorList.push({
            wall: wall,
            trigger: trigger,
            isOpen: false,
            isNear: false
        });
    }

    // Door open and close function
    // Click to open the door, then it will automatically close after 3 seconds. 
    // The door can only be opened if it's currently closed, and it can only be closed if it's currently open.
    openDoor(door) {
        // Only open if it's currently closed (this.doorWall exists)
        if (door.wall && door.wall.active) {
            console.log("Door opened!");
            door.isOpen = true;
            
            // Disable the wall instead of fully destroying it 
            // This makes it much easier to "reset" later
            door.wall.body.enable = false; 
            // this.doorWall.setVisible(false); // Hide it (if it's a sprite)
    
            // 2. Set a timer to close it again in 3 seconds
            this.time.delayedCall(3000, () => {
                this.closeDoor(door);
            });
        }
    }

    // The closeDoor function checks if the door is currently open (i.e., this.doorWall is null). 
    // If it is open, it creates a new physics zone at the same location as the original door wall, effectively "closing" the door again.
    closeDoor(door) {
        if (door.wall) {
            console.log("Door automatically closing...");
            door.isOpen = false; // Reset the door state so it can be opened again

            door.wall.body.enable = true;
            // this.doorWall.setVisible(true);
    
            // PHYSICS FIX: Calling refresh() on the static group ensures 
            // the physics engine realizes the door is solid again.
            this.walls.refresh();
        }
    }
    

    // UPDATE FUNCTION
    update() {
        const speed = 150;
        this.player.setVelocity(0, 0);

       // Check proximity for every door in the house
    this.doorList.forEach(door => {
        if (this.physics.overlap(this.player, door.trigger)) {
            door.isNear = true;
        } else {
            door.isNear = false;
        }
    });

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