import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Header from './components/Osnovnoe/Header';
import App from "./App";
import Footer from './components/Osnovnoe/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <App/>
    <Footer/>
  </BrowserRouter>
);
