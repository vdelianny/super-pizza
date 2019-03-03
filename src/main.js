import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './user/components/Home'
import Pizzas from './user/components/Pizzas'
import Orders from './user/components/Orders'

Vue.use(VueRouter)


const routes = [
	{ path: '/', component: Home },
	{ path: '/pizzas', component: Pizzas },
	{ path: '/orders', component: Orders },
]

const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");