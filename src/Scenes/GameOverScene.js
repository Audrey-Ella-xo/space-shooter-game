/* eslint-disable no-undef */
import { Scene } from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
import { getCurrentScore } from '../localStorage';
import { submitScore } from '../api';

export default class GameOverScene extends Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    const score = getCurrentScore();

    this.gameOverText = this.add.text(350, 80, 'Game Over', { fontSize: '24px', fill: '#fff', fontFamily: 'Russo One' }).setDisplayOrigin;
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    this.displaystarsCollected = this.add.text(
      300, 120, `You total score is ${score}.`,
      { fontSize: '24px', fill: '#f3f0f09c', fontFamily: 'Russo One' },
    );

    this.displayRecordScore = this.add.text(
      150, 150, 'Enter your name below to save your score',
      { fontSize: '24px', fill: '#f3f0f09c', fontFamily: 'Russo One' },
    );

    this.menuButton = new Button(
      this, 400, 550, 'blueButton1', 'blueButton2', 'Menu', 'Title',
    );

    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height,
    );
    const div = document.createElement('div');

    div.innerHTML = `
    <input type="text" id="playerName" name="playerName" placeholder="Enter your name: " class="form-control" required><br>
    <input type="submit" name="submit" value="Submit Score!" class="btn btn-success">
    `;

    const element = this.add.dom(410, 350, div);
    element.addListener('click');
    element.on('click', (event) => {
      if (event.target.name === 'submit') {
        const inputName = document.getElementById('playerName');

        if (inputName.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          this.username = inputName.value;
          this.submit = submitScore(this.username, score);
          this.submit.then(() => { this.scene.start('LeadersBoard'); });
        }
      }
    });
  }

  ready() {
    this.load.on('complete', () => {
      this.gameOverText.destroy();
      this.displaystarsCollected.destroy();
      this.menuButton.destroy();
      this.element.destroy();
      this.ready();
    });
  }
}