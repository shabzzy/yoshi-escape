let { log } = console;
let x = 10;
let y = 290;
let w = 100;
let h = 100;
let ex = 1240;
let ey = 280;
let audio = document.getElementById("sound");
let audio1 = new Audio();
audio1.src = "./sound/explosion.mp3";
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let enemy = document.getElementById("canvas");
let cont = enemy.getContext("2d");

// let user = prompt("Enter your name");
let score = document.getElementById("score");
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let score6 = 0;
// mainCharacter
class mainCharacter {
  constructor(x, y, scale) {
    this.scale = scale;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "./images/improvedanime.png";

    this.img.onload = () => {
      this.pdate();
    };
  }

  pdate() {
    if (this.img) {
      cont.drawImage(
        this.img,
        this.x,
        this.y,
        this.img.width / this.scale,
        this.img.height / this.scale
      );
    }
  }
}

const character = new mainCharacter(0, 250, 5);
//direcion of the mainCharacter onkey of arrow button
window.onkeydown = function (e) {
  context.clearRect(0, 0, 1345, 620);
  if (e.keyCode == 39) {
    character.x += 10;
  }
  if (e.keyCode == 40) {
    character.y += 10;
  }
  if (e.keyCode == 37) {
    character.x -= 10;
  }
  if (e.keyCode == 38) {
    character.y -= 10;
  }
  //mainCharacter entering the wall and returning
  // console.log(acimg.x);
  audio.play();
  character.pdate();
  villian1.update();
  villian2.update();
  villian3.update();
  villian4.update();
  villian5.update();
  if (character.x == 1270) {
    character.x = -10;
  } else if (character.x == -10) {
    character.x = 1270;
  }
  if (character.y == -50) {
    character.y = 610;
  } else if (character.y == 610) {
    character.y = -50;
  }
  meet();
};
//enemy
class enemys {
  constructor(ex, ey, width, height) {
    (this.width = width), (this.height = height), (this.ex = ex);
    this.ey = ey;
    this.enemyimage1 = new Image();
    this.enemyimage1.src = "./images/anim-project-removebg-preview.png";
    this.enemyimage2 = new Image();
    this.enemyimage2.src = "./images/anim-project-removebg-preview.png";
    this.enemyimage3 = new Image();
    this.enemyimage3.src = "./images/anim-project-removebg-preview.png";
    this.enemyimage4 = new Image();
    this.enemyimage4.src = "./images/anim-project-removebg-preview.png";
    this.enemyimage5 = new Image();
    this.enemyimage5.src = "./images/anim-project-removebg-preview.png";
    this.enemyimage1.onload = () => {
      this.update();
    };
    this.enemyimage2.onload = () => {
      this.update();
    };
    this.enemyimage3.onload = () => {
      this.update();
    };
    this.enemyimage4.onload = () => {
      this.update();
    };
    // this.enemyimage5.onload = () => {
    //   this.update();
    // };
  }

  update() {
    if (this.enemyimage1) {
      cont.drawImage(
        this.enemyimage1,
        this.ex,
        this.ey,
        (this.enemyimage1.width = 120),
        (this.enemyimage1.height = 100.31)
      );
    }
    if (this.enemyimage2) {
      cont.drawImage(
        this.enemyimage2,
        this.ex,
        this.ey,
        (this.enemyimage2.width = 120),
        (this.enemyimage2.height = 100.31)
      );
    }
    if (this.eneimage3) {
      cont.drawImage(
        this.enemyimage3,
        this.ex,
        this.ey,
        (this.enemyimage3.width = 120),
        (this.enemyimage3.height = 100.31)
      );
    }
    if (this.enemyimage4) {
      cont.drawImage(
        this.enemyimage4,
        this.ex,
        this.ey,
        (this.enemyimage4.width = 120),
        (this.enemyimage4.height = 100.31)
      );
    }
    if (this.enemyimage5) {
      cont.drawImage(
        this.enemyimage5,
        this.ex,
        this.ey,
        (this.enemyimage5.width = 120),
        (this.enemyimage5.height = 100.31)
      );
    }
  }
}

const villian1 = new enemys(1150, 0, 120, 100.31);
const villian2 = new enemys(1150, 150, 120, 100.31);
const villian3 = new enemys(1150, 300, 120, 100.31);
const villian4 = new enemys(1150, 450, 120, 100.31);
const villian5 = new enemys(1150, 550, 120, 100.31);
//enemy movement
timer = setInterval(() => {
  cont.clearRect(0, 0, 1345, 620);
  villian1.ex -= 10;
  villian2.ex -= 20;
  villian3.ex -= 15;
  villian4.ex -= 15;
  villian5.ex -= 25;
  // console.log(rectssss.ex);
 log(villian5.ex)
  if (villian1.ex == 0) {
    villian1.ex = 1150;
  }
  if (villian2.ex == -50) {
    villian2.ex = 1150;
  }
  if (villian3.ex == -20) {
    villian3.ex = 1150;
  }
  if (villian4.ex == -35) {
    villian4.ex = 1150;
  }
  if (villian5.ex == -25) {
    villian5.ex = 1150;
  }
  character.pdate();
  villian1.update();
  villian2.update();
  villian3.update();
  villian4.update();
  villian5.update();

  meet();
}, 60);

function meet() {
  if (
    character.x < villian1.ex + villian1.width &&
    character.x + w > villian1.ex &&
    character.y < villian1.ey + villian1.height &&
    h + character.y > villian1.ey
  ) {
    clearInterval(timer);
    
    audio.pause();
    audio.currentTime = 0;
    audio1.play();
    cont.clearRect(0, 0, 1345, 620);
    cont.font = "50px Arial";
    cont.fillStyle = "red";
    cont.fillText("Game Over", 600, 300);
    cont.font = "30px Arial";
    cont.fillStyle = "red";
    userScore = score;
    console.log(userScore);
    cont.fillText("Your Score is " + userScore, 600, 400);
    cont.fillText("Press F5 to restart", 600, 450);

  //   localStorage.setItem("score", userScore);
  //   console.log(localStorage.getItem("score"));
  //   console.log(userScore);
  //   // cont.fillText("Your Score is " + score, 600, 400);
  //   cont.fillText("Press F5 to restart", 600, 450);
  // }
  if (
    character.x < villian2.ex + villian2.width &&
    character.x + w > villian2.ex &&
    character.y < villian2.ey + villian2.height &&
    h + character.y > villian2.ey
  ) {
    clearInterval(timer);
    audio.pause();
    audio.currentTime = 0;
    audio1.play();
    cont.clearRect(0, 0, 1345, 600);
    cont.font = "50px Arial";
    cont.fillStyle = "red";
    cont.fillText("Game Over", 600, 300);
    cont.font = "30px Arial";
    cont.fillStyle = "red";
    cont.fillText("Press F5 to restart", 600, 350);
  }
  if (
    character.x < villian3.ex + villian3.width &&
    character.x + w > villian3.ex &&
    character.y < villian3.ey + villian3.height &&
    h + character.y > villian3.ey
  ) {
    clearInterval(timer);
    audio.pause();
    audio.currentTime = 0;
    audio1.play();
    cont.clearRect(0, 0, 1345, 600);
    cont.font = "50px Arial";
    cont.fillStyle = "red";
    cont.fillText("Game Over", 600, 300);
    cont.font = "30px Arial";
    cont.fillStyle = "red";
    cont.fillText("Press F5 to restart", 600, 350);
  }
  if (
    character.x < villian4.ex + villian4.width &&
    character.x + w > villian4.ex &&
    character.y < villian4.ey + villian4.height &&
    h + character.y > villian4.ey
  ) {
    clearInterval(timer);
    audio.pause();
    audio.currentTime = 0;
    audio1.play();
    cont.clearRect(0, 0, 1345, 600);
    cont.font = "50px Arial";
    cont.fillStyle = "red";
    cont.fillText("Game Over", 600, 300);
    cont.font = "30px Arial";
    cont.fillStyle = "red";
    cont.fillText("Press F5 to restart", 600, 350);
  }

  // if (
  //   character.x < villian5.ex + villian5.width &&
  //   character.x + w > villian5.ex &&
  //   character.y < villian5.ey + villian5.height &&
  //   h + character.y > villian5.ey
  // ) {
  //   clearInterval(timer);
  //   document.location.reload();
  // }
  // if (
  //   character.x < villian1.ex + 10 &&
  //   character.x + 10 > villian1.ex &&
  //   character.y < villian1.ey + 10 &&
  //   character.y + 10 > villian1.ey
  // ) {
  //   alert("Game Over");
  //   clearInterval(timer);
  //   document.location.reload();
  //   // character.x = 1150;
  //   // character.y = 250;
  //   // villian1.ex = 1150;
  //   // villian1.ey = 250;
  //   // villian2.ex = 1150;
  //   // villian2.ey = 100;
  //   // villian3.ex = 1150;
  //   // villian3.ey = 200;
  //   // villian4.ex = 1150;
  //   // villian4.ey = 300;
  //   // villian5.ex = 1150;
  //   // villian5.ey = 400;
  // }
  // if (
  //   character.x < villian2.ex + 10 &&
  //   character.x + 10 > villian2.ex &&
  //   character.y < villian2.ey + 10 &&
  //   character.y + 10 > villian2.ey
  // ) {
  //   alert("Game Over");
  //   clearInterval(timer);
  //   document.location.reload();
  // }
  // if (
  //   character.x < villian3.ex + 10 &&
  //   character.x + 10 > villian3.ex &&
  //   character.y < villian3.ey + 10 &&
  //   character.y + 10 > villian3.ey
  // ) {
  //   alert("Game Over");
  //   clearInterval(timer);
  //   document.location.reload();
  // }
  // if (
  //   character.x < villian4.ex + 10 &&
  //   character.x + 10 > villian4.ex &&
  //   character.y < villian4.ey + 10 &&
  //   character.y + 10 > villian4.ey
  // ) {
  //   alert("Game Over");
  //   clearInterval(timer);
  //   document.location.reload();
  // }
  // if (
  //   character.x < villian5.ex + 10 &&
  //   character.x + 10 > villian5.ex &&
  //   character.y < villian5.ey + 10 &&
  //   character.y + 10 > villian5.ey
  // ) {
  //   alert("Game Over");
  //   clearInterval(timer);
  //   document.location.reload();
  // }
}
