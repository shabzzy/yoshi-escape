let { log } = console;

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
let score = 0;
let lives = 3;
// let Username = JSON.parse(window.localStorage.getItem("userName"))
// let show = (document.getElementById("write2").innerHTML =
//   "PLAYER" + ":" + `<span style="font-size: 20px;">${Username[0].name}</span>`);
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
  context.clearRect(0, 0, 1345, 640);
  if (e.keyCode == 39 && character.x !== 1300) {
    character.x += 10;
  }
  if (e.keyCode == 40 && character.y !== 530) {
    character.y += 10;
    console.log(character.y);
  }
  if (e.keyCode == 37 && character.x !== 0) {
    character.x -= 10;
  }
  if (e.keyCode == 38 && character.y !== 0) {
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
  // if (character.x == 1270) {
  //   character.x = -10;
  // } else if (character.x == -10) {
  //   character.x = 1270;
  // }
  // if (character.y == -50) {
  //   character.y = 610;
  // } else if (character.y == 610) {
  //   character.y = -50;
  // }
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
const villian5 = new enemys(1150, 500, 120, 100.31);
//enemy movement
timer = setInterval(() => {
  cont.clearRect(0, 0, 1345, 640);
  villian1.ex -= 10;
  villian2.ex -= 20;
  villian3.ex -= 15;
  villian4.ex -= 15;
  villian5.ex -= 25;
  // console.log(rectssss.ex);
  // log(villian5.ex);
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

//make lives decrease when enemy touches character
function meet() {
  if (
    character.x < villian1.ex + villian1.width &&
    character.x + w > villian1.ex &&
    character.y < villian1.ey + villian1.height &&
    h + character.y > villian1.ey
  ) {
    lives--;
    villian1.ex = 1150;
    // console.log(lives);
  }
  if (
    character.x < villian2.ex + villian2.width &&
    character.x + w > villian2.ex &&
    character.y < villian2.ey + villian2.height &&
    h + character.y > villian2.ey
  ) {
    lives--;
    villian2.ex = 1150;
    // console.log(lives);
  }
  if (
    character.x < villian3.ex + villian3.width &&
    character.x + w > villian3.ex &&
    character.y < villian3.ey + villian3.height &&
    h + character.y > villian3.ey
  ) {
    lives--;
    villian3.ex = 1150;
    // console.log(lives);
  }
  if (
    character.x < villian4.ex + villian4.width &&
    character.x + w > villian4.ex &&
    character.y < villian4.ey + villian4.height &&
    h + character.y > villian4.ey
  ) {
    lives--;
    villian4.ex = 1150;
    // console.log(lives);
  }
  if (
    character.x < villian5.ex + villian5.width &&
    character.x + w > villian5.ex &&
    character.y < villian5.ey + villian5.height &&
    h + character.y > villian5.ey
  ) {
    lives--;
    villian5.ex = 1150;
    // console.log(lives);
  }
  // console.log(lives);
  {
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Lives: " + lives, 100, 50);
  }
  if (lives == 0) {
    clearInterval(scoreTimer);
    clearInterval(timer);
    audio.pause();
    audio.currentTime = 0;
    audio1.play();
    cont.clearRect(0, 0, 1345, 640);
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Game Over", 600, 300);
    cont.fillText("Score: " + score, 600, 350);
    return;

    // console.log(score);
  }
  {
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Score: " + score, 600, 50);
  }
  if (score == 10) {
    console.log(level);
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Level 2", 600, 100);
  }
  if (score == 20) {
    level = 3;
    console.log(level);
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Level 3", 600, 100);
  }
  if (score == 30) {
    level = 4;
    console.log(level);
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Level 4", 600, 100);
  }
  if (score == 40) {
    level = 5;
    console.log(level);
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Level 5", 600, 100);
  }
  if (score == 50) {
    level = 6;
    console.log(level);
    cont.font = "30px yellowtail";
    cont.fillStyle = "red";
    cont.fillText("Level 6", 600, 100);
  }
}
let scoreTimer = setInterval(() => {
  score++;
}, 1000);
//make game pause when spacebar is pressed and unpause when spacebar is pressed again

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 32) {
    if (timer) {
      clearInterval(timer);
      clearInterval(scoreTimer);

      timer = null;
      scoreTimer = null;

      audio.pause();

      audio.currentTime = 0;
      audio1.play();
      context.clearRect(0, 0, 1345, 640);
      context.font = "30px yellowtail";
      context.fillStyle = "red";
      context.fillText("Game Paused", 600, 300);
      context.fillText("Score: " + score, 600, 350);

      // cont.clearRect(0, 0, 1345, 640);
      // cont.font = "30px yellowtail";
      // cont.fillStyle = "red";
      // cont.fillText("Game Paused", 600, 300);
      // cont.fillText("Score: " + score, 600, 350);
    } else {
      timer = setInterval(() => {
        cont.clearRect(0, 0, 1345, 640);
        villian1.ex -= 10;
        villian2.ex -= 20;
        villian3.ex -= 15;
        villian4.ex -= 15;
        villian5.ex -= 25;
        // console.log(rectssss.ex);
        // log(villian5.ex);
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
      scoreTimer = setInterval(() => {
        score++;
      }, 1000);
    }
  }
});
