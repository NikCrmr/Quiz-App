function Cards() {
  const main = document.querySelector("main");
  const card = document.createElement("div");
  card.classList.add("quizcard");
  main.append(card);

  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark-icon");
  bookmark.setAttribute("src", "../img/bookmrk.png");
  card.append(bookmark);

  const brAbove = document.createElement("br");
  card.append(brAbove);

  const question = document.createElement("h3");
  question.classList.add("question");
  question.textContent = "Are this Questions?";
  question.style.margin = "4rem 0 0 3.2rem";
  card.append(question);

  const button = document.createElement("button");
  button.classList.add("answer-button");
  button.textContent = "show Answer";
  card.append(button);

  const br = document.createElement("br");
  card.append(br);

  const br2 = document.createElement("br");
  card.append(br2);

  const answer = document.createElement("p");
  answer.textContent = "your answer will be here...";
  answer.classList.add("showanswer");
  card.append("answer");
}

Cards();
Cards();
Cards();
Cards();
Cards();
Cards();
Cards();

//header footer opacity 0

const header = document.querySelector("header");
header.style.backgroundColor = "rgba(76, 175, 80, 0)";

const footer = document.querySelector("footer");
footer.style.backgroundColor = "rgba(76, 175, 80, 0)";
