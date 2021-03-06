import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store';

import Home from './user/components/Home';
import Pizzas from './user/components/Pizzas';
import Products from './user/components/Products';
import Promotions from './user/components/Promotions';
import Orders from './user/components/Orders';
import CustomPizza from './user/components/CustomPizza';
import Register from './user/components/Register';
import Login from './user/components/Login';
import Profile from './user/components/Profile';
import Tracking from './user/components/Tracking';

//import HomeAdmin from './admin/pages/Home';
import PizzasAdmin from './admin/pages/Pizzas';
import ProductsAdmin from './admin/pages/Products';
import PromotionsAdmin from './admin/pages/Promotions';
import Ingredients from './admin/pages/Ingredients';
import OrdersAdmin from './admin/pages/Orders';
import Payments from './admin/pages/Payments';
import LoginAdmin from './admin/pages/Login';


Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/pizzas', component: Pizzas },
		{ path: '/products', component: Products },
		{ path: '/orders', component: Orders },
		{ path: '/promotions', component: Promotions },
		{ path: '/custompizza', component: CustomPizza },
		{ path: '/tracking', component: Tracking },
		{ path: '/register', component: Register },
		{
			path: '/login',
			component: Login,
			meta: {
				logoutUserRequired: true
			}
		},
		{
			path: '/profile',
			component: Profile,
			meta: {
				authUserRequired: true
			}
		},
		{
			path: '/admin/login',
			component: LoginAdmin,
			meta: {
				logoutAdminRequired: true
			}
		},
		{
			path: '/admin/pizzas',
			component: PizzasAdmin,
			meta: {
				authAdminRequired: true
			}
		},
		{
			path: '/admin/products',
			component: ProductsAdmin,
			meta: {
				authAdminRequired: true
			}
		},
		{
			path: '/admin/ingredients',
			component: Ingredients,
			meta: {
				authAdminRequired: true
			}
		},
		{
			path: '/admin/orders',
			component: OrdersAdmin,
			meta: {
				authAdminRequired: true
			}
		},
		{
			path: '/admin/promotions',
			component: PromotionsAdmin,
			meta: {
				authAdminRequired: true
			}
		},
		{
			path: '/admin/payments',
			component: Payments,
			meta: {
				authAdminRequired: true
			}
		},
	]
});

router.beforeEach((to, from, next) => {
	store.commit('setShowError', false);
	store.commit('setShowSuccess', false);
	if (!to.meta.authUserRequired) {
		next();
	} else {
		if (!store.getters.isAuthenticated) {
			next({ path: '/login' });
		} else {
			next();
		}
	}

	if (!to.meta.authAdminRequired) {
		next();
	} else {
		if (!store.getters.isAuthenticatedAdmin) {
			next({ path: '/admin/login' });
		} else {
			next();
		}
	}

	if (!to.meta.logoutAdminRequired) {
		next();
	} else {
		if (!store.getters.isAuthenticatedAdmin) {
			next();
		} else {
			next({ path: '/admin/' });
		}
	}

	if (!to.meta.logoutUserRequired) {
		next();
	} else {
		if (!store.getters.isAuthenticated) {
			next();
		} else {
			next({ path: '/' });
		}
	}
});

export default router;