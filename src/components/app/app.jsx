import React from 'react';
import Weather from '../weather/weather';
import Header from '../header/header';
import Footer from '../footer/footer';
import {cities, navItems} from '../../mock/mock';

function App () {
  return (
    <>
      <Header navItems={navItems}/>
      <main>
        <Weather cities={cities}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
