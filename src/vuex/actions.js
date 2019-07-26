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
            if (res.data.user.role !== 'admin') {
                commit('setUserInicialized', res.data);
            } else {
                commit('setAdminInicialized', res.data);
            }
            router.push('pizzas');
        } else {
            commit('setMgError', res.data.msg);
            commit('setShowError', true);
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
        } else {
            commit('setMgError', res.data.msg);
            commit('setShowError', true);
        }
    })
};

const changePoints = ({ commit, dispatch, state }, newPoints) => {
    axios.put(urlServer+'users/points/'+state.user.id, {
        points: newPoints,
    }).then(() => {
        dispatch('getPointsUser');
        commit('setPointsToChange', newPoints);
    });
};

const getPointsUser = ({ commit, state }) => {
    try {
        axios.get(urlServer+'users/points/'+state.user.id)
        .then(res => {
            commit('setPoints', res.data.points);
        });
    }
    catch (error) {
        commit('setPoints', 0);
    }
};

const userSignOut = ({ commit }) => {
    commit('setUserFinalized');
    router.push('login');
};

const userSignOutAdmin = ({ commit }) => {
    commit('setAdminFinalized');
    router.push('login');
};

const toProfile = ({ commit }) => {
    router.push('profile');
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

/*Promotions*/
const getPromotions = async ({ commit }) => {
    try {
        axios.get(urlServer+'promotions')
        .then(res => {
            commit('setPromotions', res.data.promotions);
        });
    }
    catch (error) {
        commit('setPromotions', []);
    }
};
const addPromotion = ({ dispatch }, promotion) => {
    axios.post(urlServer+'promotions', promotion)
    .then(() => {
        dispatch('getPromotions');
    });
};
const deletePromotion = ({ dispatch }, id) => {
    axios.delete(urlServer+'promotions/'+id)
    .then(() => {
        dispatch('getPromotions');
    });
};
const updatePromotion = ({ dispatch }, promotion) => {
    axios.put(urlServer+'promotions/'+promotion.id, {
        name: promotion.name,
        description: promotion.description,
        price: promotion.price
    }).then(() => {
        dispatch('getPromotions');
    });
};

/*Orders*/
const addElementStore = ({ commit }, product) => {
    commit('setElementStore', product);
};
const orderRegister = ({ commit, dispatch }, order) => {
    axios.post(urlServer+'orders', {
        name: order.name,
        email: order.email,
        city: order.city,
        phone: order.phone,
        direction: order.direction,
        products: order.products,
        amount: order.amount,
        idUser: order.idUser
    }).then(() => {
        commit('setResetStore', []);
        dispatch('getPointsUser');
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
const getUserOrders = async ({ commit }, id) => {
    try {
        axios.get(urlServer+'orders/user/'+id)
        .then(res => {
            commit('setUserOrders', res.data.orders);
        });
    }
    catch (error) {
        commit('setUserOrders', []);
    }
};
const updateStatus = ({ dispatch }, order) => {
    axios.put(urlServer+'orders/status/'+order.id, {
        status: order.status
    }).then(() => {
        dispatch('getOrders');
    });
};

const tracking = async ({ commit, dispatch }, id) => {
    try {
        axios.get(urlServer+'orders/status/'+id)
        .then(res => {
            if (res.data.success) {
                commit('setMgSuccess', `Su pedido con el nro: ${id} se encuentra: ${res.data.order.status}`);
                commit('setShowSuccess', true);
            } else {
                commit('setMgError', `${res.data.msg}: ${id}`);
                commit('setShowError', true);
            }
        });
    }
    catch (error) {
        dispatch('showErrors');
    }
};

const showErrors = ({ commit }) => {
    commit('setMgError', 'Ha ocurrido un error, intente más tarde');
    commit('setShowError', true);
} 

export default {
    userRegister,
    userLogin,
    userSignOut,
    userSignOutAdmin,
    toProfile,
    getPointsUser,
    getPizzas,
    addPizza,
    deletePizza,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct,
    getPromotions,
    addPromotion,
    deletePromotion,
    updatePromotion,
    getIngredients,
    addIngredient,
    deleteIngredient,
    updateIngredient,
    getOrders,
    orderRegister,
    addElementStore,
    changePoints,
    updateStatus,
    getUserOrders,
    tracking,
    showErrors
};