import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import axios from 'axios'
import router from './router';
import store from './vuex/store';

import injectInitialState from './utils/inject-initial-state' 

Vue.use(VueAxios, axios);

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
    document.dispatchEvent(new Event('render-event'))
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