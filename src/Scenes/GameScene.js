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

  // ======================================================
  //                      Create
  // ======================================================

  create() {
    this.anims.create({
        key: 'sprEnemy0',
        frames: this.anims.generateFrameNumbers('sprEnemy0'),
        frameRate: 20,
        repeat: -1,
      });
  
      this.anims.create({
        key: 'sprEnemy2',
        frames: this.anims.generateFrameNumbers('sprEnemy2'),
        frameRate: 20,
        repeat: -1,
      });
  
      this.anims.create({
        key: 'sprExplosion',
        frames: this.anims.generateFrameNumbers('sprExplosion'),
        frameRate: 20,
        repeat: 0,
      });
  
      this.anims.create({
        key: 'sprPlayer',
        frames: this.anims.generateFrameNumbers('sprPlayer'),
        frameRate: 20,
        repeat: -1,
      });

      this.sfx = {
        explosions: [
          this.sound.add('sndExplode0'),
          this.sound.add('sndExplode1'),
        ],
        laser: this.sound.add('sndLaser'),
      };

      this.backgrounds = [];
      for (let i = 0; i < 5; i++) {
        const bg = new ScrollingBackground(this, 'sprBg0', i * 10);
        this.backgrounds.push(bg);
      }
  
      this.player = new Player(
        this,
        this.game.config.width * 0.5,
        this.game.config.height * 0.9,
        'sprPlayer',
      );
      this.createCursors();

      this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();
    this.scoreLabel = this.createScoreLabel(16, 16, 0);

    this.time.addEvent({
        delay: 2000,
        callback() {
          let enemy = null;
  
          if (Phaser.Math.Between(0, 10) >= 3) {
            enemy = new GunShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          } else if (Phaser.Math.Between(0, 10) >= 5) {
            if (this.getEnemiesByType('ChaserShip').length < 5) {
              enemy = new ChaserShip(
                this,
                Phaser.Math.Between(0, this.game.config.width),
                0,
              );
            }
          } else {
            enemy = new CarrierShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0,
            );
          }
  
          if (enemy !== null) {
            enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
            this.enemies.add(enemy);
          }
        },
        callbackScope: this,
        loop: true,
      });
      this.physics.add.collider(this.playerLasers, this.enemies, function (playerLaser, enemy) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
  
          enemy.explode(true);
          playerLaser.destroy();
  
          this.scoreLabel.add(10);
          this.score += 10;
          storeScore(this.score);
        }
      }, null, this);
  
      this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
        if (!player.getData('isDead')
              && !enemy.getData('isDead')) {
          player.explode(false);
          player.onDestroy();
          enemy.explode(true);
        }
      });
  }
}
