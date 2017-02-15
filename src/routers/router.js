import MainComponent from '../components/main';
import LoginComponent from '../components/Login';
import RegisterComponent from '../components/Register';

// 根路由
const routes = {
	childRoutes: [{
		path: '/',
		component: MainComponent,
		childRoutes: [
			LoginComponent,
			RegisterComponent
		]
	}]
}

export default routes;
