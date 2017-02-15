import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory,hashHistory} from 'react-router';

//导入路由
import router from './routers/router';

//根据环境使用路由类型
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


//渲染主要入口组件
ReactDOM.render(
	<Router history={history} routes={router}/>,
	document.getElementById('app')
);
