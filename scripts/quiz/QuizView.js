class QuizView {
  constructor(imgHandle) {
    this.imgHandle = imgHandle;
    this._app = this._getElement("#app");
    this._app.innerHTML = `
      <div class="quiz__container">
        <h3 class="quiz__question" ></h3>
        <div class="quiz__images"></div>
        <button id="btnPrev">Pervious</button>
        <button id="btnNext">Next</button>
      </div>
    `;

    this._question = this._getElement(".quiz__question");
    this._imageContainer = this._getElement(".quiz__images");
    this.btnPrev = this._getElement("#btnPrev");
    this.btnNext = this._getElement("#btnNext");
  }

  displayQuestion(question) {
    this._question.textContent = question.questionText;
    this._imageContainer.innerHTML = "";
    const id = question.id;

    question.images.forEach((img, i) => {
      const imgEl = this._createImage({ img, i, id });
      this._imageContainer.appendChild(imgEl);
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

  _createImage(props) {
    // 1. destructure props
    const { i, img, id } = props;
    // 2. create new img Element
    const imgEl = this._createElement("img");
    // 3. set Attributes
    imgEl.setAttribute("src", img.pathToImage);
    imgEl.setAttribute("img_data", `${id} ${i}`);
    imgEl.setAttribute("isCorrect", img.isCorrectAnswere);
    // 4. add Eventlistener
    imgEl.addEventListener("click", this.imgHandle);

    // 5. add blue border if image was/is selected
    if (img.isSelected) imgEl.style.border = "5px solid steelblue";
    return imgEl;
  }
}

export default QuizView;
