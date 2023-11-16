//Show the Answer Function!!

function show() {
  document.getElementById("showanswer").innerHTML = "Swahili";
}

function show2() {
  document.getElementById("showanswer2").innerHTML = "No worries*";
}

function show3() {
  document.getElementById("showanswer3").innerHTML = "Octagon";
}

function show4() {
  document.getElementById("showanswer4").innerHTML = "12";
}

//Change the ColorMode to Dark Theme

function colorMode() {
  const colorSwitch = document.body;

  colorSwitch.classList.toggle("alt-color");

  /*document.body.style.backgroundColor = "orange";*/
}
//Switch the Bookmark between checked and unchecked

function changeBmrk() {
  var image = document.getElementById("check_bkmrk");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookunmrk");
  } else {
    image.src = "img/bookunmrk.png";
    console.log("else-bookunmrk");
  }
}

//Bookmark Counter ***************
const bookmarkButton = document.getElementById("check_bkmrk");
const bookmarkCount = document.getElementById("bookmark-count");
let count = 0;

bookmarkButton.addEventListener("click", () => {
  count++;
  bookmarkCount.innerText = count;
});

// <button id="likeButton">Like</button>
// <span id="likeCount">0</span>
