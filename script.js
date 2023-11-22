let modeNoir = localStorage.getItem("Darkmode");
let modeColor = localStorage.getItem("Colormode");

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
  //   document.getElementById("showanswer2").innerHTML = "No worries*";
  let answerButton = document.querySelector('[data-js="answer-button2"]');
  let answerText = document.querySelector('[data-js="answer-text2"]');
  console.log("variables created");
  if (answerButton.textContent.match("Show Answer")) {
    console.log("It is a match!");
    document.getElementById("showanswer2").innerHTML = "No worries*";
    document.querySelector('[data-js="answer-button2"]').textContent =
      "Hide Answer";
  } else if (answerButton.textContent.match("Hide Answer")) {
    document.getElementById("showanswer2").innerHTML =
      "here you will see the answer...";
    document.querySelector('[data-js="answer-button2"]').textContent =
      "Show Answer";
  }
}

function show3() {
  // document.getElementById("showanswer3").innerHTML = "Octagon";
  let answerButton = document.querySelector('[data-js="answer-button3"]');
  let answerText = document.querySelector('[data-js="answer-text3"]');
  console.log("variables created");
  if (answerButton.textContent.match("Show Answer")) {
    console.log("It is a match!");
    document.getElementById("showanswer3").innerHTML = "Octagon";
    document.querySelector('[data-js="answer-button3"]').textContent =
      "Hide Answer";
  } else if (answerButton.textContent.match("Hide Answer")) {
    document.getElementById("showanswer3").innerHTML =
      "here you will see the answer...";
    document.querySelector('[data-js="answer-button3"]').textContent =
      "Show Answer";
  }
}

function show4() {
  // document.getElementById("showanswer4").innerHTML = "12";
  let answerButton = document.querySelector('[data-js="answer-button4"]');
  let answerText = document.querySelector('[data-js="answer-text4"]');
  console.log("variables created");
  if (answerButton.textContent.match("Show Answer")) {
    console.log("It is a match!");
    document.getElementById("showanswer4").innerHTML = "12";
    document.querySelector('[data-js="answer-button4"]').textContent =
      "Hide Answer";
  } else if (answerButton.textContent.match("Hide Answer")) {
    document.getElementById("showanswer4").innerHTML =
      "here you will see the answer...";
    document.querySelector('[data-js="answer-button4"]').textContent =
      "Show Answer";
  }
}

//Change the ColorMode to Dark Theme
//darkMode();
function darkMode() {
  const colorSwitch = document.body;
  colorSwitch.classList.toggle("alt-color");
  localStorage.clear;
  localStorage.setItem("Darkmode", "On");
}

if (modeNoir === "On") {
  console.log("mode noir if working");
  const colorSwitch = document.body;
  colorSwitch.classList.toggle("alt-color");
}

//colorful Contrast mode
function colorMode() {
  const colorMode = document.body;
  colorMode.classList.toggle("contrast-color");
  localStorage.clear;
  localStorage.setItem("Colormode", "On");
}

if (modeColor === "On") {
  const colorMode = document.body;
  colorMode.classList.toggle("contrast-color");
}
//Switch the Bookmark between checked and unchecked

function changeBookmark() {
  let bookmarkCount = 0;
  let image = document.getElementById("check--bookmark");
  const bookmarkCounterTest = document.querySelector("[data-js=p-tag-counter]");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
    bookmarkCount++;
    bookmarkCounterTest.innerText = bookmarkCount;
    //return 1;
  } else {
    image.src = "img/bookunmrk.png";
    console.log("else-bookunmrk");
    bookmarkCount = bookmarkCount--;
    bookmarkCounterTest.innerText = bookmarkCount;
    //return -1;
  }
}

function changeBookmark2() {
  let image = document.getElementById("check--bookmark2");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
  } else if (image.src.match("img/bookmrk.png")) {
    image.src = "img/bookunmrk.png";
    console.log("else-if-bookunmrk");
  }
}

function changeBookmark3() {
  let image = document.getElementById("check--bookmark3");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
  } else if (image.src.match("img/bookmrk.png")) {
    image.src = "img/bookunmrk.png";
    console.log("else-if-bookunmrk");
  }
}

function changeBookmark4() {
  let image = document.getElementById("check--bookmark4");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookmrk");
  } else if (image.src.match("img/bookmrk.png")) {
    image.src = "img/bookunmrk.png";
    console.log("else-if-bookunmrk");
  }
}

//Bookmark Counter ***************
const bookmarkButton = document.getElementById("check--bookmark");
const bookmarkCount = document.getElementById("bookmark-count");
let count = 0;

bookmarkButton.addEventListener("click", () => {
  count++;
  bookmarkCount.innerText = count;
});

// <button id="likeButton">Like</button>
// <span id="likeCount">0</span>

/* klicke auf den bookmark > checked = +1 ; unchecked = -1.
function bookmarksCounting(){
  const bookmarkCounterTest= document.querySelector('[data-js=p-tag-counter]')
  if(value==1){
count++;
bookmarkCounterTest.innerText = count;
  } else if(value==-1){
    count--;
    bookmarkCounterTest.innerText = count;
  }

  ***2Funktionen Checked und Unchecked****

  function bookmarkChecked(){
  const bookmarkCounterTest= document.querySelector('[data-js=p-tag-counter]')
count++;
bookmarkCounterTest.innerText = count;


function bookmarkUnchecked(){
  const bookmarkCounterTest= document.querySelector('[data-js=p-tag-counter]'
    count--;
    bookmarkCounterTest.innerText = count;
  }
*/
