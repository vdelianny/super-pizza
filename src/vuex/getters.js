const isAuthenticated = (state) => {
    return state.user.token !== 'null' && state.user.token !== undefined;
};

const calculateAmount = (state) => {
	var total = 0;
	for (var i=0; i<state.productsStore.length; i++) {
		total += (state.productsStore[i].price * state.productsStore[i].quantity);
	}
    return total;
};

export default {
	isAuthenticated,
	calculateAmount,
};