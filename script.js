//Show the Answer Function!!

function show() {
  //test new if else code
  let answerButton = document.querySelector('[data-js="answer-button"]');
  let answerText = document.querySelector('[data-js="answer-text"]');
  console.log("variables created");
  if (answerButton.textContent.match("Show Answer")) {
    console.log("It is a match!");
    document.getElementById("showanswer").innerHTML = "Swahili";
    document.querySelector('[data-js="answer-button"]').textContent =
      "Hide Answer";
  } else if (answerButton.textContent.match("Hide Answer")) {
    document.getElementById("showanswer").innerHTML =
      "here you will see the answer...";
    document.querySelector('[data-js="answer-button"]').textContent =
      "Show Answer";
  }
  //test block ****
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
  let image = document.getElementById("check_bkmrk");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
    //return 1;
  } else {
    image.src = "img/bookunmrk.png";
    console.log("else-bookunmrk");
    //return -1;
  }
}

function changeBmrk2() {
  let image = document.getElementById("check_bkmrk2");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
  } else if (image.src.match("img/bookmrk.png")) {
    image.src = "img/bookunmrk.png";
    console.log("else-if-bookunmrk");
  }
}

function changeBmrk3() {
  let image = document.getElementById("check_bkmrk3");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
  } else if (image.src.match("img/bookmrk.png")) {
    image.src = "img/bookunmrk.png";
    console.log("else-if-bookunmrk");
  }
}

function changeBmrk4() {
  let image = document.getElementById("check_bkmrk4");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
  } else if (image.src.match("img/bookmrk.png")) {
    image.src = "img/bookunmrk.png";
    console.log("else-if-bookunmrk");
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
