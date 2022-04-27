import RecipeView from "./view.js";
import * as module from "./module.js";
export const controlRecipes = async function () {
  try {
    const query = await RecipeView.getDataSearch();
    if (!query) return;
    await module.resolveData(query);
    RecipeView.render(module.state.recipe);
  } catch (err) {
    console.log(err);
  }
};
const init = function () {
  RecipeView.addHandler(controlRecipes);
};
init();
