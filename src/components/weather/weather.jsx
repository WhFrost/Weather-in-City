import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './weather.module.scss';
import CityProp from '../prop-validation/city.prop';
import {ActionCreator} from '../../store/action';
import {fetchWeather} from '../../store/api-actions';
import {
  getCurrentCity,
  getStatusCitySelected,
  getCurrentCityWeather,
  getWeatherStatusLoaded
} from '../../store/data/selectors';
import Charts from '../charts/charts';

function Weather (props) {
  const {
    cities,
    currentCity,
    isCitySelected,
    isWeatherLoaded,
    onSetCity
  } = props;

  const onCityChange = (evt) => {
    evt.preventDefault();
    onSetCity(evt);
  };

  return (
    <section className={styles['weather']}>
      <div className={`${globalStyles['container']} ${styles['weather__wrapper']}`}>
        <h1 className={`${globalStyles['title']} ${styles['weather__title']}`}>
          Погода в твоем городе
        </h1>
        <div className={styles['weather__field-wrapper']}>
          <label htmlFor="available-city" className={styles['weather__field-label']}>
            Выберите город
          </label>
          <select
            name="cities"
            id="available-city"
            className={styles['weather__field']}
            value={!currentCity ? 'default' : currentCity.name}
            onChange={onCityChange}
          >
            <option value={'default'} disabled>Город</option>
            {
              cities.map(({name, altName}) => (
                <option value={name} key={nanoid()}>
                  {altName}
                </option>
              ))
            }
          </select>
        </div>
        {
          isCitySelected && isWeatherLoaded ? <Charts />  : null
        }
      </div>
    </section>
  );
}

Weather.propTypes = {
  cities: PropTypes.arrayOf(CityProp),
  currentCity: CityProp,
  isCitySelected: PropTypes.bool,
  isWeatherLoaded: PropTypes.bool,
  onSetCity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  isCitySelected: getStatusCitySelected(state),
  isWeatherLoaded: getWeatherStatusLoaded(state),
  currentCityWeather: getCurrentCityWeather(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSetCity(evt) {
    dispatch(ActionCreator.setCity(evt.target.value));
    dispatch(ActionCreator.setStatusCitySelected(true));
    dispatch(fetchWeather(evt.target.value));
    dispatch(ActionCreator.setWeatherStatusLoaded(true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
