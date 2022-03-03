import {ActionType} from '../action';
import {cities} from '../../mock/mock';

const initialState = {
  currentCity: null,
  currentCityWeather: null,
  isCitySelected: false,
  isWeatherLoaded: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCity: cities.find((city) => action.payload === city.name)
      };
    case ActionType.SET_STATUS_CITY_SELECTED:
      return {
        ...state,
        isCitySelected: action.payload,
      };
    case ActionType.GET_CITY_WEATHER:
      return {
        ...state,
        currentCityWeather: action.payload,
        isWeatherLoaded: true,
      };
    default:
      return state;
  }
};

export {
  dataReducer
};
