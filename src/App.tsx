import React from 'react';
import Header from './shared/Header';

import './assets/scss/normalize.scss';
import style from './index.scss';
import Footer from './shared/Footer';
import Content from './shared/Content';
import Sidebar from './shared/Sidebar';

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Sidebar />
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default App;
