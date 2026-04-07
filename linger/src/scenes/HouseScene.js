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
            { x: 340, y: 380, w: 25, h: 100 },  // Kitchen Cabinet
            { x: 360, y: 360, w: 20, h: 20 },   // Trash Can
        ];

        kitchenZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // 4. BATHROOM AREA COLLISIONS
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


        // 5. LAUNDRY AREA COLLISIONS
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
            { x: 830, y: 735, w: 50, h: 75 },    // Shoe cabinet
            { x: 852, y: 770, w: 40, h: 85 },    // Clothes rack
            { x: 1065, y: 722, w: 50, h: 170 },    // Outerwear closet
        ];

        livingZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });


        // 6. BEDROOM AREA COLLISIONS
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

        // 7. STORAGE AREA COLLISIONS
        const storageZones = [
            { x: 1132, y: 760, w: 20, h: 160 },   // Laundry cabinet
            { x: 1223, y: 750, w: 40, h: 10 },   // Box
        ];

        storageZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // 8. MAIN WALLS
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


        // 9. ALL DOORS LOGIC
        this.doorList = []

        // Bathroom door
        this.addDoor(540, 635, 80, 150, 'bathroom');
        // Laundry doors
        this.addDoor(727, 635, 80, 150, 'laundry');
        // Bedroom door
        this.addDoor(1252, 355, 20, 110, 'bedroom');
        // Storage door
        this.addDoor(1178, 635, 80, 150, 'storage');


        // 10. LOST TAROT DATA & INTERACTIONS
        this.questIndex = 0; // Tracks which card is on (0-11)
        this.questState = 'PRE_SEARCH'; // Current phase: PRE_SEARCH, OBJECT, CARD, POST_REACTION

        this.questData = [
        {
            name: "The Entryway Shoes - The Fool",
            preLine: ["I should probably start at the beginning. Where did I leave my walking shoes?"],
            objectLines: ["Dot, you didn't chew on the laces again, did you?", "Ah... there's a card tucked right inside the heel."],
            tarotKey: 'tarot-0', 
            narratorLine: [
                "The Fool: A leap into the unknown.",
                "Every step you took was a risk, and every risk brought you to this very room.",
                "The Fool reminds you that starting over isn't failing; it is simply stepping forward."
            ],
            postLine: ["The Fool... I guess every path has to start somewhere."],
        },

        {
            name: "The Sketchbook - The Magician",
            preLine: ["My desk is a mess. I wonder if Dot knocked something over by my sketchbook."],
            objectLines: ["Just a bunch of half-finished doodles.", "Wait, there's a card wedged beneath the back cover."],
            tarotKey: 'tarot-1', 
            narratorLine: [
                "The Magician: The power of creation.",
                "You hold the tools to build your own reality, even when the canvas feels too blank.",
                "The Magician speaks to the quiet spark inside you that turns nothing into something."
            ],
            postLine: ["The Magician. It is easy to forget what I am capable of building."],
        },

        {
            name: "The Hallway Mirror - The High Priestess",
            preLine: ["There's a strange reflection catching the light near the hallway mirror."],
            objectLines: ["Dot, are you staring at your own reflection again?", "No... there's a card slipped neatly into the frame."],
            tarotKey: 'tarot-2', 
            narratorLine: [
                "The High Priestess: Trusting your inner voice.",
                "The answers were always quiet, waiting patiently beneath the surface.",
                "She reminds you to listen to the feeling in your chest before the noise of the world."
            ],
            postLine: ["The High Priestess. I need to trust myself a bit more."],
        },

        {
            name: "The Window Plant - The Empress",
            preLine: ["I need to water the pothos anyway. Maybe there's a clue there."],
            objectLines: ["The soil is dry, but look at this...", "A card hidden right under the leaves. Taking care of things always grounded me."],
            tarotKey: 'tarot-3', 
            narratorLine: [
                "The Empress: Growth, patience, and nurturing.",
                "You cultivated life around you, even when you felt entirely barren yourself.",
                "The Empress reflects the quiet beauty of letting things bloom in their own time."
            ],
            postLine: ["The Empress... some things just need time and water."],
        },

        {
            name: "The Heavy Bookshelf - The Emperor",
            preLine: ["Those old textbooks on the bottom shelf... Dot loves hiding behind them."],
            objectLines: ["Dusty. But there's a card slipping out from a heavy binder.", "I relied on these rules for structure when everything else felt chaotic."],
            tarotKey: 'tarot-4', 
            narratorLine: [
                "The Emperor: Stability and foundation.",
                "You built walls to feel safe, but walls can also trap you if you forget to build doors.",
                "He asks you to examine the rules you laid down for yourself."
            ],
            postLine: ["The Emperor. Structure is good, but I don't want to be trapped by it."],
        },

        {
            name: "The Mantel Clock - The Hierophant",
            preLine: ["The clock has been ticking louder than usual today. Let's take a look."],
            objectLines: ["Right behind the pendulum. Good hiding spot, Dot.", "Time just keeps moving, following the exact same rhythm."],
            tarotKey: 'tarot-5', 
            narratorLine: [
                "The Hierophant: Tradition and shared belief.",
                "You sought meaning in the ways things have always been done by others.",
                "But the Hierophant wonders if those old routines still serve the person you are becoming."
            ],
            postLine: ["The Hierophant. Maybe it's okay to break the routine."],
        },

        {
            name: "The Mismatched Mugs - The Lovers",
            preLine: ["I left a pair of mugs on the coffee table. Let's see if Dot knocked them over."],
            objectLines: ["Still here. And look, a card resting right between them.", "Connection... it's always been the hardest part to figure out."],
            tarotKey: 'tarot-6', 
            narratorLine: [
                "The Lovers: Harmony and deep choices.",
                "It is about more than romance; it is about choosing what aligns with your soul.",
                "The Lovers remind you that every connection shapes the world you live in."
            ],
            postLine: ["The Lovers. It's all about who and what I choose to keep close."],
        },
        {
            name: "The Piano keyboard - The Chariot",
            preLine: ["Dot also likes walking on my keyboard to make some funny sounds. I need to check it too."],
            objectLines: [
                "Really, Dot, how did you tuck a card in here?", 
                "I remember those days… pushing myself forward just to avoid standing still."
            ],
            tarotKey: 'tarot-7', 
            narratorLine: [
                "The Chariot: The past, lack of direction.",
                "There were times when you moved without knowing why, pulled by old habits or old fears.",
                "The Chariot remembers those moments - when you pushed ahead but felt no true direction.",
                "Yet even wandering teaches you something. You learned what didn’t feel right, and that is its own kind of guidance."
            ],
            postLine: ["The Chariot... Maybe I wasn’t lost, maybe I was learning."],
        }
    ];

        // Physical interactables
        this.interactableList = [];
        
        this.questData.forEach((data, index) => {
            // Define random placeholder coordinates for the first 7 objects, 
            let x = 0, y = 0, w = 50, h = 50; 
            
            if (index === 0) { x = 852; y = 770; w = 40; h = 85; }      // tarot-0: Shoes
            else if (index === 1) { x = 1392; y = 220; w = 105; h = 70; } // tarot-1: Sketchbook
            else if (index === 2) { x = 415; y = 575; w = 165; h = 30; }  // tarot-2: Mirror
            else if (index === 3) { x = 1285; y = 452; w = 40; h = 30; }  // tarot-3: Plant
            else if (index === 4) { x = 1165; y = 225; w = 130; h = 22; } // tarot-4: Bookshelf
            else if (index === 5) { x = 930; y = 220; w = 150; h = 70; }  // tarot-5: Clock
            else if (index === 6) { x = 930; y = 345; w = 100; h = 40; }  // tarot-6: Mugs
            else if (index === 7) { x = 1367; y = 422; w = 95; h = 22; }  // tarot-7: Keyboard (The Chariot)
            
            // Add the interactable using the coordinates mapped above
            this.addInteractable(x, y, w, h, data.objectLines, 'Rem');
        });

        // QUEST HUD
        this.cardCounterText = this.add.text(20, 60, `Cards Collected: 0/12`, {
            fontSize: '32px',
            fill: '#ffffff',
            backgroundColor: 'rgba(23, 61, 54, 0.4)',
            padding: { x: 20, y: 20 },
            fontFamily: 'Arial',
        });
        this.cardCounterText.setScrollFactor(0); // Fixes it to the screen


        // 11. PLAYER SETUP
        this.player = this.physics.add.sprite(920, 550, 'player');
        this.player.setScale(3.4);
        this.player.body.setSize(12, 12);
        this.player.body.setOffset(10, 16);
        this.player.setCollideWorldBounds(true);
        this.player.setDepth(10); // Keeps player above the floor

        // 11B. PlAYER ANIMATION
        const anims = [
            { key: 'idle', start: 0, end: 3 },
            { key: 'walk-down', start: 21, end: 27 }, // Adjusted to safer frame ranges
            { key: 'walk-up', start: 45, end: 51 },
            { key: 'walk-left', start: 29, end: 30 },
            { key: 'walk-right', start: 42, end: 43 }
        ];

        const playerTexture = this.textures.get('player');
        const totalFramesAvailable = playerTexture.frameTotal - 1;
        
        anims.forEach(anim => {
            // Safety: Check if the texture exists and has enough frames
            const texture = this.textures.get('player');
            const totalFrames = texture.frameTotal - 1;
        
            if (anim.end <= totalFrames) {
                if (!this.anims.exists(anim.key)) {
                    this.anims.create({
                        key: anim.key,
                        frames: this.anims.generateFrameNumbers('player', { start: anim.start, end: anim.end }),
                        frameRate: 8,
                        repeat: -1
                    });
                }
            } else {
                console.warn(`Skipping ${anim.key}: Frame ${anim.end} exceeds total frames (${totalFrames})`);
            }
        });


        // 12. SFX
        // Walking sound
        this.walkSound = this.sound.add('walk', { volume: 1.2, loop: true });

        // Clicking sound (for the dialogue)
        this.clickSound = this.sound.add('click', {volume: 0.5 });

        // Card flipping sound (when the tarot card reveals)
        this.cardSound = this.sound.add('card-flip', {volume: 0.5});

        // 13. COLLISIONS & INTERACTIONS
        this.physics.add.collider(this.player, this.walls);

        // Adding a pointerdown event listener to the entire game canvas. 
        // When the player clicks anywhere, it checks if they are near the door and opens it if they are.
        this.input.on('pointerdown', (pointer) => {
            console.log(`Clicked at: ${pointer.worldX}, ${pointer.worldY}`);
            let currentQuest = this.questData[this.questIndex];

            // A. IF DIALOGUE IS ALREADY OPEN: Handle Paging or State Transitions
            if (this.dialogBg.visible) {
                if (this.clickSound) this.clickSound.play();
                this.currentDialogueIndex++;

                // 1. Determine which lines we are currently reading based on the state
                let lines = [];
                if (this.questState === 'PRE_SEARCH') lines = currentQuest.preLine;
                else if (this.questState === 'OBJECT') lines = currentQuest.objectLines;
                else if (this.questState === 'CARD') lines = currentQuest.narratorLine;
                else if (this.questState === 'POST_REACTION') lines = currentQuest.postLine;
                // Handle the announcement state
                else if (this.questState === 'ANNOUNCEMENT') {
                    const cardName = currentQuest.name.split(' - ')[1];
                    lines = [`You collected ${cardName}.`];
                }
                

                // 2. Check if we should show the next line or move to the next phase
                if (this.currentDialogueIndex < lines.length) {
                    this.dialogText.setText(lines[this.currentDialogueIndex]);
                    
                    // Because there is a sequence, the arrow always needs to be visible 
                    // while flipping through lines, unless it's a floating PRE_SEARCH thought.
                    this.dialogArrow.setVisible(true);
                    if (this.arrowTween && this.arrowTween.isPaused()) this.arrowTween.resume();

                    return;
                } else {
                    // Reached the end of these lines -> Trigger the transition to the next part of the sequence
                    this.handleQuestTransition();
                    return;
                }
            }

            // B. Door Logic
            this.doorList.forEach(door => {
                if (door.isNear && door.isOpen === false) {
                    this.openDoor(door);
                }
            });

            // C. Interactable Logic (card lost quest aware discovery)
            if (this.questState === 'PRE_SEARCH') {
                this.interactableList.forEach((item, index) => {
                    // Only allow interaction with the object that matches the current quest step
                    if (item.isNear && index === this.questIndex) {
                        if (this.clickSound) this.clickSound.play();
                        
                        this.questState = 'OBJECT';
                        this.activeInteractable = item;
                        this.currentDialogueIndex = 0;

                        // Start with the first line of the object discovery
                        this.dialogText.setText(currentQuest.objectLines[0]);
                        
                        // Set texture based on the quest speaker (usually Rem)
                        if (item.speaker === 'Rem') this.dialogBg.setTexture('dialogue-rem');
                        else if (item.speaker === 'Dot') this.dialogBg.setTexture('dialogue-dot');
                        else this.dialogBg.setTexture('dialogue-box');

                        this.dialogBg.setVisible(true);
                        this.dialogText.setVisible(true);

                        // NEW ARROW LOGIC: 
                        // Always show the arrow when finding an object, because even if 
                        // there is only 1 line of dialogue, the Tarot Card phase comes next!
                        this.dialogArrow.setVisible(true);
                        if (this.arrowTween) this.arrowTween.resume();
                    }    
                });
            }
        });


        // 14. CONTROLS & MAIN CAMERA
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

        


        // 15. UI CAMERA & FULLSCREEN BUTTON (The Fix)
        // Create a new camera specifically for UI that doesn't zoom
        const uiCam = this.cameras.add(0, 0, this.scale.width, this.scale.height);
        //uiCam.inputEnabled = false;
        uiCam.renderGL = false; // This prevents the debug overlay from double-rendering on this camera
        // Only ignore the debug graphic if it actually exists!
            if (this.physics.world.debugGraphic) {
                uiCam.ignore(this.physics.world.debugGraphic);
            }

        // Create a fullscreen toggle button in the top-left corner of the screen.
        const fsButton = this.add.text(20, 20, 'Fullscreen', {
            fontSize: '20px',
            color: '#ffffff',
            backgroundColor: '#333'
        })
            .setPadding(10)
            .setInteractive({ useHandCursor: true })
            .setDepth(100) // Forces the button to render on top of everything
            .setScrollFactor(0);

        // Instruct the main camera to ignore the UI button, 
        // and the UI camera to ignore the game world
        this.cameras.main.ignore(fsButton);

        // Instruct the UI camera to ignore the game world
        uiCam.ignore([layout, this.player, ...this.walls.getChildren()]);

        this.doorList.forEach(door => {
        uiCam.ignore(door.trigger);
        });

        // Add a click event listener to the fullscreen button that toggles fullscreen mode when clicked.
        fsButton.on('pointerup', () => {
            console.log('fullscreen clicked');
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });

        // 16A. DIALOGUE BOX UI
        // The dialogue background image
        this.dialogBg = this.add.image(1920 / 2, 850, 'dialogue-box')
            .setScrollFactor(0)
            .setDepth(200)
            .setScale(1.7)
            .setVisible(false)
            .setScrollFactor(0);

        // The dialogue text
        this.dialogText = this.add.text(1920 / 2, 850, '', {
            fontSize: '30px', 
            color: '#2F3A56', 
            align: 'left', 
            lineSpacing: 12,
            wordWrap: { width: 1000 }
        })
        .setOrigin(0.5)
        .setScrollFactor(0)
        .setDepth(201)
        .setVisible(false);

        // The dialogue arrow tracking
        this.currentDialogueIndex = 0;
        this.activeInteractable = null; // To keep track of which object is talking

        this.dialogArrow = this.add.image(1920 / 2 + 500, 950, 'dialogue-arrow')
            .setScrollFactor(0)
            .setDepth(202)
            .setScale(1.2)
            .setVisible(false);

        // Arrow animation: floating up and down (using Tweens)
        this.arrowTween = this.tweens.add({
            targets: this.dialogArrow,
            y: '+=10',          // Move down by 10 pixels
            duration: 600,      // Over 0.6 seconds
            yoyo: true,         // Reverse back to original position
            repeat: -1,         // Repeat forever
            ease: 'Sine.easeInOut' // Smooth movement
        });

        // 16B. TAROT CARD UI
        this.tarotCard = this.add.image(1920 / 2, 1080 / 2 - 50, 'tarot-0')
            .setScrollFactor(0)
            .setDepth(300) 
            .setScale(3)
            .setVisible(false);

        // Tell the cameras how to handle the UI
        this.cameras.main.ignore([this.dialogBg, this.dialogText, this.dialogArrow, this.tarotCard]);
    }


    // 17. DOOR HELPER FUNCTION
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

            // Play door sound effect
            this.sound.play('door-opening', { volume: 0.1 });

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

            // Play door sound effect
            this.sound.play('door-closing', { volume: 0.1 });

            door.wall.body.enable = true;
            // this.doorWall.setVisible(true);

            // PHYSICS FIX: Calling refresh() on the static group ensures 
            // the physics engine realizes the door is solid again.
            this.walls.refresh();
        }
    }

    // 18. INTERACTION HELPER FUNCTION
    addInteractable(x, y, w, h, message, speaker) {
        // Create the trigger zone
        let trigger = this.add.zone(x, y, w + 24, h + 24);
        this.physics.add.existing(trigger, true);

        // Save this item's data
        this.interactableList.push({
            trigger: trigger,
            message: message,
            speaker: speaker || 'Narrator',
            isNear: false
        });
    }

    // UPDATE FUNCTION
    update() {

// A. PROXIMITY CHECKS (Allows doors and items to detect the player)
this.doorList.forEach(door => {
    door.isNear = Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), door.trigger.getBounds());
});

this.interactableList.forEach(item => {
    item.isNear = Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), item.trigger.getBounds());
});

// B. MOVEMENT LOGIC
const speed = 170;
let vx = 0;
let vy = 0;

if (this.wasd.left.isDown) {
    vx = -speed;
    if (this.anims.exists('walk-left')) this.player.anims.play('walk-left', true);
} else if (this.wasd.right.isDown) {
    vx = speed;
    if (this.anims.exists('walk-right')) this.player.anims.play('walk-right', true);
}

if (this.wasd.up.isDown) {
    vy = -speed;
    if (vx === 0 && this.anims.exists('walk-up')) this.player.anims.play('walk-up', true);
} else if (this.wasd.down.isDown) {
    vy = speed;
    if (vx === 0 && this.anims.exists('walk-down')) this.player.anims.play('walk-down', true);
}

this.player.setVelocity(vx, vy);

// C. IDLE & SOUND LOGIC
if (vx === 0 && vy === 0) {
    if (this.anims.exists('idle')) this.player.anims.play('idle', true);
    if (this.walkSound.isPlaying) this.walkSound.stop();
    
    // Hide dialog if the player is standing still/walking away
    if (this.dialogBg.visible && this.questState === 'PRE_SEARCH') {
        this.dialogBg.setVisible(false);
        this.dialogText.setVisible(false);
        this.dialogArrow.setVisible(false);
    }
} else {
    this.player.body.velocity.normalize().scale(speed);
    if (!this.walkSound.isPlaying) this.walkSound.play();
}


    }

    handleQuestTransition() {
let currentQuest = this.questData[this.questIndex];
    this.currentDialogueIndex = 0;

    if (this.questState === 'PRE_SEARCH') {
        this.dialogBg.setVisible(false);
        this.dialogText.setVisible(false);
        this.dialogArrow.setVisible(false);
    } 
    else if (this.questState === 'OBJECT') {
        // Step 1: Show Tarot Card & Narrator Lines
        this.questState = 'CARD';
        this.tarotCard.setTexture(currentQuest.tarotKey).setVisible(true);
        this.dialogBg.setTexture('dialogue-box'); 
        this.dialogText.setText(currentQuest.narratorLine[0]);
        this.dialogArrow.setVisible(true);
    } 
    else if (this.questState === 'CARD') {
        // Step 2: Hide Card & Show Rem's Reaction
        this.questState = 'POST_REACTION';
        this.tarotCard.setVisible(false);
        this.dialogBg.setTexture('dialogue-rem');
        this.dialogText.setText(currentQuest.postLine[0]);
        this.dialogArrow.setVisible(true);
    }
    else if (this.questState === 'POST_REACTION') {
        // Step 3: Show Collection Announcement
        this.questState = 'ANNOUNCEMENT';
        this.dialogBg.setTexture('dialogue-box'); 
        const cardName = currentQuest.name.split(' - ')[1];
        this.dialogText.setText(`You collected ${cardName}.`);
        
        // Update HUD
        this.cardCounterText.setText(`Cards Collected: ${this.questIndex + 1}/12`);
        this.dialogArrow.setVisible(true);
    }
    else if (this.questState === 'ANNOUNCEMENT') {
        // Step 4: Close and go to next Pre-Search hint
        this.dialogBg.setVisible(false);
        this.dialogText.setVisible(false);
        this.dialogArrow.setVisible(false);
        this.questIndex++; 

        if (this.questIndex < this.questData.length) {
            this.questState = 'PRE_SEARCH';
            this.dialogBg.setTexture('dialogue-rem');
            this.dialogText.setText(this.questData[this.questIndex].preLine[0]);
            this.dialogBg.setVisible(true);
            this.dialogText.setVisible(true);
            this.dialogArrow.setVisible(this.questData[this.questIndex].preLine.length > 1);
        }
    }
}
    
}

export default HouseScene;