const isAuthenticated = (state) => {
    return state.user.token !== 'null' && state.user.token !== undefined;
};

const calculateAmount = (state) => {
	var total = 0,
		discount= 0;
	for (var i=0; i<state.productsStore.length; i++) {
		total += (state.productsStore[i].price * state.productsStore[i].quantity);
	}
	if (
		state.user.pointsToChange >= 20 &&
		state.user.pointsToChange <= state.user.points &&
		state.productsStore.length >= 1) 
	{
		discount = state.user.pointsToChange / 20;
		total -= discount;
	}
    return total;
};

const pointsToMoney = (state) => {
    return state.user.points / 20;
};

export default {
	isAuthenticated,
	calculateAmount,
	pointsToMoney,
};