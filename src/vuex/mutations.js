const setIsAuthenticated = (state, payload) => {
    state.isAuthenticated = payload;
};
const setToken = (state, payload) => {
    state.token = payload;
    localStorage.setItem('jwtToken', payload);
};
const setPizzas = (state, payload) => {
    state.pizzas = payload;
};
const setElementStore = (state, payload) => {
    state.productsStore.push(payload);
};
export default {
	setIsAuthenticated,
	setToken,
	setPizzas,
	setElementStore,
};