import React, { Fragment } from 'react';
import Header from './components/Header';
import UrlShorter from './components/UrlShorter';
import Features from './components/Features';
import BoostCTA from './components/BoostCTA';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <UrlShorter />
      <Features />
      <BoostCTA />
      <Footer />
    </Fragment>
  );
}

export default App;
