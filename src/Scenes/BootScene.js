/* eslint-disable no-undef */
import { Scene } from 'phaser';

export default class BootScene extends Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', '../src/assets/home1.jpg');
  }

  create() {
    this.scene.start('Preloader');
  }
}