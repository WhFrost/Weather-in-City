import PropTypes from 'prop-types';

export default PropTypes.shape({
  dt: PropTypes.number,
  main: PropTypes.shape({
    temp: PropTypes.number,
    'feels_like': PropTypes.number,
    'temp_min': PropTypes.number,
    'temp_max': PropTypes.number,
    pressure: PropTypes.number,
    'sea_level': PropTypes.number,
    'grnd_level': PropTypes.number,
    humidity: PropTypes.number,
    'temp_kf': PropTypes.number
  }),
  weather: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    main: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string
  })),
  clouds: PropTypes.shape({
    all: PropTypes.number
  }),
  wind: PropTypes.shape({
    speed: PropTypes.number,
    deg: PropTypes.number,
    gust: PropTypes.number
  }),
  visibility: PropTypes.number,
  pop: PropTypes.number,
  sys: PropTypes.shape({
    pod: PropTypes.string
  }),
  'dt_txt': PropTypes.string
});
