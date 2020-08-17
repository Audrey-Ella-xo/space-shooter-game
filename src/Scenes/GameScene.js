/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { Scene } from 'phaser';
import { storeScore } from '../localStorage';
import ScoreLabel from '../ScoreLabel';
import {
  Player, ChaserShip, GunShip, CarrierShip, ScrollingBackground,
} from '../Entities';

export default class GameScene extends Scene {
    constructor() {
        super('Game');
        this.score = 0;
        this.scoreLabel = undefined;
        this.gameOptions = {
          initialHealth: 100,
        };
      }

      // ======================================================
  //                      Preload
  // ======================================================

  preload() {
    this.load.image('sprBg0', './assets/darkPurple.png');
    this.load.image('sprBg1', './assets/purple.png');
    this.load.image('energybar', './assets/energybar.png');
    this.load.image('energycontainer', './assets/energycontainer.png');
    this.load.spritesheet('sprExplosion', './assets/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('sprEnemy0', './assets/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', './assets/sprEnemy1.png');
    this.load.spritesheet('sprEnemy2', './assets/sprEnemy2.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprLaserEnemy0', './assets/sprLaserEnemy0.png');
    this.load.image('sprLaserPlayer', './assets/sprLaserPlayer.png');
    this.load.spritesheet('sprPlayer', './assets/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.audio('sndExplode0', './assets/audio/sndExplode0.wav');
    this.load.audio('sndExplode1', './assets/audio/sndExplode1.wav');
    this.load.audio('sndLaser', './assets/audio/sndLaser.wav');
  }
}
