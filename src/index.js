import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
      <App />
    </Router> */}
   
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

