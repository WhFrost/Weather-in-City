import React from 'react';
import Weather from '../weather/weather';
import {cities} from '../../mock/cities';

function App () {
  return (
    <>
      <h1>
        Погода в твоем городе
      </h1>
      <Weather cities={cities}/>
    </>
  );
}

export default App;
