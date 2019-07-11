import axios from 'axios';
import {urlServer} from './variables';
import router from '@/router';

/*User*/

const userLogin = ({ commit }, { email, password }) => {
    axios.post(urlServer+'users/login', {email, password})
    .then(res => {
        if (res.data.success) {
            commit('setToken', res.data.token);
            router.push('pizzas');
        } else {
            //errores
        }
    })
};

const userRegister = ({ name, email, password }) => {
    axios.post(urlServer+'users', {name, email, password})
    .then(res => {
        if (res.data.success) {
            router.push('login');
        }
    })
};

const userSignOut = ({ commit }) => {
    commit('setToken', null);
};


/*Admin*/

/*Pizzas*/

const getPizzas = async ({ commit }) => {
    try {
        axios.get(urlServer+'pizzas')
        .then(res => {
            commit('setPizzas', res.data.pizzas);
        });
    }
    catch (error) {
        commit('setRecipes', []);
    }
};

const addElementStore = ({ commit }, product) => {
    commit('setElementStore', product);
};

export default {
    userLogin,
    userSignOut,
    userRegister,
    getPizzas,
    addElementStore,
};