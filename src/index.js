import React from 'react';
import { createRoot } from 'react-dom/client';// Замість ReactDOM імпортуємо createRoot з react-dom
import { Provider } from 'react-redux';
import store from './redux/redusers/store';
import App from './components/App';

const root = createRoot(document.getElementById('root')); // Створюємо корінь за допомогою createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);