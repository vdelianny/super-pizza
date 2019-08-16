/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        admin: {
            id: localStorage.spUserId,
            role: localStorage.spUserRole,
            token: localStorage.spAdminToken,
        },
        user: {
            id: localStorage.spUserId,
            name: localStorage.spUserName,
            email: localStorage.spUserEmail,
            role: localStorage.spUserRole,
            token: localStorage.spUserToken,
            points: localStorage.spUserPoints,
            pointsToChange: 0,
            trackingOrder: null,
            orders: [],
        },
        payment: {
            dsMerchantParameters: null,
            dsSignature: null,
            dsSignatureVersion: null
        },
        messages: {
            showError: false,
            msgError: null,
            showSuccess: false,
            msgSuccess: null
        },
        pizzas: [],
        products: [],
        promotions: [],
        ingredients: [],
        productsStore: [],
        orders: [],
        wait: false,
    },
    mutations,
    actions,
    getters
});
