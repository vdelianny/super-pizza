/* eslint-disable */
import axios from 'axios';
import {urlServer} from './variables';
import router from '../router';

/*User*/

const userLogin = ({ commit }, user) => {
    commit('setWait', true);
    axios.post(urlServer+'users/login', {
        email: user.email,
        password: user.password
    }).then(res => {
        commit('setWait', false);
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
    commit('setWait', true);
    axios.post(urlServer+'users', {
        name: user.name,
        email: user.email,
        password: user.password
    }).then(res => {
        commit('setWait', false);
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
    commit('setWait', true);
    try {
        axios.get(urlServer+'users/points/'+state.user.id)
        .then(res => {
            commit('setPoints', res.data.points);
            commit('setWait', false);
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
    router.push('/admin/login');
};

const toProfile = ({ commit }) => {
    router.push('profile');
};

/*Pizzas*/
const getPizzas = async ({ commit }) => {
    commit('setWait', true);
    try {
        axios.get(urlServer+'pizzas')
        .then(res => {
            commit('setPizzas', res.data.pizzas);
            commit('setWait', false);
        });
    }
    catch (error) {
        commit('setPizzas', []);
    }
};
const addPizza = ({ commit, dispatch }, pizza) => {
    commit('setWait', true);
    axios.post(urlServer+'pizzas', pizza)
    .then(() => {
        commit('setWait', false);
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
    commit('setWait', true);
    try {
        axios.get(urlServer+'products')
        .then(res => {
            commit('setProducts', res.data.products);
            commit('setWait', false);
        });
    }
    catch (error) {
        commit('setWait', false);
        commit('setProducts', []);
    }
};
const addProduct = ({ commit, dispatch }, product) => {
    commit('setWait', true);
    axios.post(urlServer+'products', product)
    .then(() => {
        commit('setWait', false);
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
    commit('setWait', true);
    try {
        axios.get(urlServer+'ingredients')
        .then(res => {
            commit('setIngredients', res.data.ingredients);
            commit('setWait', false);
        });
    }
    catch (error) {
        commit('setWait', false);
        commit('setIngredients', []);
    }
};
const addIngredient = ({ commit, dispatch }, name) => {
    commit('setWait', true);
    axios.post(urlServer+'ingredients', { name })
    .then(() => {
        commit('setWait', false);
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
    commit('setWait', true);
    try {
        axios.get(urlServer+'promotions')
        .then(res => {
            commit('setPromotions', res.data.promotions);
            commit('setWait', false);
        });
    }
    catch (error) {
            commit('setWait', false);
        commit('setPromotions', []);
    }
};
const addPromotion = ({ commit, dispatch }, promotion) => {
    commit('setWait', true);
    axios.post(urlServer+'promotions', promotion)
    .then(() => {
        commit('setWait', false);
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
        withdrawTime: order.withdrawTime,
        idUser: order.idUser
    }).then((res) => {
        console.log(res);
        commit('setPaymentParams', res.data);
        commit('setResetStore', []);
        dispatch('getPointsUser');
        dispatch('getOrders');
    });
};
const getOrders = async ({ commit }) => {
    commit('setWait', true);
    try {
        axios.get(urlServer+'orders')
        .then(res => {
            commit('setOrders', res.data.orders);
            commit('setWait', false);
        });
    }
    catch (error) {
        commit('setWait', false);
        commit('setOrders', []);
    }
};
const getUserOrders = async ({ commit }, id) => {
    commit('setWait', true);
    try {
        axios.get(urlServer+'orders/user/'+id)
        .then(res => {
            commit('setWait', false);
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
    commit('setWait', true);
    try {
        axios.get(urlServer+'orders/status/'+id)
        .then(res => {
            commit('setWait', false);
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