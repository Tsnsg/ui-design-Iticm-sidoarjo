import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Courses from "./Components/Course"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export {Courses}


