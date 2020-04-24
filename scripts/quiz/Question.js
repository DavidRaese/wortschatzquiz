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

  setSelectedImageTrue(imgNr) {
    // 1. unset all images
    this.images.forEach((img) => (img.isSelected = false));
    // 2. set selected image
    this.images[imgNr].isSelected = true;
  }
}

export default Question;
