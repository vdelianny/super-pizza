const setPizzas = (state, payload) => {
    state.pizzas = payload;
};
const setOrders = (state, payload) => {
    state.orders = payload;
};
const setProducts = (state, payload) => {
    state.products = payload;
};
const setPromotions = (state, payload) => {
    state.promotions = payload;
};
const setUserEmail = (state, payload) => {
    state.user.email = payload;
    localStorage.setItem('spUserEmail', payload);
};
const setElementStore = (state, payload) => {
    state.productsStore.push(payload);
};
const deleteElementStore = (state, payload) => {
    state.productsStore.splice(payload, 1);
};
const setTrackingOrder = (state, payload) => {
    state.user.trackingOrder = payload;
};
const setResetStore = (state, payload) => {
    state.productsStore = payload;
};
const setPaymentParams = (state, payload) => {
    var obj = JSON.parse(payload);
    console.log(payload);

    document.querySelector('#dsMerchantParameters').setAttribute('value', obj.Ds_MerchantParameters);
    document.querySelector('#dsSignature').setAttribute('value', obj.Ds_Signature);
    document.querySelector('#dsSignatureVersion').setAttribute('value', obj.Ds_SignatureVersion);
    document.querySelector('#form').submit();
};
const setUserInicialized = (state, payload) => {
    state.user.id = payload.user.id;
    state.user.name = payload.user.name;
    state.user.email = payload.user.email;
    state.user.token = payload.token;
    state.user.role = payload.user.role;
    state.user.points = payload.user.points;
    localStorage.setItem('spUserId', payload.user.id);
    localStorage.setItem('spUserToken', payload.token);
    localStorage.setItem('spUserRole', payload.user.role);
    localStorage.setItem('spUserName', payload.user.name);
    localStorage.setItem('spUserEmail', payload.user.email);
    localStorage.setItem('spUserPoints', payload.user.points);
};
const setAdminInicialized = (state, payload) => {
    state.admin.id = payload.user.id;
    state.admin.role = payload.user.role;
    state.admin.token = payload.token;
    localStorage.setItem('spAdminId', payload.user.id);
    localStorage.setItem('spAdminToken', payload.token);
    localStorage.setItem('spAdminRole', payload.user.role);
};
const setUserFinalized = (state) => {
    state.user.id = null;
    state.user.role = null;
    state.user.points = 0;
    state.user.token = "null";
    state.user.name = null;
    state.user.email = null;
    state.user.pointsToChange = 0;
    state.user.orders = [];
    state.productsStore = [];

    localStorage.removeItem('spUserId');
    localStorage.removeItem('spUserToken');
    localStorage.removeItem('spUserRole');
    localStorage.removeItem('spUserName');
    localStorage.removeItem('spUserEmail');
    localStorage.removeItem('spUserPoints');
};
const setAdminFinalized = (state) => {
    state.admin.id = null;
    state.admin.role = null;
    state.admin.token = "null";
    localStorage.removeItem('spAdminId');
    localStorage.removeItem('spAdminToken');
    localStorage.removeItem('spAdminRole');
};
const setPoints = (state, payload) => {
    state.user.points = payload;
};
const setPointsToChange = (state, payload) => {
    state.user.pointsToChange = payload;
};
const setIngredients = (state, payload) => {
    state.ingredients = payload;
};
const setUserOrders = (state, payload) => {
    state.user.orders = payload;
};
const setUserInvoices = (state, payload) => {
    state.user.invoices = payload;
};
const setMgError = (state, payload) => {
    state.messages.msgError = payload;
    setTimeout(function(){
        state.messages.showError = false;
    }, 10000);
};
const setShowError = (state, payload) => {
    state.messages.showError = payload;
};
const setMgSuccess = (state, payload) => {
    state.messages.msgSuccess = payload;
    setTimeout(function(){
        state.messages.showError = false;
    }, 10000);
};
const setShowSuccess = (state, payload) => {
    state.messages.showSuccess = payload;
};
const setWait = (state, payload) => {
    state.wait = payload;
};
export default {
	setPizzas,
	setProducts,
    setPromotions,
    setIngredients,
	setElementStore,
    deleteElementStore,
	setResetStore,
    setUserInicialized,
    setAdminInicialized,
    setPoints,
    setPointsToChange,
    setTrackingOrder,
    setOrders,
    setUserOrders,
    setUserInvoices,
    setUserFinalized,
    setAdminFinalized,
    setUserEmail,
    setMgError,
    setShowError,
    setMgSuccess,
    setShowSuccess,
    setWait,
    setPaymentParams
};