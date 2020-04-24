class Image {
  constructor(pathToImage, isCorrectAnswere = false) {
    this.pathToImage = pathToImage;
    this.isCorrectAnswere = isCorrectAnswere;
    this.isSelected = false;
  }
}

export default Image;
