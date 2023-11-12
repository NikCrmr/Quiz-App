function show() {
  document.getElementById("showanswer").innerHTML = "I am the answer!";
}

function colorMode() {
  const colorSwitch = document.body;

  colorSwitch.classList.toggle("alt-color");

  /*document.body.style.backgroundColor = "orange";*/
}

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

//COUNTER ***************
const bookmarkButton = document.getElementById("check_bkmrk");
const bookmarkCount = document.getElementById("bookmark-count");
let count = 0;

bookmarkButton.addEventListener("click", () => {
  count++;
  bookmarkCountCount.innerText = count;
});

// <button id="likeButton">Like</button>
// <span id="likeCount">0</span>
