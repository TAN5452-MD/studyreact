import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* import zhCN from 'antd/lib/locale/zh_CN'; */
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.min.css';
moment.locale('zh-cn');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


