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
				<table class="table">
					<tbody>
						<tr v-for="pizza in pizzasStorage">
							<td width="50px">
								<img src="/assets/pizza-icon.png" width="auto" height="25px">
								<span class="cant">{{pizza.quantity}}</span>
							</td>
							<td>{{pizza.name}}</td>
							<td><span>{{pizza.size}}</span></td>
							<!--td class="text-right">{{pizza.price}}$</td-->
						</tr>
					</tbody>
				</table>
				<hr>
				<table class="table">
					<tbody>
						<tr style="font-size: 1.05rem">
							<td><strong>Total</strong></td>
							<td class="text-right"><strong>200,00$</strong></td>
						</tr>
					</tbody>
				</table>
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
				direction: null
			},
			pizzasStorage: [],
			url:'http://localhost:3000'
		}
	},
	mounted() {
		if (localStorage.getItem('pizzasStorage')) {
			try {
				this.pizzasStorage = JSON.parse(localStorage.getItem('pizzasStorage'));
				console.log(this.pizzasStorage);
			} catch(e) {
				localStorage.removeItem('pizzasStorage');
			}
		}
	},
    methods: {
	    addOrder(e) {
        	e.preventDefault();
            axios.post(this.url+'/api/orders', {
            	name: this.order.name,
            	city: this.order.city,
            	phone: this.order.phone,
            	direction: this.order.direction
            })
            .then(() => {
            	this.order.name = null;
            	this.order.city = null;
            	this.order.phone = null;
            	this.order.direction = null;
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
	.form-shop .title-form{
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