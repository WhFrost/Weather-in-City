const ActionType = {
  SET_CITY: 'data/setCity',
  SET_STATUS_CITY_SELECTED: 'data/setStatusCitySelected',
  GET_CITY_WEATHER: 'data/getCityWeather',
  START_LOAD_WEATHER: 'data/startLoadWeather',
  SET_WEATHER_STATUS_LOADED: 'data/setStatusWeatherLoaded'
};

const ActionCreator = {
  setCity: (id) => ({
    type: ActionType.SET_CITY,
    payload: id,
  }),
  setStatusCitySelected: (status) => ({
    type: ActionType.SET_STATUS_CITY_SELECTED,
    payload: status,
  }),
  getCityWeather: (weather) => ({
    type: ActionType.GET_CITY_WEATHER,
    payload: weather,
  }),
  startLoadWeather: () => ({
    type: ActionType.START_LOAD_WEATHER,
  }),
  setWeatherStatusLoaded: (status) => ({
    type: ActionType.SET_WEATHER_STATUS_LOADED,
    payload: status,
  }),
};

export {
  ActionType,
  ActionCreator
};
