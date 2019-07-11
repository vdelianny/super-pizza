import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import axios from 'axios'
import router from './router';
import store from './vuex/store';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
	router,
	store,
	render: h => h(App, {
    props:{
      router: router
    }
  })
}).$mount("#app");