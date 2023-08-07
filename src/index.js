import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

 
);

AOS.init();