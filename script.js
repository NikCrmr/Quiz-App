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
const likeButton = document.getElementById("check_bkmrk");
const likeCount = document.getElementById("bookmark-count");
let count = 0;

likeButton.addEventListener("click", () => {
  count++;
  likeCount.innerText = count;
});
