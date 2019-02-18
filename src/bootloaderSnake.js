class Bootloader extends Phaser.Scene {
    constructor() {
        super('BootloaderSnake');
    }

    preload() {
        console.log('Soy BootloaderSnake');
        this.load.image('cuerpo', './assets/body.png');
        this.load.image('comida', './assets/food.png');
        this.load.image('tablero', './assets/tablero.png');

        this.load.json('fontJSON', './assets/font/font.json');
        this.load.image('font', './assets/font/font.png');

        this.load.on('complete', () => {
            const fontJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel', Phaser.GameObjects.RetroFont.Parse(this, fontJSON));

            this.scene.start('Menu');
        });
        
    }

}

export default Bootloader;