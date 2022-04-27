class RecipeView {
  slideShow = document.querySelectorAll(".slideShow");
  dotShow = document.querySelectorAll(".dot");
  _textShow = document.querySelectorAll(".text-cmt--img");
  _imgShow = document.querySelectorAll(".imgShow");
  activeRecipeAll() {
    //Slide
    this.slideShow.forEach((sl) => {
      sl.classList.remove("slide-open");
      sl.classList.add("slide-close");
    });
    //Text
    this._textShow.forEach((tx) => {
      tx.classList.remove("text-show");
      tx.classList.add("text-hidden");
    });
    //Img
    this._imgShow.forEach((img) => {
      img.classList.remove("image-show");
      img.classList.add("image-hidden");
    });
    //Dot
    this.dotShow.forEach((dot) => {
      dot.classList.remove("dot-show");
      dot.classList.add("dot-hidden");
    });
  }
  narrowSlideShow(pos) {
    this.activeRecipeAll();
    this.dotShow[pos].classList.add("dot-show");
    this.slideShow[pos].classList.add("slide-open");
    this.slideShow[pos].querySelector(".imgShow").classList.add("image-show");
    this.slideShow[pos].querySelector("p").classList.add("text-show");
  }
}
export default new RecipeView();
