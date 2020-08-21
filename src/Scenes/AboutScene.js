/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import { Scene } from 'phaser';
import config from '../Config/config';

export default class AboutScene extends Scene {
  constructor() {
    super('About');
  }

  create() {
    this.GameTitleText = this.add.text(0, 0, "Ella's Space Shooter", { fontSize: '32px', fill: '#571398', fontFamily: 'Russo One' });
    this.GameContext1 = this.add.text(50, 100, 'This game is a simple space shooter game.', { fontSize: '20px', fill: '#fefefe', fontFamily: 'Russo One' });
    this.GameContext2 = this.add.text(50, 150, 'Your health bar reduces per laser hit.', { fontSize: '20px', fill: '#fff', fontFamily: 'Russo One' });
    this.GameContext3 = this.add.text(50, 200, 'Kill as many oponnents as possible before you run out.', { fontSize: '20px', fill: '#fff', fontFamily: 'Russo One' });
    this.GameContext4 = this.add.text(50, 250, 'Watch out for the chasers and evil ships!', { fontSize: '20px', fill: '#fff', fontFamily: 'Russo One' });
    this.GameContext5 = this.add.text(50, 350, 'Use the spacebar to shoot and the arrow keys to navigate. Good luck', { fontSize: '22px', fill: '#9A72DF', fontFamily: 'Russo One' });

    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.GameTitleText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.GameContext1,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.GameContext2,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.GameContext3,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.GameContext4,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.GameContext5,
      this.zone,
    );

    this.GameContext1.setY(350);
    this.GameContext2.setY(400);
    this.GameContext3.setY(450);
    this.GameContext4.setY(500);
    this.GameContext5.setY(550);

    this.creditsTween = this.tweens.add({
      targets: this.GameTitleText,
      y: -250,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.GameContext1,
      y: -200,
      ease: 'Power1',
      duration: 8000,
      delay: 5000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.GameContext2,
      y: -150,
      ease: 'Power1',
      duration: 8000,
      delay: 5000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.GameContext3,
      y: -100,
      ease: 'Power1',
      duration: 8000,
      delay: 5000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.GameContext4,
      y: -50,
      ease: 'Power1',
      duration: 8000,
      delay: 5000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}