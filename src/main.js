import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import App from './App.vue'
//import Home from './user/components/Home'
import Pizzas from './user/components/Pizzas'
import Orders from './user/components/Orders'
import Custome from './user/components/Custome'

//import HomeAdmin from './admin/pages/Home'
import PizzasAdmin from './admin/pages/Pizzas'
import Products from './admin/pages/Products'
import Ingredients from './admin/pages/Ingredients'
import OrdersAdmin from './admin/pages/Orders'
import Payments from './admin/pages/Payments'


Vue.use(VueRouter)
 
Vue.use(VueAxios, axios)

const routes = [
	//{ path: '/', component: Home },
	{ path: '/pizzas', component: Pizzas },
	{ path: '/orders', component: Orders },
	{ path: '/custome', component: Custome },
	{ path: '/', redirect: '/admin/' },
	//{ path: '/admin/', component: HomeAdmin },
	{ path: '/admin/pizzas', component: PizzasAdmin },
	{ path: '/admin/products', component: Products },
	{ path: '/admin/ingredients', component: Ingredients },
	{ path: '/admin/orders', component: OrdersAdmin },
	{ path: '/admin/payments', component: Payments },
]

const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");