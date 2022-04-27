import { API_SEARCH_URL, API_KEY_URL, API_RANDOM_URL } from "./config.js";
import { controllerSearch, handlerOpenVideo } from "./controller.js";
import RecipeView from "./view.js";
export const handlerDataSearch = async function (query) {
  try {
    const data = await fetch(`${API_SEARCH_URL}${query}`);
    const res = await data.json();
    const [...recipe] = res.results;
    if (res.total_pages === 0) return;
    RecipeView.parentEl.innerHTML = "";
    RecipeView.loadingVideo();
    recipe.map((res) => RecipeView.render(res));
  } catch (err) {
    throw err;
  }
};
export const getDataVideo = async function (id, backgroundVideo) {
  try {
    const data = await fetch(
      `${API_KEY_URL}${id}/videos?api_key=dbb9058cdfaee074a92c77d022b686d8&language=en-US`
    );
    const res = await data.json();
    const recipe = res.results[0].key;
    RecipeView.loadingVideo();
    RecipeView.handlerAddVideo(recipe, backgroundVideo);
  } catch (err) {
    throw err;
  }
};
export const handlerDataRandom = async function (page = 1) {
  try {
    const data = await fetch(`${API_RANDOM_URL}${page}`);
    const res = await data.json();
    const [...recipe] = res.results;
    if (res.total_pages === 0) return;
    recipe.map((res) => RecipeView.render(res));
  } catch (err) {
    throw err;
  }
};
controllerSearch();
handlerDataRandom(Math.floor(Math.random() * 500) + 1);
handlerOpenVideo();
