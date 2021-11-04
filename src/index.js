import React from 'react';
import ReactDOM from 'react-dom';
import EventsState from './Context/Events/EventsState';
import './index.css';
import App from './App';
ReactDOM.render(
  <EventsState>
    <App />
  </EventsState>,
  document.getElementById('root')
);
