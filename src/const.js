const API_KEY = 'd401880e2bc182f8fead0da77312d198';
const LANGUAGE = 'ru';
const UNITS_OF_MEASUREMENT = 'metric';
const TIME_OF_MEASUREMENT = '12:00:00'; // Значение должно быть кратно 3-м, т.к. сервер отдает информацию за каждые 3 часа
const PRESSURE_RATIO = 0.00750063755419211;
const MIN_PRESSURE = 740;
const MAX_PRESSURE = 780;

export {
  API_KEY,
  LANGUAGE,
  UNITS_OF_MEASUREMENT,
  TIME_OF_MEASUREMENT,
  PRESSURE_RATIO,
  MIN_PRESSURE,
  MAX_PRESSURE,
};
