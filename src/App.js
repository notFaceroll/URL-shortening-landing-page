import React, { Fragment } from 'react';
import Header from './components/Header';
import UrlShorter from './components/UrlShorter';
import Features from './components/Features';

function App() {
  return (
    <Fragment>
      <Header />
      <UrlShorter />
      <Features />
    </Fragment>
  );
}

export default App;
