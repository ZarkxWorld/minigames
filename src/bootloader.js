class Bootloader extends Phaser.Scene {
    constructor() {
        super({key: "Bootloader"});
    }
    preload() {
        this.load.on("complete", () => {
            this.scene.start("Scene_play");
        });
        this.load.image("cancha", "./assets/tenis.png");
        this.load.image("ball", "./assets/ball.png");
        this.load.image("izquierda", "./assets/left_pallete.png");
        this.load.image("derecha", "./assets/right_pallete.png");
        this.load.image("separador", "./assets/separator.png");
        this.load.audio("rebote", ["./assets/musica/Rebote.mp3","./assets/musica/Rebote.wav"]);
    }
}
export default Bootloader;