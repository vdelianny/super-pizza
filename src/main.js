import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './user/components/Home'
import Pizzas from './user/components/Pizzas'
import Products from './user/components/Products'
import Orders from './user/components/Orders'
import Custome from './user/components/Custome'
import Register from './user/components/Register'
import Login from './user/components/Login'

import HomeAdmin from './admin/pages/Home'
import PizzasAdmin from './admin/pages/Pizzas'
import ProductsAdmin from './admin/pages/Products'
import Ingredients from './admin/pages/Ingredients'
import OrdersAdmin from './admin/pages/Orders'
import Payments from './admin/pages/Payments'


Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
	{ path: '/', component: Home },
	{ path: '/pizzas', component: Pizzas },
	{ path: '/products', component: Products },
	{ path: '/orders', component: Orders },
	{ path: '/custome', component: Custome },
	{ path: '/register', component: Register },
	{ path: '/login', component: Login },
	{ path: '/admin/', component: HomeAdmin },
	{ path: '/admin/pizzas', component: PizzasAdmin },
	{ path: '/admin/products', component: ProductsAdmin },
	{ path: '/admin/ingredients', component: Ingredients },
	{ path: '/admin/orders', component: OrdersAdmin },
	{ path: '/admin/payments', component: Payments },
]

const router = new VueRouter({
	routes
})

Vue.config.productionTip = false
Vue.prototype.urlServer = 'http://localhost:3000';

new Vue({
	router,
	render: h => h(App, {
    props:{
      router: router
    }
  })
}).$mount("#app");