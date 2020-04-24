class Quiz {
  constructor(questions) {
    this.questions = questions;
    this._position = 0;
  }

  getFirstQuestion() {
    return this.questions[0];
  }

  getNextQuestion() {
    // check if positom exceeds length of questions
    if (this._position !== this.questions.length - 1) {
      this._position += 1;
    }
    return this.questions[this._position];
  }

  getPreviousQuestion() {
    // check if position is not negative
    if (this._position > 0) this._position -= 1;
    return this.questions[this._position];
  }

  getQuestionById(id) {
    const question = this.questions.filter((question) => question.id === id);
    return question[0];
  }
}

export default Quiz;
