import "./public/style.scss";
import Quiz from "./scripts/quiz/Quiz";
import Question from "./scripts/quiz/Question";
import Image from "./scripts/quiz/Image";

import { questionStrings, paths } from "./scripts/utils/dummyData";

const app = document.querySelector("#app");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Create Test Questions
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const questions = questionStrings.map((str, count) => {
  // 1. generate random number between 0 and 4
  // 2. initialize empty array
  const randNum = Math.floor(4 * Math.random());
  const images = [];

  // 3. create four new images
  for (let i = 0; i < 4; i++) {
    images.push(new Image(paths[i + count * 4]));
  }

  // 4. set one random image true
  // 5. create new Question with the four images
  images[randNum].isCorrectAnswere = true;
  return new Question(str, images);
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Create Test Questions
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const quiz = new Quiz(questions);

const nextQuestion = () => {
  const question = quiz.getNextQuestion();
  app.textContent = question.questionText;
};

const prevQuestion = () => {
  const question = quiz.getPreviousQuestion();
  app.textContent = question.questionText;
};

const firstQuestion = () => {
  const question = quiz.getFirstQuestion();
  app.textContent = question.questionText;
};

btnPrev.addEventListener("click", prevQuestion);
btnNext.addEventListener("click", nextQuestion);

firstQuestion();
