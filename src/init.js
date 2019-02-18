import Bootloader from './bootloader.js';
import Scene_play from './scenes/scene_play.js';
const config = {
    width: 840,
    height: 600,
    parent: "contenedor",
    physics: {
        default: "arcade"
    },
    scene: [
        Bootloader,
        Scene_play
    ]
}

new Phaser.Game(config);