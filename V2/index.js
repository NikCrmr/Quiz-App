//fetsch die Daten
const quizTrivia = "https://opentdb.com/api.php?amount=100&type=boolean";
const catFacts = "https://cat-fact.herokuapp.com/facts";

async function fetchQuizContent() {
  const response = await fetch(quizTrivia);
  const data = await response.json();

  console.log(data.results[0].question);
  console.log(data.results[0].correct_answer);

  //Cards
  const main = document.querySelector("main");
  const card = document.createElement("div");
  card.classList.add("quizcard");
  main.append(card);

  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark-icon");
  bookmark.src = "../img/bookmrk.png";
  //bookmark.setAttribute("src", "../img/bookmrk.png");
  card.append(bookmark);

  const brAbove = document.createElement("br");
  card.append(brAbove);

  const question = document.createElement("h3");
  question.classList.add("question");
  question.classList.add("question-size");
  question.innerHTML = data.results[0].question;
  //question.style.margin = "4rem 0 0 3.2rem";
  card.append(question);

  const button = document.createElement("button");
  button.classList.add("answer-button");
  button.textContent = "True or False?";
  button.id = "answerButton";
  card.append(button);

  console.log(bookmark.src);

  const br = document.createElement("br");
  card.append(br);

  const br2 = document.createElement("br");
  card.append(br2);

  const answer = document.createElement("p");
  answer.textContent = data.results[0].correct_answer;
  answer.classList.add("showanswer");
  answer.classList.add("hideanswer");

  card.append(answer);

  const answerButton = document.getElementById("answerButton");
  answerButton.addEventListener("click", (event) => {
    answer.style.display = answer.style.display === "none" ? "block" : "none";

    //Change Bookmark
    // if (bookmark.src.match("../img/bookmrk.png")) {
    //   bookmark.src = "../img/bookunmrk.png";
    // } else if (bookmark.src.match("../img/bookunmrk.png")) {
    //   bookmark.src = "../img/bookmrk.png";
    // }
  });
}

fetchQuizContent();
//const quizData = await fetchQuizContent();

// fetchQuizContent();

// function Cards() {
//   const main = document.querySelector("main");
//   const card = document.createElement("div");
//   card.classList.add("quizcard");
//   main.append(card);

//   const bookmark = document.createElement("img");
//   bookmark.classList.add("bookmark-icon");
//   bookmark.src = "../img/bookmrk.png";
//   //bookmark.setAttribute("src", "../img/bookmrk.png");
//   card.append(bookmark);

//   const brAbove = document.createElement("br");
//   card.append(brAbove);

//   const question = document.createElement("h3");
//   question.classList.add("question");
//   question.textContent = "Are this Questions?";
//   question.style.margin = "4rem 0 0 3.2rem";
//   card.append(question);

//   const button = document.createElement("button");
//   button.classList.add("answer-button");
//   button.textContent = "show Answer";
//   button.id = "answerButton";
//   card.append(button);

//   console.log(bookmark.src);

//   const br = document.createElement("br");
//   card.append(br);

//   const br2 = document.createElement("br");
//   card.append(br2);

//   const answer = document.createElement("p");
//   answer.textContent = "your answer will be here...";
//   answer.classList.add("showanswer");
//   card.append("answer");

//   const answerButton = document.getElementById("answerButton");
//   answerButton.addEventListener("click", (event) => {
//     if (bookmark.src.match("../img/bookmrk.png")) {
//       bookmark.src = "../img/bookunmrk.png";
//     } else if (bookmark.src.match("../img/bookunmrk.png")) {
//       bookmark.src = "../img/bookmrk.png";
//     }
//   });
// }

// Cards();
// Cards();
// Cards();
// Cards();
// Cards();
// Cards();
// Cards();

//header footer opacity 0

const header = document.querySelector("header");
header.style.backgroundColor = "rgba(76, 175, 80, 0)";

const footer = document.querySelector("footer");
footer.style.backgroundColor = "rgba(76, 175, 80, 0)";
