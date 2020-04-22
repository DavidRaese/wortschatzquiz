import { v4 as uuidv4 } from "uuid";

class Question {
  constructor(questionText, images = []) {
    this.questionText = questionText;
    this.images = images;
    this.id = uuidv4();
    this.wasAnsweredCorrectly = false;
  }

  setWasAnswerdCorrectly(bool) {
    this.wasAnswerdCorrectly = bool;
  }
}

export default Question;
