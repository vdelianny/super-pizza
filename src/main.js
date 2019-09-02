import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import axios from 'axios'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import router from './router';
import store from './vuex/store';

import injectInitialState from './utils/inject-initial-state' 

Vue.use(VueAxios, axios);
 
// For more options see below
Vue.use(VueReCaptcha, { siteKey: '6LfS7LUUAAAAAMsWbBXKzBrnhpBMI9SYwd5HPjal' })

Vue.config.productionTip = false;

/* eslint-disable */
/*new Vue({
	router,
	store,
	render: h => h(App, {
    props:{
      router: router
    }
  })
}).$mount("#app");
*/

const app = new Vue({
  router,
  store,
  render: h => h(App, {
    props:{
      router: router
    }
  }),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
    store.dispatch('getPizzas');
    store.dispatch('getProducts');
    store.dispatch('getIngredients');
    store.dispatch('getPromotions');
  }
})

if (window.__INITIAL_STATE__) store.replaceState(window.__INITIAL_STATE__)

router.beforeResolve(async (to, from, next) => {
  try {
    const components = router.getMatchedComponents(to)
    await Promise.all(components.map(x => x.fetch && x.fetch({ store })))

    if (window.__PRERENDER_INJECTED) injectInitialState(store.state)
  } catch (error) {
    console.log(error)
  }
  return next()
})

app.$mount(`#app`)