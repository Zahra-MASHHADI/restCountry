import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Mainpage from './component/mainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './component/detail';
import DarkModeContex from './contextProvider/darkModeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <DarkModeContex>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/name/:name' element={<Detail/>} />
      </Routes>
    </DarkModeContex>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
