//Quiz-Card Form to Create New Cards

// Variables
const quizForm = document.querySelector('[data-js="question-form"]');
const quizFormButton = document.querySelector(
  '[data-js="create-questions-button"]'
);

function newQuizcard() {
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
  quizCardBookmark.setAttribute("src", "img/bookmrk.png");
  quizCardBookmark.setAttribute("alt", "checked bookmark");
  quizCardBookmark.setAttribute("id", "check--bookmark");
  quizCardBookmark.setAttribute("onclick", "changeBookmark()");

  //quizcard Question
  const quizCardQuestion = document.createElement("h2");
  quizCardQuestion.textContent = "Question?";
  quizCardContainer.append(quizCardQuestion);

  //quizcard Button
  const quizCardButton = document.createElement("button");
  quizCardContainer.append(quizCardButton);
  quizCardButton.setAttribute("onclick", "show()");
  quizCardButton.classList.add("answer-button");
  quizCardButton.setAttribute("data-js", "answer-button");
  quizCardButton.setAttribute("aria-label", "Show Answer");
  quizCardButton.textContent = "Show Answer";

  //quizcard Answer
  const quizCardTags = document.createElement("span");
  const quizCardAnswer = document.createElement("p");
  quizCardAnswer.textContent = "here you will see the answer...";
  quizCardContainer.append(quizCardAnswer);
  quizCardAnswer.classList.add("showanswer");
  quizCardAnswer.setAttribute("id", "showanswer"); //change to .id=...
  quizCardAnswer.setAttribute("datajs", "answer-text");

  //Quizcard div for tags
  const quizCardTagsDiv = document.createElement("div");
  quizCardContainer.append(quizCardTagsDiv);

  //quizcard category-tags span-elements
  const quizCardCategorySpans = document.createElement("span");
  quizCardCategorySpans.classList.add("cetegory");
  quizCardCategorySpans.textContent = "Category";
}

//EventListener Form
quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //console.log(data);

  const formQuestion = event.target.question;
  const formAnswer = event.target.answer;
  const formTags = event.target.tags;
  //console.log(formTags);
  newQuizcard();
});
