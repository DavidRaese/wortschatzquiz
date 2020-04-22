class QuizView {
  constructor() {
    this._app = this._getElement("#app");
    this._app.innerHTML = `
      <div class="quiz__container">
        <h3 class="quiz__question" ></h3>
        <div class="quiz__images"></div>
      </div>
    `;

    this._question = this._getElement(".quiz__question");
    this._imageContainer = this._getElement(".quiz__image");
  }

  displayQuestion(question) {
    this._question.textContent = question.questionStr;
    this._imageContainer.innerHTML = "";

    question.images.forEach((img) => {
      // todo: creat function for this
      const imgEl = this._createElement("img");
      imgEl.setAttribute("src", img.pathToImage);
      this._imageContainer.appendChild(imgEl);
      // todo: add eventhandler
    });
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //                     Ineternal Methodes
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  _getElement(selector) {
    return document.querySelector(selector);
  }

  _createElement(tag) {
    return document.createElement(tag);
  }
}

export default QuizView;
