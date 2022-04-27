import * as model from "./model.js";
import { handlerOpenVideo } from "./controller.js";
class RecipeView {
  parentElInput = document.querySelector(".search");
  parentEl = document.querySelector(".contain-movie");
  parentEl2 = document.querySelector(".video-movie");
  _childElOpenvd = document.querySelectorAll(".play-video");
  _childEl2 = document.querySelectorAll(".poster");
  _childEl3 = document.querySelectorAll(".play-video >ion-icon");
  movie = document.querySelectorAll(".movie");
  _data;
  render(data) {
    if (!data) return;
    this._data = data;
    this._handlerVoteMovie();
    this._removeInput();
    const markupMovie = this._handlerAddMovie();
    this.parentEl.innerHTML += markupMovie;
    this.movie = document.querySelectorAll(".movie-search");
    this.handlerOpenVideoSearch();
  }
  _removeInput() {
    this.parentElInput.querySelector("input").value = "";
  }
  removeAllActiveVideo() {
    //Remove Open-Video
    this._childElOpenvd.forEach((mv) => mv.classList.remove("open-video"));
    //Remove Play-Video
    this._childEl2.forEach((pos) => pos.classList.remove("play-video-active"));
    this._childEl3.forEach((icon) =>
      icon.classList.remove("play-video-active")
    );
  }

  _handlerAddMovie() {
    return `
    <div class="wrap-movie">
        <div data-id="${this._data.id}" class="movie movie-search">
          <div class="img-movie">
            <img class="poster poster-search"
              src="https://image.tmdb.org/t/p/w1280/${this._data.poster_path}"
              alt="${this._data.title}"
              data-background="${this._data.backdrop_path}"
            />
          </div>
          <div class="text-movie">
            <h3>${this._data.title}</h3>
            <p class=${this._handlerVoteMovie()}>${this._data.vote_average}</p>
          </div>
          <div class="play-video play-video-search">
            <ion-icon name="play"></ion-icon>
          </div>
          <div class="overview">
            <h1>Overview</h1>
            <p>${this._data.overview}</p>
          </div>
        </div>
      </div>
    `;
  }

  _handlerVoteMovie() {
    if (this._data.vote_average >= 8) return "vote-good";
    if (this._data.vote_average < 8 && this._data.vote_average > 0)
      return "vote-average";
    if (this._data.vote_average <= 5) return "vote-bad";
  }
  handlerOpenVideoSearch() {
    this.movie.forEach((mv) => {
      mv.addEventListener("click", function () {
        document
          .querySelectorAll(".play-video-search")
          .forEach((mv) => mv.classList.remove("open-ic--play-vd"));
        mv.querySelector(".play-video").classList.add("open-ic--play-vd");
        mv.addEventListener("dblclick", function () {
          //Remove Play-Video
          document
            .querySelectorAll(".poster-search")
            .forEach((pos) => pos.classList.remove("play-video-active"));
          document
            .querySelectorAll(".play-video-search >ion-icon")
            .forEach((icon) => icon.classList.remove("play-video-active"));
          /////////////////////
          /////////////////////
          const backgroundVideo =
            mv.querySelector(".poster").dataset.background;
          model.getDataVideo(mv.dataset.id, backgroundVideo);
        });
      });
    });
  }

  loadingVideo() {
    // document.querySelector("*").style.overflowY = "hidden";
    document.querySelector(".loading").classList.add("open-load");
    setTimeout(function () {
      document.querySelector(".loading").classList.remove("open-load");
    }, 1500);
  }
  handlerAddVideo(key, backgroundVideo) {
    if (!key) return;
    const markupVideo = `
    <div class="contain-section--video">
    <div class="home-back">
    <ion-icon name="home-outline"></ion-icon>
    <h1>Home</h1>
    </div>
    <div class="background-video--wait background-video">
    </div>
    <div class="contain-video">
    <iframe class="video"src="https://www.youtube.com/embed/${key}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=vi&modestbranding=1&fs=1&autohide=1" frameborder="0" allowfullscreen allow='autoplay'></iframe>
    </div>
    </div>
    
    `;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.querySelector("*").style.overflowY = "hidden";
    document.querySelector(".video-movie").classList.add("open-video");
    this.parentEl2.innerHTML = markupVideo;
    document.querySelector(
      ".background-video"
    ).style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280/${backgroundVideo}), url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/a629d452898633.59b49a66cfa00.png)`;
    document.querySelector(".home-back").addEventListener("click", function () {
      document.querySelector(".video-movie").classList.remove("open-video");
      document.querySelector(".video-movie").innerHTML = "";
      document.querySelector("*").style.overflowY = "scroll";
    });
  }
}
export default new RecipeView();
