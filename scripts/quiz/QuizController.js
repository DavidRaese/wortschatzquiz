import Quiz from "./Quiz";
import QuizView from "./QuizView";

class QuizController {
  constructor(model = {}, quiz) {
    this.view = new QuizView(this.imgHandel);
    this.model = model;
    this.quiz = quiz;
  }

  initQuiz() {
    this.view.btnPrev.addEventListener("click", this._getPreviousQuestion);
    this.view.btnNext.addEventListener("click", this._getNextQuestion);

    this.view.displayQuestion(this.quiz.getFirstQuestion());
  }

  imgHandel = (e) => {
    // controlles behavior of image on click
    // 1. get id and imgNr from imgEl
    const imgData = e.target.getAttribute("img_data");
    const [id, imgNr] = imgData.split(" ");
    // 2. find correct question with id
    const currentQuestion = this.quiz.getQuestionById(id);
    // 3. set correct img with imgNr to selected
    currentQuestion.setSelectedImageTrue(imgNr);
    // 4. check if selected img is correct solution
    const isCorrect = e.target.getAttribute("isCorrect") === "true";
    if (isCorrect) console.log("Richtige Lösung");
    // 4. display question
    this.view.displayQuestion(currentQuestion);
  };

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //                     Ineternal Methodes
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  _getNextQuestion = () => {
    const nextQuestion = this.quiz.getNextQuestion();
    this.view.displayQuestion(nextQuestion);
  };

  _getPreviousQuestion = () => {
    const prevQuestion = this.quiz.getPreviousQuestion();
    this.view.displayQuestion(prevQuestion);
  };

  _getFirstQuestion() {
    return this.quiz.getFirstQuestion();
  }

  _createQuiz(questions) {}
}

export default QuizController;
