import Phaser from 'phaser';
import { storyData, questData } from './DialogueData.js';

class HouseScene extends Phaser.Scene {
    constructor() {
        super('HouseScene');
    }

    create() {
        const { width, height } = this.scale;
        console.log("HouseScene loaded");


        // --- 1. BACKGROUND & LAYOUT ---

        const layout = this.add.image(0, 0, 'layout-house').setOrigin(0, 0);
        layout.setDisplaySize(width, height);

        // Transition from IntroScene
        // Create a curtain for the transition
        const curtain = this.add.rectangle(0, 0, width, height, 0x000000);
        curtain.setOrigin(0, 0).setDepth(1000);

        // Fade away to reveal the house
        this.tweens.add({
            targets: curtain,
            alpha: 0,
            duration: 1000, // 1s
            onComplete: () => {
                curtain.destroy();
        }
});


        // --- 2. PHYSICS GROUPS & COLLISION ZONES ---

        this.walls = this.physics.add.staticGroup();

        // Kitchen Area
        const kitchenZones = [
            { x: 540, y: 230, w: 430, h: 40 },  // Counter part horizontal
            { x: 360, y: 280, w: 45, h: 120 },  // Counter part vertical
            { x: 592, y: 370, w: 195, h: 60 },  // Dining table
            { x: 592, y: 403, w: 100, h: 50 },  // Dining chairs
            { x: 340, y: 380, w: 25, h: 100 },  // cupboard
            { x: 360, y: 360, w: 20, h: 20 },   // trash Can
        ];
        kitchenZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // Bathroom Area
        const bathroomZones = [
            { x: 415, y: 670, w: 170, h: 30 },  // Left wall with floor
            { x: 615, y: 670, w: 70, h: 30 },   // Right wall with floor
            { x: 410, y: 700, w: 93, h: 30 },   // Cabinet
            { x: 613, y: 700, w: 26, h: 30 },   // Plant pot
            { x: 345, y: 760, w: 20, h: 20 },   // Trash can
            { x: 360, y: 800, w: 50, h: 30 },   // Toilet
            { x: 405, y: 855, w: 150, h: 50 },  // Bathtub
            { x: 570, y: 850, w: 70, h: 50 },   // Sink
            { x: 620, y: 780, w: 40, h: 20 },   // Cat litter box
        ];
        bathroomZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // Laundry Area
        const laundryZones = [
            { x: 683, y: 770, w: 20, h: 120 },  // Right wall with floor, no need for left because the shelf blocks it
            { x: 683, y: 770, w: 20, h: 120 },  // Laundry shelf
            { x: 727, y: 850, w: 70, h: 70 },   // Washer/dryer
            { x: 776, y: 752, w: 25, h: 25 },   // Box
        ];
        laundryZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // Living Room Area
        const livingZones = [
            { x: 820, y: 240, w: 50, h: 40 },   // End table
            { x: 930, y: 220, w: 150, h: 70 },  // Sofa top
            { x: 1057, y: 335, w: 68, h: 115 }, // Sofa right
            { x: 928, y: 422, w: 77, h: 32 },   // Chair
            { x: 930, y: 345, w: 100, h: 40 },  // Coffee table
            // I need to add a TV here
            { x: 1000, y: 400, w: 35, h: 60 },  // Floor lamp
            { x: 1053, y: 220, w: 75, h: 20 },  // Retro speaker
            { x: 1165, y: 225, w: 130, h: 22 }, // Bookshelf
            { x: 830, y: 735, w: 50, h: 75 },   // Shoe cabinet
            { x: 852, y: 770, w: 40, h: 85 },   // Clothes rack
            { x: 1065, y: 722, w: 50, h: 170 }, // Outerwear closet
        ];
        livingZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // Bedroom Area
        const bedroomZones = [
            { x: 1303, y: 230, w: 60, h: 30 },  // Bookshelf
            { x: 1392, y: 220, w: 105, h: 70 }, // Desk
            { x: 1394, y: 255, w: 45, h: 55 },  // Chair
            { x: 1478, y: 245, w: 47, h: 25 },  // End table
            { x: 1555, y: 295, w: 100, h: 100 },// Bed
            { x: 1473, y: 380, w: 50, h: 30 },  // Cat bed
            { x: 1480, y: 422, w: 100, h: 20 }, // Small dresser
            { x: 1367, y: 422, w: 95, h: 22 },  // Keyboard
            { x: 1285, y: 452, w: 40, h: 30 },  // Plant pot
        ];
        bedroomZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // Storage Area
        const storageZones = [
            { x: 1132, y: 760, w: 20, h: 160 }, // Laundry storage
            { x: 1223, y: 750, w: 40, h: 10 },  // Box
        ];
        storageZones.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });

        // Main Walls
        const mainWalls = [
            { x: 970, y: 119, w: 1330, h: 30 }, // Top wall
            { x: 800, y: 910, w: 935, h: 30 },  // Bottom wall
            { x: 315, y: 519, w: 30, h: 770 },  // Left wall
            { x: 1645, y: 320, w: 25, h: 340 }, // Right wall
            { x: 758, y: 290, w: 30, h: 370 },  // Kitchen/living
            { x: 415, y: 575, w: 165, h: 30 },  // Bathroom left
            { x: 612, y: 575, w: 60, h: 30 },   // Bathroom right
            { x: 663, y: 575, w: 35, h: 30 },   // Laundry left
            { x: 793, y: 575, w: 35, h: 30 },   // Laundry right
            { x: 654, y: 740, w: 25, h: 300 },  // Bathroom/laundry
            { x: 800, y: 740, w: 20, h: 310 },  // Bathroom/living
            { x: 1252, y: 220, w: 20, h: 150 }, // Living/bedroom top
            { x: 1252, y: 665, w: 20, h: 500 }, // Living/bedroom bottom
            { x: 1445, y: 500, w: 365, h: 20 }, // Bedroom bottom
            { x: 1104, y: 740, w: 20, h: 310 }, // Storage/living
            { x: 1113, y: 575, w: 38, h: 30 },  // Storage left
            { x: 1238, y: 575, w: 35, h: 30 },  // Storage right
        ];
        mainWalls.forEach(z => {
            let zone = this.add.zone(z.x, z.y, z.w, z.h);
            this.physics.add.existing(zone, true);
            this.walls.add(zone);
        });


        // --- 3. DOORS LOGIC ---

        this.doorList = [];
        this.addDoor(540, 635, 80, 150, 'bathroom');
        this.addDoor(727, 635, 80, 150, 'laundry');
        this.addDoor(1252, 355, 20, 110, 'bedroom');
        this.addDoor(1178, 635, 80, 150, 'storage');


        // --- 4. PLAYER SETUP & SFX ---

        this.player = this.physics.add.sprite(1470, 300, 'player'); // Rem starts in the bedroom
        this.player.setScale(3.4);
        this.player.body.setSize(12, 12);
        this.player.body.setOffset(10, 16);
        this.player.setCollideWorldBounds(true);
        this.player.setDepth(10); 

        // Player Animations
        const anims = [
            { key: 'idle', start: 0, end: 3 },
            { key: 'walk-down', start: 21, end: 27 },
            { key: 'walk-up', start: 45, end: 51 },
            { key: 'walk-left', start: 29, end: 30 },
            { key: 'walk-right', start: 42, end: 43 }
        ];

        const playerTexture = this.textures.get('player');
        const totalFramesAvailable = playerTexture.frameTotal - 1;
        anims.forEach(anim => {
            if (anim.end <= totalFramesAvailable) {
                if (!this.anims.exists(anim.key)) {
                    this.anims.create({
                        key: anim.key,
                        frames: this.anims.generateFrameNumbers('player', { start: anim.start, end: anim.end }),
                        frameRate: 8,
                        repeat: -1
                    });
                }
            }
        });

        // SFX Setup
        this.walkSound = this.sound.add('walk', { volume: 1.2, loop: true });
        this.clickSound = this.sound.add('click', { volume: 0.5 });
        this.cardSound = this.sound.add('card-flip', { volume: 0.5 });

        // Physics Collider
        this.physics.add.collider(this.player, this.walls);
        


        // --- 5. INPUT & CONTROLS ---

        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });

        // --- ADD DOT HERE ---
        // Creating her early so the Camera can find her
        this.dotSofa = this.add.rectangle(1450, 450, 80, 40, 0xff0000, 0.5); 
        this.dotSofa.setDepth(5);

        // Central Click Listener
        this.input.on('pointerdown', (pointer) => {
            console.log(`Clicked at: ${pointer.worldX}, ${pointer.worldY}`);
            
        // --- THE FINAL DOOR & CREDITS LOGIC ---
        // This handles the transition from clicking the door to the ending scene
        if (this.storyPhase === 'FINAL_DOOR_WAIT') {
        // Approximate coordinates for the main front door (bottom center)
        // Adjust these numbers based on your actual door position
        const doorX = 1000; 
        const doorY = 950;
        const dist = Phaser.Math.Distance.Between(pointer.worldX, pointer.worldY, doorX, doorY);

        if (dist < 150) { // If clicking near the door
        if (this.clickSound) this.clickSound.play();
            
        this.storyPhase = 'CREDITS_SEQUENCE';
        this.finalLineIndex = 0;
        this.finalLines = [
            "The door opens. Light spills in - not the blinding kind, but the gentle kind that invites rather than demands.",
            "Step forward. Not into the past, not into the future, but into the present, you’ve finally learned to hold."
        ];
            
        // Show the first line manually
        this.dialogBg.setVisible(true).setTexture('dialogue-box');
        this.dialogText.setVisible(true).setText(this.finalLines[0]).setStyle({ fontStyle: 'italic' });
        this.dialogArrow.setVisible(true);
        return;
        }
    }

        if (this.storyPhase === 'CREDITS_SEQUENCE') {
        if (this.clickSound) this.clickSound.play();
            this.finalLineIndex++;
        
        if (this.finalLineIndex < this.finalLines.length) {
            this.dialogText.setText(this.finalLines[this.finalLineIndex]);
        } else {

            // Transition to EndingScene after the final line
            const { width, height } = this.scale;

            // Create the black curtain
            const curtain = this.add.rectangle(0, 0, width, height, 0x000000);
            curtain.setOrigin(0, 0).setAlpha(0).setDepth(2000); // Higher depth than UI

            // Transition to EndingScene
            this.tweens.add({
                targets: curtain,
                alpha: 1,
                duration: 1500, // Slightly longer fade for a dramatic ending
                    onComplete: () => {
                // OK! NOW GO TO THE ENDING SCENE!
                this.scene.start('EndingScene'); 
            }
        });
    }
        return;
}


        // --- 6. LOGICS ---
        // A. STORY PHASE LOGIC (Intro, Wakeup, Dot Discovery, Ending)
        // New Phases
        if (this.storyPhase !== 'FIND_CARDS' && 
            this.storyPhase !== 'SEARCH_DOT' && 
            this.storyPhase !== 'FINAL_DOOR_WAIT' && 
            this.storyPhase !== 'CREDITS_SEQUENCE') {
                
            if (this.clickSound) this.clickSound.play();
            this.lineIndex++;
            let currentArray = [];
            if (this.storyPhase === 'INTRO') currentArray = this.introLines;
            else if (this.storyPhase === 'WAKEUP') currentArray = this.wakeupLines;
            else if (this.storyPhase === 'DOT_TALK') currentArray = this.dotDiscoveryLines;
            else if (this.storyPhase === 'ENDING') currentArray = this.endingLines;
        
            if (this.lineIndex < currentArray.length) {
                this.showStoryDialogue();
            } else {
                this.transitionStoryPhase();
            }
            return; 
        }

        // B. QUEST & GAMEPLAY LOGIC (Only runs during 'FIND_CARDS')
        let currentQuest = this.questData[this.questIndex];

        // DIALOGUE ADVANCEMENT LOGIC
        if (this.dialogBg.visible) {
            // Play click sound when moving to the next line of quest text
            if (this.clickSound) this.clickSound.play();

            this.currentDialogueIndex++;
            let lines = [];
                
            if (this.questState === 'PRE_SEARCH') lines = currentQuest.preLine;
            else if (this.questState === 'OBJECT') lines = currentQuest.objectLines;
            else if (this.questState === 'CARD') lines = currentQuest.narratorLine; 
            else if (this.questState === 'POST_REACTION') lines = currentQuest.postLine;
            else if (this.questState === 'ANNOUNCEMENT') {
                const cardName = currentQuest.name.split(' - ')[1];
                lines = [`You collected ${cardName}.`];
            }

            if (this.currentDialogueIndex < lines.length) {
                this.dialogText.setText(lines[this.currentDialogueIndex]);

            // Sound effect when the card is revealed
            if (this.questState === 'CARD' && this.currentDialogueIndex === 0) {
                if (this.cardSound) this.cardSound.play();
            }

            this.dialogArrow.setVisible(true);
            if (this.arrowTween && this.arrowTween.isPaused()) this.arrowTween.resume();
            return;
            } else {
                this.handleQuestTransition();
                return;
            }
        }

        // C. DOOR LOGIC
        this.doorList.forEach(door => {
        if (door.isNear && door.isOpen === false) {
            this.openDoor(door);
            }
        });

        // D. INTERACTABLE OBJECT LOGIC (ONLY IN PRE_SEARCH PHASE)
        if (this.questState === 'PRE_SEARCH') {
            this.interactableList.forEach((item, index) => {
            if (item.isNear && index === this.questIndex) {

             // Play click sound for the initial interaction
                if (this.clickSound) this.clickSound.play();
                this.questState = 'OBJECT';
                this.activeInteractable = item;
                this.currentDialogueIndex = 0;

                this.dialogText.setText(currentQuest.objectLines[0]);
                        
            // Set texture based on speaker
                if (item.speaker === 'Rem') this.dialogBg.setTexture('dialogue-rem');
                else if (item.speaker === 'Dot') this.dialogBg.setTexture('dialogue-dot');
                else this.dialogBg.setTexture('dialogue-box');

                this.dialogBg.setVisible(true);
                this.dialogText.setVisible(true);
                this.dialogArrow.setVisible(true);
                if (this.arrowTween) this.arrowTween.resume();
                }    
            });
        }
    });


        // --- 7. CAMERAS ---

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 1920, 1080);
        this.cameras.main.setZoom(1.5);
        this.cameras.main.setBackgroundColor('#222222');
        this.physics.world.setBounds(0, 0, 1920, 1080);

        // This is the UI Camera that stays still
        const uiCam = this.cameras.add(0, 0, this.scale.width, this.scale.height);
        uiCam.renderGL = false; 

        const worldItems = [
            layout, 
            this.player, 
            this.dotSofa, 
            ...this.walls.getChildren()
        ];
        
        uiCam.ignore(worldItems);
        
        // Ensure the main camera ignores UI 
        this.uiElements = [];

        if (this.physics.world.debugGraphic) {
            uiCam.ignore(this.physics.world.debugGraphic);
        }

        // Fullscreen Button (from Arlin's suggestion)
        const fsButton = this.add.text(20, 20, 'Fullscreen', {
            fontSize: '20px', 
            color: '#ffffff', 
            backgroundColor: '#333'
        })
        .setPadding(10)
        .setInteractive({ useHandCursor: true })
        .setDepth(100)
        .setScrollFactor(0);

        this.cameras.main.ignore(fsButton);
        uiCam.ignore([layout, this.player, ...this.walls.getChildren()]);

        this.doorList.forEach(door => { uiCam.ignore(door.trigger); });

        fsButton.on('pointerup', () => {
            if (this.scale.isFullscreen) this.scale.stopFullscreen();
            else this.scale.startFullscreen();
        });


        // --- 8. PROPER UI SETUP (Must happen BEFORE showStoryDialogue) ---
        
        // Default dialogue box that can be changed to Rem or Dot versions when talking
        this.dialogBg = this.add.image(1920 / 2, 850, 'dialogue-box')
            .setScrollFactor(0)
            .setDepth(200)
            .setScale(1.7)
            .setVisible(false);

        // Dialogue text
        this.dialogText = this.add.text(520, 810, '', {
            fontSize: '30px', 
            color: '#2F3A56', 
            align: 'left', 
            lineSpacing: 12, 
            wordWrap: { 
                width: 910,
                useAdvancedWrap: true // This helps align the right edge more precisely 
            }
        })
        .setOrigin(0.0)
        .setScrollFactor(0)
        .setDepth(201)
        .setVisible(false);

        // The animated arrow to guide the player click to the next dialogue line 
        this.dialogArrow = this.add.image(1920 / 2 + 500, 950, 'dialogue-arrow')   
        .setScrollFactor(0)
        .setDepth(202)
        .setScale(1.2)
        .setVisible(false);

        // Animation for the arrow using tweens
        this.arrowTween = this.tweens.add({
            targets: this.dialogArrow,
            y: '+=10', duration: 600, yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });

        this.tarotCard = this.add.image(1920 / 2, 1080 / 2 - 50, 'tarot-0')
            .setScrollFactor(0)
            .setDepth(300)
            .setScale(3)
            .setVisible(false);

        // Tell main camera to ignore all UI elements
        this.cameras.main.ignore([this.dialogBg, this.dialogText, this.dialogArrow, this.tarotCard]);

        // HUD Text
        this.cardCounterText = this.add.text(20, 60, `Cards Collected: 0/12`, {
            fontSize: '32px', 
            fill: '#ffffff', 
            backgroundColor: 'rgba(23, 61, 54, 0.4)',
            padding: { x: 20, y: 20 }, 
            fontFamily: 'Arial',
        })
        .setScrollFactor(0)
        .setDepth(200);
        this.cameras.main.ignore(this.cardCounterText);


        // --- 8. DATA INITIALIZATION & STORY KICKOFF ---

        this.questData = questData;
        this.introLines = storyData.intro;
        this.wakeupLines = storyData.wakeup;
        this.dotDiscoveryLines = storyData.dotDiscovery;
        this.endingLines = storyData.ending;

        // Place physical interactables based on questData
        this.interactableList = [];
        this.questData.forEach((data, index) => {
            let x = 0, y = 0, w = 50, h = 50; 
            // Only for testing now, the real objects will be updated soon
            if (index === 0) { x = 852; y = 770; w = 40; h = 85; }        // tarot-0: Shoes
            else if (index === 1) { x = 1392; y = 220; w = 105; h = 70; } // tarot-1: Sketchbook
            else if (index === 2) { x = 415; y = 575; w = 165; h = 30; }  // tarot-2: Mirror
            else if (index === 3) { x = 1285; y = 452; w = 40; h = 30; }  // tarot-3: Plant
            else if (index === 4) { x = 1165; y = 225; w = 130; h = 22; } // tarot-4: Bookshelf
            else if (index === 5) { x = 930; y = 220; w = 150; h = 70; }  // tarot-5: Clock
            else if (index === 6) { x = 930; y = 345; w = 100; h = 40; }  // tarot-6: Mugs
            else if (index === 7) { x = 1367; y = 422; w = 95; h = 22; }  // tarot-7: Keyboard (The Chariot)
            
            this.addInteractable(x, y, w, h, data.objectLines, 'Rem');
        });

        
        // START THE STORY
        this.storyPhase = 'WAKEUP'; 
        this.lineIndex = 0;
        this.questIndex = 0;
        this.questState = 'PRE_SEARCH';
        this.currentDialogueIndex = 0;

        // BOOM! UI is built, data is loaded, now it is safe to show dialogue!
        this.showStoryDialogue();
    }


    // --- UPDATE LOGIC ---

    update() {
        // --- 1. STORY TRIGGERS ---
        if (this.storyPhase === 'SEARCH_DOT') {
            const sofaX = 1450; 
            const sofaY = 450;
            const dist = Phaser.Math.Distance.Between(this.player.x, this.player.y, sofaX, sofaY);
            
            if (dist < 100) {
                this.storyPhase = 'DOT_TALK';
                this.showStoryDialogue();
            }
        }

        // --- 2. FREEZE PLAYER DURING DIALOGUE ---
        if (this.dialogBg.visible) {
            this.player.setVelocity(0, 0);
            if (this.anims.exists('idle')) this.player.anims.play('idle', true);
            
            // STOP the walking sound if it's playing while dialogue is open
            if (this.walkSound && this.walkSound.isPlaying) {
                this.walkSound.stop();
            }
            return; 
        }

        // --- 3. PROXIMITY CHECKS ---
        this.doorList.forEach(door => {
            door.isNear = Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), door.trigger.getBounds());
        });

        this.interactableList.forEach(item => {
            item.isNear = Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), item.trigger.getBounds());
        });

        // --- 4. MOVEMENT LOGIC ---
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

        // --- 5. IDLE & SOUND LOGIC ---
        if (vx === 0 && vy === 0) {
            if (this.anims.exists('idle')) this.player.anims.play('idle', true);
            if (this.walkSound.isPlaying) this.walkSound.stop();
        } else {
            this.player.body.velocity.normalize().scale(speed);
            if (!this.walkSound.isPlaying) this.walkSound.play();
        }
    }



    // --- HELPER FUNCTIONS ---

    // --- 1. ADD DOOR WITH TRIGGER ZONE ---
    addDoor(x, y, w, h) {
        let wall = this.add.zone(x, y, w, h);
        this.physics.add.existing(wall, true);
        this.walls.add(wall);

        let triggerW = (h > w) ? w + 60 : w + 40;
        let triggerH = (h > w) ? h + 20 : h + 30;

        let trigger = this.add.zone(x, y, triggerW, triggerH);
        this.physics.add.existing(trigger, true);

        this.doorList.push({ wall: wall, trigger: trigger, isOpen: false, isNear: false });
    }

    // --- 2. OPEN DOOR BY DISABLING THE WALL COLLIDOR ---
    openDoor(door) {
        if (door.wall && door.wall.active) {
            door.isOpen = true;
            this.sound.play('door-opening', { volume: 0.1 });
            door.wall.body.enable = false;

            this.time.delayedCall(3000, () => {
                this.closeDoor(door);
            });
        }
    }

    /// Automatically close the door by re-enabling the wall collider
    closeDoor(door) {
        if (door.wall) {
            door.isOpen = false;
            this.sound.play('door-closing', { volume: 0.1 });
            door.wall.body.enable = true;
            this.walls.refresh();
        }
    }


    /// --- INTERACTABLE LOGIC ---

    // --- 1. ADD INTERACTABLE OBJECT ---
    // Create an interactable zone with associated dialogue and speaker info
    addInteractable(x, y, w, h, message, speaker) {
        let trigger = this.add.zone(x, y, w + 24, h + 24);
        this.physics.add.existing(trigger, true);
        this.interactableList.push({ trigger: trigger, message: message, speaker: speaker || 'Narrator', isNear: false });
    }

    // --- 2. HANDLE QUEST TRANSITION ---
    // Handle the transition between quest states (PRE_SEARCH -> OBJECT -> CARD -> POST_REACTION -> ANNOUNCEMENT)
    handleQuestTransition() {
        let currentQuest = this.questData[this.questIndex];
        this.currentDialogueIndex = 0;

        // Pre-search state just to show the hint
        if (this.questState === 'PRE_SEARCH') {
            this.dialogBg.setVisible(false);
            this.dialogText.setVisible(false);
            this.dialogArrow.setVisible(false);
        } 
        // When clicking the object, show the tarot card and the narrator line
        else if (this.questState === 'OBJECT') {
            this.questState = 'CARD';

        // Card flipping sound effect plays when clicking to reveal the card
        if (this.cardSound) this.cardSound.play();

            this.tarotCard.setTexture(currentQuest.tarotKey).setVisible(true);
            this.dialogBg.setTexture('dialogue-box'); 
            this.dialogText.setText(currentQuest.narratorLine[0]);
            this.dialogArrow.setVisible(true);
        } 
        // After reacting to the card, show the post-reaction line
        else if (this.questState === 'CARD') {
            this.questState = 'POST_REACTION';
            this.tarotCard.setVisible(false);
            this.dialogBg.setTexture('dialogue-rem');
            this.dialogText.setText(currentQuest.postLine[0]).setStyle({ fontStyle: 'normal' });
            this.dialogArrow.setVisible(true);
        }
        // After the post-reaction, show the announcement of the collected card and update to HUD
        else if (this.questState === 'POST_REACTION') {
            this.questState = 'ANNOUNCEMENT';
            this.dialogBg.setTexture('dialogue-box'); 
            const cardName = currentQuest.name.split(' - ')[1];
            this.dialogText.setText(`You collected ${cardName}.`).setStyle({ fontStyle: 'italic' });
            
            this.cardCounterText.setText(`Cards Collected: ${this.questIndex + 1}/12`);
            this.dialogArrow.setVisible(true);
        }
        // After the announcement, either move to find the next card or trigger the ending if all cards are collected
        else if (this.questState === 'ANNOUNCEMENT') {
            this.dialogBg.setVisible(false);
            this.dialogText.setVisible(false);
            this.dialogArrow.setVisible(false);

            // Reset the current interactable object so it won't trigger again
            this.questIndex++; 

            // Check if there are more cards to find, this is a loop that goes back to the PRE_SEARCH state for the next card
            if (this.questIndex < this.questData.length) {
                // Keep playing!
                this.questState = 'PRE_SEARCH';
                this.dialogBg.setTexture('dialogue-rem');
                this.dialogText.setText(this.questData[this.questIndex].preLine[0]).setStyle({ fontStyle: 'normal' });
                this.dialogBg.setVisible(true);
                this.dialogText.setVisible(true);
                this.dialogArrow.setVisible(this.questData[this.questIndex].preLine.length > 1);
            } else {

                // BOOM! ALL CARDS FOUND! TRIGGER THE ENDING!
                this.storyPhase = 'ENDING';
                this.lineIndex = 0;
                this.showStoryDialogue();
            }
        }
    }

    // --- 3. SHOW STORY DIALOGUE ---
    // Showing dialogue based on the Dialogue data and the current story phase
    showStoryDialogue() {
        let currentLine;
        if (this.storyPhase === 'INTRO') currentLine = this.introLines[this.lineIndex];
        else if (this.storyPhase === 'WAKEUP') currentLine = this.wakeupLines[this.lineIndex];
        else if (this.storyPhase === 'DOT_TALK') currentLine = this.dotDiscoveryLines[this.lineIndex];
        else if (this.storyPhase === 'ENDING') currentLine = this.endingLines[this.lineIndex];

        // Safety check to prevent errors
        if (!currentLine) return;

        // Show the dialogue box and text, set the content based on the current line
        this.dialogBg.setVisible(true);
        this.dialogText.setVisible(true).setText(currentLine.text);
        
        // Show the arrow so the player knows to click
        this.dialogArrow.setVisible(true);
        if (this.arrowTween && this.arrowTween.isPaused()) this.arrowTween.resume();
        
        // Switch textures based on speaker
        if (currentLine.speaker === 'narrator') {
            this.dialogBg.setTexture('dialogue-box');
            this.dialogText.setStyle({ fontStyle: 'italic' });
        } else if (currentLine.speaker === 'rem') {
            this.dialogBg.setTexture('dialogue-rem');
            this.dialogText.setStyle({ fontStyle: 'normal' });
        } else if (currentLine.speaker === 'dot') {
            this.dialogBg.setTexture('dialogue-dot');
            this.dialogText.setStyle({ fontStyle: 'normal' });
        }
    }

    // --- 4. TRANSITION BETWEEN STORY PHASES ---
    transitionStoryPhase() {
        this.lineIndex = 0;

        // A. WAKEUP -> SEARCH_DOT
        // This happens after Rem finishes the waking up monologue
        if (this.storyPhase === 'WAKEUP') {
            this.storyPhase = 'SEARCH_DOT'; // Now the player can walk to find Dot
            this.dialogBg.setVisible(false);
            this.dialogText.setVisible(false);
            this.dialogArrow.setVisible(false);
        } 
        
        // B. DOT_TALK -> FIND_CARDS
        else if (this.storyPhase === 'DOT_TALK') {
            this.storyPhase = 'FIND_CARDS';
            this.questIndex = 0;
            this.questState = 'PRE_SEARCH';
            this.currentDialogueIndex = 0; // Reset this for the new quest text
    
            // Grab the first hint from your questData
            let currentQuest = this.questData[this.questIndex];
            
            // Show the hint to look for the next card
            this.dialogBg.setVisible(true).setTexture('dialogue-rem');
            this.dialogText.setVisible(true).setText(currentQuest.preLine[0]);
            this.dialogText.setStyle({ fontStyle: 'normal' }); // Hints are usually italic as narrator, but I want to keep them in Rem's style
            this.dialogArrow.setVisible(true);
            
            if (this.arrowTween) this.arrowTween.resume();
        }
    
        // C. ENDING -> FINAL_DOOR_WAIT (The new logic)
        // This happens after Rem says "Alright, Dot. I'm ready..."
        else if (this.storyPhase === 'ENDING') {
            this.dialogBg.setVisible(false);
            this.dialogText.setVisible(false);
            this.dialogArrow.setVisible(false);
            
            // Change state so the click listener knows to look for the door click
            // BOOM! CLICK THE DOOR AND REM WILL FINISH THE GAME! GOOD JOB REM! YAY!!!!
            this.storyPhase = 'FINAL_DOOR_WAIT'; 
        }
    }
}

export default HouseScene;