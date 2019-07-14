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
const addProduct = ({ dispatch }, product) => {
    axios.post(urlServer+'products', product)
    .then(() => {
        dispatch('getProducts');
    });
};
const deleteProduct = ({ dispatch }, id) => {
    axios.delete(urlServer+'products/'+id)
    .then(() => {
        dispatch('getProducts');
    });
};
const updateProduct = ({ dispatch }, product) => {
    axios.put(urlServer+'products/'+product.id, {
        name: product.name,
        type: product.type,
        price: product.price
    }).then(() => {
        dispatch('getProducts');
    });
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
};

/*Orders*/
const addElementStore = ({ commit }, product) => {
    commit('setElementStore', product);
};
const orderRegister = ({ commit, dispatch }, order) => {
    axios.post(urlServer+'orders', {
        name: order.name,
        city: order.city,
        phone: order.phone,
        direction: order.direction,
        products: order.products,
        amount: order.amount,
        idUser: order.idUser
    }).then(() => {
        commit('setResetStore', []);
        dispatch('getOrders');
    });
};
const getOrders = async ({ commit }) => {
    try {
        axios.get(urlServer+'orders')
        .then(res => {
            commit('setOrders', res.data.orders);
        });
    }
    catch (error) {
        commit('setOrders', []);
    }
};
const updateStatus = ({ dispatch }, order) => {
    axios.put(urlServer+'orders/status/'+order.id, {
        status: order.status
    }).then(() => {
        dispatch('getOrders');
    });

};

export default {
    userRegister,
    userLogin,
    userSignOut,
    getPizzas,
    addPizza,
    deletePizza,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct,
    getIngredients,
    addIngredient,
    deleteIngredient,
    updateIngredient,
    getOrders,
    orderRegister,
    addElementStore,
    changePoints,
    updateStatus,
};