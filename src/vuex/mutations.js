const setToken = (state, payload) => {
    state.user.token = payload;
    localStorage.setItem('jwtToken', payload);
};
const setPizzas = (state, payload) => {
    state.pizzas = payload;
};
const setProducts = (state, payload) => {
    state.products = payload;
};
const setElementStore = (state, payload) => {
    state.productsStore.push(payload);
};
const setResetStore = (state, payload) => {
    state.productsStore = payload;
};
const setUserInicialized = (state, payload) => {
    state.user.id = payload.id;
    state.user.points = payload.points;
};
const setPointsToChange = (state, payload) => {
    state.user.pointsToChange = payload;
};
export default {
	setToken,
	setPizzas,
	setProducts,
	setElementStore,
	setResetStore,
    setUserInicialized,
    setPointsToChange,
};