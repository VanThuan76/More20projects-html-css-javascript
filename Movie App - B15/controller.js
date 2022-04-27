import * as model from "./model.js";
import RecipeView from "./view.js";
export const controllerSearch = async function () {
  RecipeView.parentElInput.addEventListener("change", function () {
    const data = RecipeView.parentElInput.querySelector("input").value;
    model.handlerDataSearch(data);
    // localStorage.setItem("query", JSON.stringify(data));
  });
  // localSearch();
};
export const handlerOpenVideo = async function () {
  RecipeView.movie.forEach((mv) => {
    mv.addEventListener("click", function () {
      mv.querySelector(".play-video").classList.add("open-ic--play-vd ");
      mv.addEventListener("dblclick", function () {
        RecipeView.removeAllActiveVideo();
        RecipeView.loadingVideo();
        RecipeView.handlerAddVideo(mv.dataset.id);
      });
    });
  });
};
// export const localSearch = function () {
//   const prevData = localStorage.getItem("query");
//   if (!prevData) return;
//   model.handlerDataSearch(JSON.parse(prevData));
// };
