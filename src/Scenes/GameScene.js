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
    
  }
}
