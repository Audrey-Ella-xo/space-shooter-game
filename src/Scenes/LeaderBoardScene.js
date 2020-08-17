/* eslint-disable no-undef */
import { Scene } from 'phaser';
import { getScoreBoard } from '../api';
import Button from '../Objects/Button';

export default class LeaderBoardScene extends Scene {
  constructor() {
    super('LeadersBoard');
  }

  create() {
    this.getScores = getScoreBoard();
    this.displayData = [];
    this.topScorers = this.add.text(
      280, 50, 'Top 5 Scores', {
        fontSize: '36px',
        fill: '#eee',
        fontStyle: 'bold',
        fontFamily: 'Cascadia Code',
      },
    );

    this.getItem = (score) => {
      const data = [];
      let i = 0;
      while (score[i] !== undefined) {
        if (score[i]) {
          data.push([score[i][1], score[i][0]]);
        }
        i += 1;
      }
      return data;
    };

    this.getScores.then(score => {
      this.displayData.push(this.getItem(score));
      for (let i = 0; i < 5; i += 1) {
        this.add.text(200, 100 + (i * 50), `${i + 1}. ${this.displayData[0][i][0].toUpperCase()}.................${this.displayData[0][i][1]}`, {
          fontSize: '24px',
          fill: '#FFF',
        });
      }
    });
    // ======================================================
    //                      Buttons
    // ======================================================
    this.restartButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height - 200, 'blueButton1', 'blueButton2', 'Restart!', 'Game');
    this.menuButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height - 120, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}