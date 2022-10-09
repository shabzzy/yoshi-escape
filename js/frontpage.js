let play = document.getElementById("play");
let about = document.getElementById("about");
let store = document.getElementById("store");
let otherGames = document.getElementById("other");
play.addEventListener("click", function () {
  //   let p =new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //      return resolve("done")
  //     },2000);
  //   });
  //  p.then((data)=>{
  //   console.log(data);
  window.location.href = "index.html";
  //  }).catch((err)=>{
  //    console.log(err);

  //  })
});
store.addEventListener("click", function () {
  window.location.href =
    "https://www.microsoft.com/en-in/store/top-free/apps/pc";
});
otherGames.addEventListener("click", function () {
  window.location.href = "https://www.microsoft.com/en-in/store/games";
});
