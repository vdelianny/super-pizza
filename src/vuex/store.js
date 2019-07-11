/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        role: null,
        isAuthenticated: false,
        token: localStorage.jwtToken,
        pizzas: [],
        productsStore: [],
    },
    mutations,
    actions,
    getters
});
