/* eslint-disable no-undef */
/* eslint-disable no-mixed-operators */
/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import { Scene } from 'phaser';

export default class PreloaderScene extends Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // ======================================================
    //                      add logo image
    // ======================================================

    this.add.image(400, 300, 'logo');
    // ======================================================
    //                      Display progress bar
    // ======================================================

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);
    // ======================================================
    //                      Update progress bar
    // ======================================================
    this.load.on('progress', (value) => {
      // eslint-disable-next-line radix
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
    // ======================================================
    //                      Update file progress text
    // ======================================================
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // ======================================================
    //            Remove progress bar when complete
    // ======================================================

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
    // ======================================================
    //              load ../src/assets needed in our game
    // ======================================================

    this.load.image('blueButton1', '../src/assets/ui/blue_button02.png');
    this.load.image('blueButton2', '../src/assets/ui/blue_button03.png');
    this.load.image('box', '../src/assets/ui/grey_box.png');
    this.load.image('checkedBox', '../src/assets/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['../src/assets/HeroicDemise.mp3']);
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('About');
    }
  }
}