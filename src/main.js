import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import Home from './user/components/Home'
import Pizzas from './user/components/Pizzas'
import Orders from './user/components/Orders'
import Custome from './user/components/Custome'

import HomeAdmin from './admin/components/Home'
import Products from './admin/components/Products'
import Ingredients from './admin/components/Ingredients'
import OrdersAdmin from './admin/components/Orders'
import Payments from './admin/components/Payments'


Vue.use(VueRouter)


const routes = [
	//{ path: '/', component: Home },
	{ path: '/pizzas', component: Pizzas },
	{ path: '/orders', component: Orders },
	{ path: '/custome', component: Custome },
	{ path: '/', redirect: '/admin/' },
	{ path: '/admin/', component: HomeAdmin },
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