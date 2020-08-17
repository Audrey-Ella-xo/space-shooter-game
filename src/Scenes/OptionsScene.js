/* eslint-disable no-undef */
import { Scene } from 'phaser';

import Button from '../Objects/Button';

export default class OptionsScene extends Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40, fontFamily: 'Russo One' });
    this.musicButton = this.add.image(250, 300, 'checkedBox');
    this.musicText = this.add.text(320, 290, 'Music Enabled', { fontSize: 24, fontFamily: 'Russo One' });

    this.musicButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.updateAudio();

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
  }
}