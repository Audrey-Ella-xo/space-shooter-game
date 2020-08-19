/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
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
    this.load.image('sprBg0', '../src/assets/darkPurple.png');
    this.load.image('sprBg1', '../src/assets/purple.png');
    this.load.image('energybar', '../src/assets/energybar.png');
    this.load.image('energycontainer', '../src/assets/energycontainer.png');
    this.load.spritesheet('sprExplosion', '../src/assets/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('sprEnemy0', '../src/assets/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', '../src/assets/sprEnemy1.png');
    this.load.spritesheet('sprEnemy2', '../src/assets/sprEnemy2.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprLaserEnemy0', '../src/assets/sprLaserEnemy0.png');
    this.load.image('sprLaserPlayer', '../src/assets/sprLaserPlayer.png');
    this.load.spritesheet('sprPlayer', '../src/assets/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.audio('sndExplode0', '../src/assets/audio/sndExplode0.wav');
    this.load.audio('sndExplode1', '../src/assets/audio/sndExplode1.wav');
    this.load.audio('sndLaser', '../src/assets/audio/sndLaser.wav');
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
      delay: 1500,
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

    this.health = this.gameOptions.initialTime;
    const energyContainer = this.add.sprite(700, 35, 'energycontainer');
    const energyBar = this.add.sprite(energyContainer.x + 11, energyContainer.y, 'energybar');
    this.energyMask = this.add.sprite(energyBar.x, energyBar.y, 'energybar');
    this.energyMask.visible = false;

    energyBar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyMask);

    this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
      this.health--;
      const stepWidth = this.energyMask.displayWidth / this.gameOptions.initialHealth;
      this.energyMask.x -= stepWidth;
      if (this.health === 0 && !player.getData('isDead')
                && !enemy.getData('isDead')) {
        player.explode(false);
        player.onDestroy();
        enemy.explode(true);
      }
    }, null, this);
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '28px', fill: '#fff', fontFamily: 'Russo One' };
    const label = new ScoreLabel(this, x, y, score, style);

    this.add.existing(label);

    return label;
  }

  createCursors() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  getEnemiesByType(type) {
    const arr = [];
    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      const enemy = this.enemies.getChildren()[i];
      if (enemy.getData('type') === type) {
        arr.push(enemy);
      }
    }
    return arr;
  }

  update() {
    if (!this.player.getData('isDead')) {
      this.player.update();

      if (this.cursors.up.isDown) {
        this.player.moveUp();
      } else if (this.cursors.down.isDown) {
        this.player.moveDown();
      }

      if (this.cursors.left.isDown) {
        this.player.moveLeft();
      } else if (this.cursors.right.isDown) {
        this.player.moveRight();
      }

      if (this.keySpace.isDown) {
        this.player.setData('isShooting', true);
      } else {
        this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
        this.player.setData('isShooting', false);
      }
    }

    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      const enemy = this.enemies.getChildren()[i];

      enemy.update();
      if (enemy.x < -enemy.displayWidth
            || enemy.x > this.game.config.width + enemy.displayWidth
            || enemy.y < -enemy.displayHeight * 4
            || enemy.y > this.game.config.height + enemy.displayHeight) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }

          enemy.destroy();
        }
      }
    }

    for (let i = 0; i < this.enemyLasers.getChildren().length; i++) {
      const laser = this.enemyLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth
          || laser.x > this.game.config.width + laser.displayWidth
          || laser.y < -laser.displayHeight * 4
          || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (let i = 0; i < this.playerLasers.getChildren().length; i++) {
      const laser = this.playerLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth
          || laser.x > this.game.config.width + laser.displayWidth
          || laser.y < -laser.displayHeight * 4
          || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}
