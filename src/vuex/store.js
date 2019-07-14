/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            id: null,
            role: null,
            token: localStorage.jwtToken,
            points: 0,
            pointsToChange: 0,
        },
        pizzas: [],
        products: [],
        ingredients: [],
        productsStore: [],
    },
    mutations,
    actions,
    getters
});
