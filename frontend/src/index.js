import React from 'react';
import ReactDOM from 'react-dom/client'; // 최신 방식의 import
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss'; // 확장자 변경

// React.StrictMode는 개발 환경에서 유용하며, 경고를 표시하고 코드의 문제를 찾는 데 도움이 됩니다.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);