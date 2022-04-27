class RecipeView {
  _bodyMain = document.querySelector("body");
  _parentEl = document.querySelector(".search-geolocation");
  _parentBodyEl = document.querySelector(".contain-body");
  _data;
  getDataSearch() {
    const query = this._parentEl.querySelector(".search").value;
    this._clearDataSearch();
    return query;
  }
  _clearDataSearch() {
    this._parentEl.querySelector(".search").value = "";
  }
  addHandler(handler) {
    ["click", "change"].forEach((el) =>
      this._parentEl.addEventListener(el, handler)
    );
    this._parentBodyEl.innerHTML = "";
  }
  render(data) {
    if (!data) return;
    this._data = data;
    const condition = this._conditionsWeather();
    const markup = this._renderWeather();
    this._parentBodyEl.innerHTML = markup;
    this._bodyMain.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
    url(${condition}) no-repeat top/cover`;
    this._bodyMain.querySelector(
      "main"
    ).style.background = `url(${condition}) no-repeat top/cover`;
  }
  _conditionsWeather() {
    if (this._data.weather === "Clear" && this._data.celius > 15) {
      return "./img/sun.gif";
    } else if (this._data.weather === "Rain") {
      return "./img/cloud.gif";
    } else if (this._data.weather === "Clouds" && this._data.celius > 15) {
      return "./img/sun.gif";
    } else {
      return "./img/cold.gif";
    }
  }
  _renderWeather() {
    return `
    <div class="head-weather">
    <h1><city>${this._data.name}</city>, <country>${this._data.country}</country></h1>
    <p><time>${this._data.time}</time>, <day>${this._data.day}</day></p>
  </div>
  <div class="body-weather">
    <div class="celius"><label>${this._data.celius}°C</label></div>
    <h1>${this._data.weather}</h1>
  </div>
  <div class="footer-weather">
    <div class="recipe-f_weather">
      <ion-icon name="eye-outline"></ion-icon>
      <p>${this._data.visibility}(m)</p>
    </div>
    <div class="recipe-f_weather">
      <ion-icon name="cloud-outline"></ion-icon>
      <p>${this._data.wind}(m/s)</p>
    </div>
    <div class="recipe-f_weather">
      <ion-icon name="cloudy-night-outline"></ion-icon>
      <p>${this._data.clouds}%</p>
    </div>
  </div>
  `;
  }
}
export default new RecipeView();
