import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';
import './assets/main.scss';
import './styles/globals.css';

import HeaderOne from './common/header/HeaderOne';
import About from './component/about/About.js';
import PricingFive from './component/pricing/PricingFive';
import Blogs from './component/blog/Blogs';

const Separater = ({ title }) => <div
  style={{ background: 'crimson', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{title}</div>;

const Blended = () => {
  return (
    <>
      <Separater title="Abstrak <HeaderOne>" />
      <HeaderOne />
      <Separater title="OLMO <Blogs>" />
      <Blogs />
      <Separater title="Deski <About>" />
      <About />
      <Separater title="Doob <PricingFive>" />
      <div className="rwt-pricing-area rn-section-gap">
        <div className="container">
          <PricingFive />
        </div>
      </div>
    </>
  );
}

export default Blended;