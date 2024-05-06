import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Employee from './Employee.jsx';
import "./main.scss";
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
