import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';
import './assets/main.scss';

import HeaderOne from './common/header/HeaderOne';
import About from './component/about/About.js';

const Blended = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <Router>
      <HeaderOne/>
      <About/>
    </Router>
  );
}

export default Blended;