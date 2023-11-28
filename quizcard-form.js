//Quiz-Card Form to Create New Cards

// Variables
const quizForm = document.querySelector('[data-js="question-form"]');
const quizFormButton = document.querySelector(
  '[data-js="create-questions-button"]'
);

//foldable Cards
const foldCards = document.querySelector('[data-js="foldable-cards"]');
const foldCardsButton = document.querySelector('[data-js="fold-cards-button"]');

foldCardsButton.addEventListener("click", () => {
  if (foldCards.style.display === "none") {
    foldCards.style.display = "block";
  } else {
    foldCards.style.display = "none";
  }
});

//**********************************
//Function For Creating A QuizCard!!

function newQuizcard(data) {
  //!!building the Quizcard!!

  const main = document.querySelector('[data-js="main"]');

  // Sticking The Building Blocks Together!!! Let's Play!!!
  const quizCardContainer = document.createElement("article");
  quizCardContainer.classList.add("quizcard");
  quizCardContainer.setAttribute("aria-labelledby", "Quizcard");
  main.append(quizCardContainer);

  //quizcard Bookmark
  const quizCardBookmark = document.createElement("img");
  quizCardBookmark.classList.add("bookmark-icon");
  quizCardContainer.append(quizCardBookmark);
  quizCardContainer.style.marginBottom = "6rem";
  quizCardBookmark.src = "img/bookmrk.png";
  quizCardBookmark.alt = "checked bookmark";
  quizCardBookmark.id = "check--bookmark";
  quizCardBookmark.setAttribute("onclick", "changeBookmark()");

  //quizcard Question
  const quizCardQuestion = document.createElement("h2");
  // console.log("Quizcard Question: ", data.question);
  quizCardQuestion.textContent = data.question;
  quizCardContainer.append(quizCardQuestion);

  //quizcard Button
  const quizCardButton = document.createElement("button");
  quizCardContainer.append(quizCardButton);
  quizCardButton.setAttribute("onclick", "show()");
  quizCardButton.classList.add("answer-button");
  quizCardButton.setAttribute("data-js", "answer-button");
  quizCardButton.setAttribute("aria-label", "Show Answer");
  quizCardButton.textContent = "Show Answer";
  quizCardButton.id = "answer-button";

  //quizcard Answer
  const quizCardTags = document.createElement("span");
  const quizCardAnswer = document.createElement("p");
  quizCardAnswer.innerText = data.answer;
  quizCardContainer.append(quizCardAnswer);
  quizCardAnswer.classList.add("hideanswer");
  quizCardAnswer.classList.add("showanswer");
  //quizCardAnswer.id = "showanswer";
  quizCardAnswer.setAttribute("datajs", "answer-text");

  quizCardButton.addEventListener("click", function () {
    // Your logic for handling the click event
    // For example, you can toggle the visibility of the answerText
    // if (quizCardAnswer.style.display === "none") {
    //   quizCardAnswer.style.display === "block";
    // } else {
    //   quizCardAnswer.style.display === "none";
    // }

    quizCardAnswer.style.display =
      quizCardAnswer.style.display === "none" ? "block" : "none";
    quizCardButton.textContent =
      quizCardButton.textContent === "Show Answer"
        ? "Hide Answer"
        : "Show Answer";
  });

  //Quizcard div for tags
  const quizCardTagsDiv = document.createElement("div");
  quizCardContainer.append(quizCardTagsDiv);

  //quizcard category-tags span-elements
  const quizCardCategorySpans = document.createElement("span");
  quizCardCategorySpans.innerText = `#${data.tags}`;
  quizCardCategorySpans.classList.add("cetegory");
  quizCardContainer.append(quizCardCategorySpans);
}

//EventListener Form
//******************
quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  newQuizcard(data);
});

// const test = {
//   question: "test - question",
//   answer: 123,
//   tags: "tagtag",
// };

const answerButtonFunction = document.getElementById("answer-button");
answerButtonFunction.addEventListener("click", () => {
  quizCardButton.textContent = "Hide Answer";
});

//Form Left-Characters-Counter
//****************************

//Input
const questionTextField = document.querySelector('[data-js="question"]');
const answerTextField = document.querySelector('[data-js="answer"]');
const tagsTextField = document.querySelector('[data-js="tags"]');
//Output
const questionCharactersLeft = document.querySelector(
  '[data-js="question-characters"]'
);
const answerCharactersLeft = document.querySelector(
  '[data-js="answer-characters"]'
);
const tagsCharactersLeft = document.querySelector(
  '[data-js="tags-characters"]'
);

//**** */
const maxLengthQuestion = questionTextField.getAttribute("maxlength");
const maxLengthAnswer = answerTextField.getAttribute("maxlength");
const maxLengthTags = tagsTextField.getAttribute("maxlength");

//EventListerners
questionTextField.addEventListener("input", () => {
  console.log("question");
});

questionTextField.addEventListener("input", () => {
  console.log("answer");
});

questionTextField.addEventListener("input", () => {
  console.log("tags");
});
