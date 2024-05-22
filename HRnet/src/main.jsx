import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Employee from './Employee.jsx';
import Error from './Error.jsx';
import "./main.scss";
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Récupération de l'id root dans le fichier html et génération 
// du render principal avec les différentes routes.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/*' element={<Error />}> </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
