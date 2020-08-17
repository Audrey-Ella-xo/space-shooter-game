import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  parent: 'phaser-game',
  width: 800,
  height: 600,
  backgroundColor: '1A0114',
  dom: { createContainer: true },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  pixelArt: true,
  roundPixels: true,
};
