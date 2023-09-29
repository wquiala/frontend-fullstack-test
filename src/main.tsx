import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeConfig } from './configs/Theme.config.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeConfig>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeConfig>
  </React.StrictMode>,
);
