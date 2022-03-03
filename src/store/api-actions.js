import {ActionCreator} from './action';
import {
  API_KEY,
  LANGUAGE,
  UNITS_OF_MEASUREMENT,
} from '../const';

const fetchWeather = (city) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.startLoadWeather());
  return api
    .get(`forecast?q=${city}&lang=${LANGUAGE}&units=${UNITS_OF_MEASUREMENT}&appid=${API_KEY}`)
    .then(({data}) => dispatch(ActionCreator.getCityWeather(data.list)));
};
export {
  fetchWeather
};
