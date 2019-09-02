<template>
<!-- eslint-disable -->
	<div class="container py-5">

		<div v-if="!existProducts()">
			<div class="card-empty px-3 py-2 py-md-5">
				<img src="/assets/logo.png" alt="logo de superpizza" width="80px" height="auto">
				<p class="mb-0 mt-4">
					No has añadido ningún producto a tu carrito, puedes ver nuestro <a href="/pizzas">menú de pizzas</a> y seleccionar una.
				</p>
			</div>
		</div>
		<div v-else class="order-content row">
			<div class="form-shop col-md-7 p-4">
				<h2 class="text-left title-form">Formulario de compra</h2>
				<form @submit="addOrder">
					<div class="text-left subtitle mb-2 mt-4" v-if="!isAuthenticated">
						<label><i class="far fa-address-card"></i> Datos personales</label>
					</div>
					<div class="form-row" v-if="!isAuthenticated">
						<div class="form-group col">
							<input
								required
								name="name"
								type="text"
								class="form-control"
								v-model="order.name"
								placeholder="Nombre y apellido">
						</div>
					</div>
					<div class="form-row" v-if="!isAuthenticated">
						<div class="form-group col">
							<input
								required
								name="email"
								type="email"
								placeholder="Email"
								class="form-control"
								v-model="order.email">
						</div>
					</div>
					<div class="text-left subtitle mb-2 mt-3">
						<label><i class="fas fa-map-pin"></i> Datos de compra</label>
					</div>
					<div class="form-row">
						<div class="form-group col-12">
							<input
								required
								type="text"
								name="phone"
								class="form-control"
								v-model="order.phone"
								placeholder="Teléfono">
						</div>
						<div class="form-row col-12" v-if="!withdraw">
							<div class="form-group col-12 col-md-6">
								<input
									required
									name="city"
									type="text"
									class="form-control"
									v-model="order.city"
									placeholder="Ciudad">
							</div>
							<div class="form-group col-12 col-md-6">
								<input
									required
									type="text"
									name="direction"
									class="form-control"
									placeholder="Dirección"
									v-model="order.direction">
							</div>
						</div>
						<div class="col-12 text-left" v-else>
							<div class="form-group">
						    <label for="withdrawTime">Selecciona la hora que desea retirar su pedido</label>
						    <select class="form-control w-50" id="withdrawTime" v-model="order.withdrawTime">
						    	<option value="19:00">19:00</option>
						    	<option value="20:00">20:00</option>
						    	<option value="21:00">21:00</option>
						    	<option value="22:00">22:00</option>
						    </select>
						  </div>
						</div>
						<div class="form-check col-12 text-right">
							<label class="form-check-label">
								<input type="checkbox" class="form-check-input" v-model="withdraw" @change="changeWithdraw()">
								¿Desea retirar su pedido en la pizzería?
							</label>
						</div>
					</div>
					<button type="submit" class="btn btn-primary w-75 mt-4" :disabled="!existProducts()">
						Continuar
					</button>
				</form>
			</div>
			<div class="details-shop text-left col-md-5 p-4">
				<h2 class="text-left title mb-3">Detalles de pedido</h2>
				<table class="table text-center">
					<tbody>
						<tr v-for="(product, index) in products">
							<td width="50px">
								<img :src="'/assets/'+product.category+'-icon.png'" width="auto" height="25px">
								<span class="cant">{{product.quantity}}</span>
							</td>
							<td>{{product.name}}</td>
							<td><span v-show="product.category == 'pizza' || 'pizzacustom'">{{product.size}}</span></td>
							<td class="text-right">{{priceQuantity(product.price, product.quantity)}}$</td>
							<td class="td-trash">
								<div @click="deleteProductStore(index)">
									<i class="fas fa-trash-alt"></i>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<hr>
				<table class="table">
					<tbody>
						<tr style="font-size: 1.05rem">
							<td><strong>Total</strong></td>
							<td class="text-right"><strong>{{calculateAmount}}$</strong></td>
						</tr>
					</tbody>
				</table>
				<div v-if="isAuthenticated && points >= 20" class="p-3">
					<div class="text-center points-box p-4">
						<p class="mb-1">¿Deseas canjear {{points}} tus puntos por descuentos?</p>
						<p><b>Por cada 20 puntos ahorras 1$ en tu compra.</b></p>
						<p class="d-flex justify-content-md-center">
							<input
								required
								min="20"
								type="number"
								class="form-control w-auto"
								v-model="newPoints">
						</p>
						<button
							type="button"
							@click="changePoints()"
							class="btn btn-secundary w-100">
							Canjear
						</button>
					</div>
				</div>
			</div>
		</div>


		<div ref="modal" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Importante</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body text-left py-4 px-3 px-md-5">
						<p>Te enviaremos a tu correo electrónico el nro de pedido para que puedas verificar su status</p>
						<p>Si eres usuario registrado, podrás verificarlo en tu perfil.</p>
					</div>
				</div>
			</div>
		</div>
		<form style="display: none;" ref="form" id="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST" target="_blank">
			<div>
				<div class="form-group">
					<input type="hidden" id="dsMerchantParameters" name="Ds_MerchantParameters" value="">
				</div>
				<div class="form-group">
					<input type="hidden" id="dsSignature" name="Ds_Signature" value="">
				</div>
				<div class="form-group">
					<input type="hidden" id="dsSignatureVersion" name="Ds_SignatureVersion" value="">
				</div>
			</div>
			<button type="submit">Continuar</button>
		</form>
	</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
export default {
	name: 'Orders',
	data () {
		return {
			order: {
				idUser: null,
				name: null,
				email: null,
				city: null,
				phone: null,
				direction: null,
				withdrawTime: null,
				products: [],
				amount: null
			},
			newPoints: 20,
			withdraw: false
		}
	},
	computed: {
		isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        products() {
            return this.$store.state.productsStore;
        },
        calculateAmount() {
            return this.$store.getters.calculateAmount;
        },
        points() {
            return this.$store.state.user.points;
        },
        userId(){
            return this.$store.state.user.id;
        },
        dsMerchantParameters(){
            return this.$store.state.payment.dsMerchantParameters;
        },
        dsSignature(){
            return this.$store.state.payment.dsSignature;
        },
        dsSignatureVersion(){
            return this.$store.state.payment.dsSignatureVersion;
        }
    },
    methods: {
	    addOrder(e) {
			e.preventDefault();
	    	this.order.idUser = this.userId;
	    	this.order.products = this.products;
	    	this.order.amount = this.calculateAmount;
	    	if (this.isAuthenticated) {
		    	this.order.name = this.$store.state.user.name;
		    	this.order.email = this.$store.state.user.email;
	    	}
    		if (this.validatePersonal() && this.validateDirection()) {
        		this.$store.dispatch('orderRegister', this.order);
        		//this.$refs.form.submit();
        		this.openModal();
        		this.resetOrder();
    		} else {
    			this.$store.commit('setMgError', 'Por favor, complete los campos');
            	this.$store.commit('setShowError', true);
    		}
        },
        changeWithdraw() {
        	if (this.withdraw) {
        		this.order.city = null;
        		this.order.direction = null;
        		this.order.withdrawTime = "19:00";
        	} else {
        		this.order.withdrawTime = null;
        	}
        },
        changePoints() {
        	this.$store.dispatch('changePoints', this.newPoints);         
        },
        openModal() {
			let element = this.$refs.modal;
			$(element).modal('show');
        },
        existProducts(){
        	return this.products.length > 0;
        },
        priceQuantity(product, quantity) {
        	var total = product*quantity;
        	return Number(total.toFixed(2))
        },
        resetOrder() {
			this.order.name = null;
			this.order.email = null;
			this.order.city = null;
			this.order.phone = null;
			this.order.direction = null;
			this.order.withdrawTime = null;
			this.withdraw = false;
        },
        deleteProductStore(i) {
        	this.$store.commit('deleteElementStore', i);
        },
        validatePersonal() {
        	var obj = this.order;
        	if (obj.name!=null && obj.email!=null && obj.phone!=null) {
        		return true
        	}
        	return false
        },
        validateDirection() {
        	var obj = this.order;
        	console.log((obj.city!=null && obj.direction!=null) || obj.withdrawTime!=null);
        	if ((obj.city!=null && obj.direction!=null) || obj.withdrawTime!=null) {
        		return true
        	}
        	return false
        }
    }
}
</script>
<style scoped>
	.card-empty{
		box-shadow: 0px 2px 20px -3px rgba(158, 155, 155, .4);
	}
	.order-content{
		box-shadow: 0px 2px 20px -3px rgba(158, 155, 155, .4);
	}
	.card-empty p{
		font-size: 1.09rem;
	}
	.form-shop i{
		color: #c12f36;
	}
	.form-shop .title-form,
	.details-shop .title{
		font-size: 1.5rem;
		font-weight: 300;
	}
	.form-shop .btn-primary{
		background-color: #c12f36;
		border-color: #c12f36;
	}
	.details-shop{
		background-color: #f5f5f5;
		box-shadow: inset 40px -20px 10px -38px rgba(158, 155, 155, 0.4);
	}
	.table{
		color: #474747;
	}
	.table tbody{
		font-size: .9rem;
	}
	.table tbody td{
		height: 50px;
	}
	.table tbody td{
		border-top: none;
		padding: .4rem;
		vertical-align: middle;
	}
	.table tbody td span{
		background: rgba(186, 8, 17, 0.8);
		border-radius: 50px;
		font-size: small;
		color: white;
		padding: 0 6px;
	}
	.table tbody td .cant{
		margin-top: -8px;
		margin-left: -8px;
		position: absolute;
	}
	.table tbody .td-trash i{
		color: #ba0811;
		font-size: 1.1rem;
	}
	.points-box{
		background-color: #FFF;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 0px rgba(155, 155, 155, .4);
	}
	.modal .modal-header{
		background-color: #ba0811;
		color: #fff;
	}
</style>