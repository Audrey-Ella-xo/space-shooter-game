/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import { Scene } from 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff', fontFamily: 'Russo One' });
    this.creditInfo1 = this.add.text(0, 0,
      'Created By: Odiaka Audrey © ; August 2020.', { fontSize: '22px', fill: '#fff', fontFamily: 'Russo One' });
    this.creditInfo2 = this.add.text(0, 0,
      'Template by: Richard Davey', { fontSize: '22px', fill: '#fff', fontFamily: 'Russo One' });
    this.creditInfo3 = this.add.text(0, 0,
      'Tutorial By: Jared (YCS LLC)', { fontSize: '22px', fill: '#fff', fontFamily: 'Russo One' });

    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.creditInfo1,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.creditInfo2,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.creditInfo3,
      this.zone,
    );

    this.creditInfo1.setY(1000);
    this.creditInfo2.setY(1100);
    this.creditInfo3.setY(1200);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.creditInfo1,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.creditInfo2,
      y: -250,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.creditInfo3,
      y: -200,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}