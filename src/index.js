import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Desc from './components/desc';
import Price from './components/price';
import Image from './components/image';
import Logo from './components/logo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Logo/>
    <Desc/>
    <Price/>
    <Image/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
