let play = document.getElementById("play");
let about = document.getElementById("about");
let store = document.getElementById("store");
let otherGames = document.getElementById("other");

play.addEventListener("click", function () {
 
  window.location.href = "mainPage.html";
  
});
store.addEventListener("click", function () {
  window.location.href =
    "https://www.microsoft.com/en-in/store/top-free/apps/pc";
});
otherGames.addEventListener("click", function () {
  window.location.href = "https://www.microsoft.com/en-in/store/games";
});
