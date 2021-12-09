import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ActivitysProvider } from './Contexts/ActivitysContext.js';

ReactDOM.render(
  <React.StrictMode>
    <ActivitysProvider>
      <App />
    </ActivitysProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
