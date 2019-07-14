/* eslint-disable */
import axios from 'axios';
import {urlServer} from './variables';
import router from '../router';

/*User*/

const userLogin = ({ commit }, user) => {
    axios.post(urlServer+'users/login', {
        email: user.email,
        password: user.password
    }).then(res => {
        if (res.data.success) {
            commit('setToken', res.data.token);
            commit('setUserInicialized', res.data.user);
            router.push('pizzas');
        } else {
            //errores
        }
    })
};

const userRegister = ({ commit }, user) => {
    axios.post(urlServer+'users', {
        name: user.name,
        email: user.email,
        password: user.password
    }).then(res => {
        if (res.data.success) {
            router.push('login');
        }
    })
};

const changePoints = ({ commit, state }, newPoints) => {
    axios.put(urlServer+'users/points/'+state.user.id, {
        points: newPoints,
    }).then(() => {
        commit('setPointsToChange', newPoints);
    });
};

const userSignOut = ({ commit }) => {
    commit('setToken', 'null');
    router.push('login');
};


/*Pizzas*/
const getPizzas = async ({ commit }) => {
    try {
        axios.get(urlServer+'pizzas')
        .then(res => {
            commit('setPizzas', res.data.pizzas);
        });
    }
    catch (error) {
        commit('setPizzas', []);
    }
};
const addPizza = ({ dispatch }, pizza) => {
    axios.post(urlServer+'pizzas', pizza)
    .then(() => {
        dispatch('getPizzas');
    });
}
const deletePizza = ({ dispatch }, id) => {
    axios.delete(urlServer+'pizzas/'+id)
    .then(() => {
        dispatch('getPizzas');
    });
};

/*Products*/
const getProducts = async ({ commit }) => {
    try {
        axios.get(urlServer+'products')
        .then(res => {
            commit('setProducts', res.data.products);
        });
    }
    catch (error) {
        commit('setProducts', []);
    }
};

/*Ingredients*/

const getIngredients = async ({ commit }) => {
    try {
        axios.get(urlServer+'ingredients')
        .then(res => {
            commit('setIngredients', res.data.ingredients);
        });
    }
    catch (error) {
        commit('setIngredients', []);
    }
};
const addIngredient = ({ dispatch }, name) => {
    axios.post(urlServer+'ingredients', { name })
    .then(() => {
        dispatch('getIngredients');
    });
};
const deleteIngredient = ({ dispatch }, id) => {
    axios.delete(urlServer+'ingredients/'+id)
    .then(() => {
        dispatch('getIngredients');
    });
};
const updateIngredient = ({ dispatch }, ingredient) => {
    axios.put(urlServer+'ingredients/'+ingredient.id,
        { name: ingredient.name }
    ).then(() => {
        dispatch('getIngredients');
    });
}

/*Orders*/
const addElementStore = ({ commit }, product) => {
    commit('setElementStore', product);
};

const orderRegister = ({ commit }, order) => {
    axios.post(urlServer+'orders', {
        name: order.name,
        city: order.city,
        phone: order.phone,
        direction: order.direction,
        products: order.products,
        amount: order.amount
    }).then(() => {
        commit('setResetStore', []);
    });
};


export default {
    userLogin,
    userSignOut,
    userRegister,
    getPizzas,
    getProducts,
    addElementStore,
    orderRegister,
    changePoints,
    getIngredients,
    addIngredient,
    deleteIngredient,
    updateIngredient,
    deletePizza,
    addPizza,
};