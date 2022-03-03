import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import dayjs from 'dayjs';
import {
  getCurrentCity,
  getCurrentCityWeather,
} from '../../store/data/selectors';
import CityProp from '../prop-validation/city.prop';
import WeatherProp from '../prop-validation/weather.prop';
import {
  TIME_OF_MEASUREMENT,
  PRESSURE_RATIO,
  MIN_PRESSURE,
  MAX_PRESSURE,
} from '../../const';

function Charts (props) {
  const {currentCity, weather} = props;

  require('dayjs/locale/ru');
  dayjs.locale('ru');
  const sortingDates = weather.filter((item) => item.dt_txt.includes(TIME_OF_MEASUREMENT));
  const dates = sortingDates.map((item) => dayjs(item.dt_txt).format('dddd, HH:mm'));

  const temps = weather.map((item) => item.main.temp);
  const humidity = weather.map((item) => item.main.humidity);
  const pressure = weather.map((item) => Math.round(item.main.pressure * PRESSURE_RATIO * 100));

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `График погоды в городе ${currentCity.altName}`,
        font: {
          family: 'Roboto',
          size: 21,
        },
      },
      legend: {
        labels: {
          font: {
            family: 'Roboto',
            size: 16,
          }
        },
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Температура',
          font: {
            family: 'Roboto',
            size: 16,
          }
        },
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        title: {
          display: true,
          text: 'Влажность',
          font: {
            family: 'Roboto',
            size: 16,
          }
        },
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
      y2: {
        title: {
          display: true,
          text: 'Давление',
          font: {
            family: 'Roboto',
            size: 16,
          }
        },
        type: 'linear',
        display: true,
        position: 'right',
        min: MIN_PRESSURE,
        max: MAX_PRESSURE,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = dates;

  const data = {
    labels,
    datasets: [
      {
        label: 'Температура',
        data: temps,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Влажность',
        data: humidity,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Давление',
        data: pressure,
        borderColor: 'rgb(0, 204, 0)',
        backgroundColor: 'rgba(0, 204, 0, 0.5)',
        yAxisID: 'y2',
      },
    ],
  };

  return (
    <section>
      <Line options={options} data={data} />
    </section>
  );
}

Charts.propTypes = {
  currentCity: CityProp,
  weather: PropTypes.arrayOf(WeatherProp),
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  weather: getCurrentCityWeather(state),
});

export default connect(mapStateToProps, null)(Charts);
