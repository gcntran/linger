import Phaser from 'phaser';
import AssetLoader from './scenes/AssetLoader.js';
import HouseScene from './scenes/HouseScene.js';

//  Find out more information about the Game Config at: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    pixelArt: true,
    
    scene: [
        AssetLoader,
        HouseScene
    ]
};

new Phaser.Game(config);
