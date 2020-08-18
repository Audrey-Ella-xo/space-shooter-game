<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Audrey-Ella-xo/space-shooter-game">
    <img src="https://raw.githubusercontent.com/euqueme/toy-app/master/app/assets/images/mLogo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Space Shooter</h3>

  <p align="center">
    This project is part of the Microverse Javascript curriculum!
    <br />
    <a href="https://github.com/Audrey-Ella-xo/space-shooter-game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Audrey-Ella-xo/space-shooter-game/issues">Report Bug</a>
    ·
    <a href="https://github.com/Audrey-Ella-xo/space-shooter-game/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is a simple space shooter game, that was built in an effort to cement all the skills learned throughout the Javascript course.

#### Screenshot
![image](/src/assets/ShooterScreenshots/GameScene.png)
## 1. Getting Started: Additional description about the project and its features

This project is configured to be as simple as possible; build, deploy, and play with, all with npm.

## 2. Built With

- [EcmaScript 6.](https://www.w3schools.com/js/js_es6.asp)
- [Chrome web Browser.](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAjwqJ_1BRBZEiwAv73uwMy_V_6pha6yTVEa8JtU5T51QdyxZOVnsXlRndK05hSO4bSM6muP5RoC2E4QAvD_BwE&gclsrc=aw.ds)
- [Netlify](https://www.netlify.com/) for deployment.
- [Webpack](https://webpack.js.org/) for bundling files.
- [Phaser 3](https://phaser.io/) - HTML5 framework.
- [Jest](https://jestjs.io/) framework for tests purposes.
- [HTML/DOM](https://www.w3schools.com/js/js_htmldom.asp) - Manipulation for UI.
- [Eslint](https://eslint.org/) for linter checks and style guides.
- [Leaderboard API service](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) for the scores' leaders board.

## 3. Pre-requisites

- A code editor.
- Chrome Web Browser.
- Have NodeJS installed locally.
- Basic to intermediate JavaScript skills.

**Below are the instructions on how to play the game and also setting it up locally.**

### Build Dependencies 🚧

***The only dependencies are NodeJS & npm. Any NodeJS LTS version will work. Simply clone this repo and run npm install.***

- To get a local copy up and running, follow these simple example steps.

### Setup and installation

```
git clone git@github.com:Audrey-Ella-xo/space-shooter-game.git
```

### Install dependencies

```
npm install
```

### Play The Game 🕹️

Just run `npm run start` and go to `localhost:8080` in your favorite web browser.

### Run linter checks

```
npx eslint .
```

### Run tests

```
npm run test
```

### Deployment

|  APP NAME | BUILD STATUS: |
|   :---:   |    :---:     |
|**Ella's Shooter Game** | [![Netlify Status](#)](#) |

---

## 4. Game Development Guidelines & Timelines

| TIMELINE    |  TODO  |  DESCRIPTION  |    OUTCOME   |  STATUS   |
| :---        | :----: |    :----:     |    :----:    |  :----:   |
| Day 1       | Learn Phaser 3 framework | Obtain leads, knowledge and the syntax necessary for the development of the game.| Understanding the game framework.|&#9745;|
| Day 2       | Game Design | Design the game by defining the topic and objective of the game, the game mechanics, the different entities involved in the game (player, enemies, platforms, levels, etc.), the user interactions and finally the different screens (Phaser scenes) that needs implementation. |  Set objectives for remaining days. |&#9745;|
| Day 3       |Game Development| Game Development following the defined design|  Game Logic             |&#9745;|
| Day 4       |Game Development| Game Development following the defined design|  Game Interface         |&#9745;|
| Day 5       |Game Documentation| Game Documentation following the defined design|  Game Documentation |&#9745;|
---

## 5. Game Scenes & Their Work Descriptions

| SCENES           |                                                                 DESCRIPTION                                                                      |
| :---             |                                                                 :---                                                                             |
| **Boot**         | The first scene that is loaded by Phaser, and it will in turn load the `PreloaderScene`.                                                         |
| **Preloader**    | The second scene that is loaded after the `BootScene`. It displays the progress bar while it loads all of the assets needed for the game.        |
| **Title**        | The title of the game. It displays buttons to start the game, view credits, and modify options. It is loaded immediately after `PreloaderScene`. |
| **aboutGame**    | This scene loads when the player presses play in the `TitleScene`. It displays the instructions for the game and the mission ahead.              |
| **Credits**      | Credits for the game. It gets displayed when the player presses the credits button in the `TitleScene`.                                          |
| **Game**         | Contains the main logic for the game. Loads after the `aboutScene` loads.                                                                        |
| **GameOver**     | Displays the player's scores immediately the game is over and asks user to register their score after which is loads the `LeadersBoardScene`     |
| **LeadersBoard** | Displays the highscores and their owners. It loads immediately after the `GameOverScene`                                                         |
| **Options**      | Contains settings for the players to be able to modify in the game (example: mute audio).                                                        |
---

## 6. Pictorial view of what the screens look like

| SCENES              | SCREENSHOT |
| :----               |   :----:   |
| `About Scene`        | ![aboutScene](/src/assets/ShooterScreenshots/Introduction.png)           |
| `Title Scene`      | ![TitleScene](/src/assets/ShooterScreenshots/Title.png)       |
| `Game Over Scene`     | ![GameOverScene](/src/assets/ShooterScreenshots/GameOver.png)     |
| `Leaders Board Scene` | ![LeadersBoardScene](/src/assets/ShooterScreenshots/ScoreBoard.png) |
| `Credits Scene`      | ![CreditsScene](/src/assets/ShooterScreenshots/Credits.png)       |
---

## 7. Live Play

[Link to Live Play](#)

---

## 8. Author Section

Audrey Emmanuella Odiaka - [@o___audrey_xo](https://twitter.com/o___audrey_xo) - [@audrey-ella-xo](https://github.com/audrey-ella-xo) - anitaudrey@gmail.com
<br />
<br />

Project Link: [https://github.com/Audrey-Ella-xo/space-shooter-game/)

## 9. 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

---

## Credits

| Name  | Author | Source |
| :---- | :---- | :---:  |
| Spaceship Sprites | learn.yorkcs.com | [learn.yorkcs.com](https://learn.yorkcs.com/product/build-a-space-shooter-with-monogame/) |
| Spaceshooter Tutorial | [Jared](https://learn.yorkcs.com/author/jared/) | [learn.yorkcs.com](https://learn.yorkcs.com/category/tutorials/gamedev/phaser-3/build-a-space-shooter-with-phaser-3/) |
|Backgoround Music|[Matthew Pablo](https://opengameart.org/users/matthew-pablo)| [opengameart.org](https://opengameart.org/content/heroic-demise-updated-version) |
| Background Image | [Kenney](https://opengameart.org/users/kenney) | [opengameart.org](https://opengameart.org/)|
| Health bar | [Emanuele Feronato](https://www.emanueleferonato.com/) | [phaser.io](https://www.emanueleferonato.com/2019/04/24/add-a-nice-time-bar-energy-bar-mana-bar-whatever-bar-to-your-html5-games-using-phaser-3-masks/)|

---

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Microverse](https://www.microverse.org/)
* [The Best readme Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Audrey-Ella-xo/ror-social-scaffold.svg?style=flat-square
[contributors-url]: https://github.com/Audrey-Ella-xo/space-shooter-game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Audrey-Ella-xo/ror-social-scaffold.svg?style=flat-square
[forks-url]: https://github.com/Audrey-Ella-xo/space-shooter-game/network/members
[stars-shield]: https://img.shields.io/github/stars/Audrey-Ella-xo/ror-social-scaffold.svg?style=flat-square
[stars-url]: https://github.com/Audrey-Ella-xo/space-shooter-game/stargazers
[issues-shield]: https://img.shields.io/github/issues/Audrey-Ella-xo/ror-social-scaffold.svg?style=flat-square
[issues-url]: https://github.com/Audrey-Ella-xo/space-shooter-game/issues
[product-screenshot]: /app/assets/images/screenshot.png