class Quiz {
  constructor(questions) {
    this.questions = questions;
    this._position = 0;
  }

  getFirstQuestion() {
    return this.questions[0];
  }

  getNextQuestion() {
    if (this._position !== this.questions.length - 1) {
      this._position += 1;
    }
    return this.questions[this._position];
  }

  getPreviousQuestion() {
    if (this._position > 0) this._position -= 1;
    return this.questions[this._position];
  }
}

export default Quiz;
