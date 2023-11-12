// Counter ****

// let counter = 0;

// const counterValue = document.getElementById('counter-value');
// counter++;
// counterValue.innerHTML = counter;

// let counter = 0;
// counter++;
// console.log(counter);

let currentCounter = 2;

function changeBmrk() {
  var image = document.getElementById("check_bkmrk");
  if (image.src.match("img/bookunmrk.png")) {
    image.src = "img/bookmrk.png";
    console.log("first-if-bookunmrk");
    currentCounter++;
    console.log(currentCounter);
    return currentCounter;
  } else {
    image.src = "img/bookunmrk.png";
    console.log("else-bookunmrk");
  }
}
