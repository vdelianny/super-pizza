/* eslint-disable */
const isAuthenticated = (state) => {
    return state.user.token !== 'null' && state.user.token !== undefined;
};

const calculateAmount = (state) => {
	var total = 0,
		discount= 0;
	for (var i=0; i<state.productsStore.length; i++) {
		total += (state.productsStore[i].price * state.productsStore[i].quantity);
	}
	if (state.user.pointsToChange >= 20 && state.productsStore.length >= 1) 
	{
		discount = Math.trunc(state.user.pointsToChange / 20);
		total = total - discount;
		console.log(total);
	}
    return total;
};

const pointsToMoney = (state) => {
    return Math.trunc(state.user.points / 20);
};

export default {
	isAuthenticated,
	calculateAmount,
	pointsToMoney,
};