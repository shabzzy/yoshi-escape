let Username;
let start = document.getElementById("start");
let getName=localStorage.getItem('userName')
function store() {
    if (getName) {
        ar=JSON.parse(getName)
    } 
    // start()
}

start.addEventListener("click", function () {
  myName= document.getElementById("user").value;
  Username=[{name:myName}]
  let user_regex = /^[a-zA-Z]{6,}$/;
  if (user.value == "") {
    alert("Username required");
    return;
  }
  if (!user_regex.test(Username[0].name)) {
    alert("Input more than six characters");
    return;
  }
    setTimeout(() => {
      if (user_regex.test(Username[0].name)) {
        window.location.href = "mainPage.html";
        myName=''
      }
    }, 10000);

  //make modal show onclick of start button
  // let modal = document.getElementById("myModal");
  // modal.style.display = "block";
  // let span = document.getElementsByClassName("close")[0];
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
  user.value=''
    localStorage.setItem('userName', JSON.stringify(Username))
    
});

//bootstrap modal oncliick of start button using pure javascript
