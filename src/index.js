import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './routes/router';
import { RouterProvider } from 'react-router-dom';

// 전역 스타일 적용
import './index.css';
import './styles/App.css';
import './styles/menu.css';
import './styles/style.css';
import './styles/codeViewer.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
);

reportWebVitals();



