import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

const container = document.getElementById('root');

const Root = createRoot(container);

Root.render(
  <BrowserRouter>
      <React.StrictMode>
        <App />
   </React.StrictMode> 
  </BrowserRouter>
);