const getCurrentCity = (state) => state.data.currentCity;
const getStatusCitySelected = (state) => state.data.isCitySelected;
const getCurrentCityWeather = (state) => state.data.currentCityWeather;
const getWeatherStatusLoaded = (state) => state.data.isWeatherLoaded;

export {
  getCurrentCity,
  getStatusCitySelected,
  getCurrentCityWeather,
  getWeatherStatusLoaded
};
