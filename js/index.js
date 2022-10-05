let x = 10;
let y = 290;
let ex = 1240;
let ey = 280;
let audio = document.getElementById("sound");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let enemy = document.getElementById("canvas");
let cont = enemy.getContext("2d");
function autoNotify() {
  audio.play();
}
autoNotify();
// function start() {
//   //  context.fillRect(x,y,50,50)
//   let img = new Image();
//   img.src = "./images/improvedanime.png";
//   img.onload = () => context.drawImage(img, x, y, 100, 100);
//   window.onkeydown = function (e) {
//     // alert(e.keyCode)
//     if (e.keyCode == 39 && x !== 1300) {
//       x = x + 10;
//       console.log("done");
//     }
//     if (e.keyCode == 40) {
//       y = y + 10;
//     }
//     if (e.keyCode == 37 && x !== 0) {
//       x = x - 10;
//     }
//     if (e.keyCode == 38) {
//       y = y - 10;
//     }

//     context.clearRect(0, 0, 1345, 640);
//     // if (x==1340) {
//     //   x=0
//     // }
//     if (x == 1270) {
//       x = 0;
//     } else if (x == 0) {
//       x = 1270;
//     }
//     if (y == -50) {
//       y = 610;
//     } else if (y == 610) {
//       y = -50;
//     }

//     context.drawImage(img, x, y, 100, 100);
//     // enemys();
//   };
// }
// start();

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
class enemys {
  constructor(ex, ey, scale) {
    this.scale = scale;
    this.ex = ex;
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
    this.enemyimage5.onload = () => {
      this.update();
    };
  }

  update() {
    if (this.enemyimage1) {
      cont.drawImage(
        this.enemyimage1,
        this.ex,
        this.ey,
        this.enemyimage1.width / this.scale,
        this.enemyimage1.height / this.scale
      );
    }
    if (this.enemyimage2) {
      cont.drawImage(
        this.enemyimage2,
        this.ex,
        this.ey,
        this.enemyimage2.width / this.scale,
        this.enemyimage2.height / this.scale
      );
    }
    if (this.eneimage3) {
      cont.drawImage(
        this.enemyimage3,
        this.ex,
        this.ey,
        this.enemyimage3.width / this.scale,
        this.enemyimage3.height / this.scale
      );
    }
    if (this.enemyimage4) {
      cont.drawImage(
        this.enemyimage4,
        this.ex,
        this.ey,
        this.enemyimage4.width / this.scale,
        this.enemyimage4.height / this.scale
      );
    }
    if (this.enemyimage5) {
      cont.drawImage(
        this.enemyimage5,
        this.ex,
        this.ey,
        this.enemyimage5.width / this.scale,
        this.enemyimage5.height / this.scale
      );
    }
  }
}

const villian1 = new enemys(1150, 0, 3);
const villian2 = new enemys(1150, 100, 3);
const villian3 = new enemys(1150, 200, 3);
const villian4 = new enemys(1150, 300, 3);
const villian5 = new enemys(1150, 400, 3);
timer = setInterval(() => {
  cont.clearRect(0, 0, 1345, 600);
  villian1.ex -= 10;
  villian2.ex -= 20;
  villian3.ex -= 15;
  villian4.ex -= 15;
  villian5.ex -= 25;
  // console.log(rectssss.ex);

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
  if (villian5.ex == -50) {
    villian5.ex = 1150;
  }
  meet();
  villian1.update();
  villian2.update();
  villian3.update();
  villian4.update();
  villian5.update();
  character.pdate();
}, 500);
function meet() {
  // console.log(rect.ey);
  if (character.x == villian1.ex && character.y == villian1.ey) {
    alert("game over");
  }
  console.log(character.y);
  //   if (acimg.x==rects.ex){
  //     alert ('game over')
  // }
  //   if (acimg.x==rectss.ex){
  //     alert ('game over')
  // }
}
