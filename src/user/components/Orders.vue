<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="order-content row">
			<div class="form-shop col-md-7 p-4">
				<h2 class="text-left title-form">Formulario de compra</h2>
				<form @submit="addOrder">
					<div class="text-left subtitle mb-2 mt-4">
						<label><i class="far fa-address-card"></i> Datos personales</label>
					</div>
					<div class="form-row">
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Nombre y apellido" v-model="order.name">
						</div>
					</div>
					<div class="text-left subtitle mb-2 mt-3">
						<label><i class="fas fa-map-pin"></i> Dirección de compra</label>
					</div>
					<div class="form-row">
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Teléfono" v-model="order.phone">
						</div>
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Ciudad" v-model="order.city">
						</div>
						<div class="form-group col-12">
							<input type="text" class="form-control" placeholder="Dirección" v-model="order.direction">
						</div>
					</div>
					<!--
					<div class="text-left subtitle mb-2 mt-3">
						<label><i class="far fa-money-bill-alt"></i> Datos bancarios</label>
					</div>
					<div class="form-row">
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Número de tarjeta">
						</div>
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="CCV">
						</div>
					</div> -->
					<button type="submit" class="btn btn-primary w-75 mt-4">Continuar</button>
				</form>
			</div>
			<div class="details-shop text-left col-md-5 p-4">
				<h2 class="text-left title mb-3">Detalles de pedido</h2>
				<table class="table">
					<tbody>
						<tr v-for="product in products">
							<td width="50px">
								<img :src="'/assets/'+product.category+'-icon.png'" width="auto" height="25px">
								<span class="cant">{{product.quantity}}</span>
							</td>
							<td>{{product.name}}</td>
							<td><span v-show="product.category == 'pizza'">{{product.size}}</span></td>
							<td class="text-right">{{product.price * product.quantity}}$</td>
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
			</div>
		</div>


		<div ref="modal" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Nro. de pedido</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body text-left py-4 px-3 px-md-5">
						<p>Su nro de pedido es: {{numberOrder}}</p>
					</div>
				</div>
			</div>
		</div>
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
				name: null,
				city: null,
				phone: null,
				direction: null,
				totalAmount: 0,
				productsStorage: []
			},
			numberOrder: null
		}
	},
	computed: {
        products() {
            return this.$store.state.productsStore;
        },
        calculateAmount() {
            return this.$store.getters.calculateAmount;
        }
    },
    methods: {
	    addOrder(e) {
        	e.preventDefault();
            axios.post(this.urlServer+'/api/orders', {
            	name: this.order.name,
            	city: this.order.city,
            	phone: this.order.phone,
            	amount: this.order.totalAmount,
            	direction: this.order.direction,
            	products: this.order.productsStorage
            })
            .then(res => {
            	this.numberOrder = res.data.message;
            	this.order.name = null;
            	this.order.city = null;
            	this.order.phone = null;
            	this.order.direction = null;
    			localStorage.removeItem('productsStorage');
    			let element = this.$refs.modal;
    			$(element).modal('show');
            });
        }
    }
}
</script>
<style scoped>
	.order-content{
		box-shadow: 0px 2px 20px -3px rgba(158, 155, 155, .4);
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
</style>