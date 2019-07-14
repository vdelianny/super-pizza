<template>
<!-- eslint-disable -->
	<div class="admin-page">
		<h2 class="title text-left py-3">Pedidos realizados</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-10">
				<div class="card-admin pb-3">
					<div class="card-title text-left">Pedidos</div>
					<div class="px-4 card-body">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Cliente</th>
									<th scope="col">Teléfono</th>
									<th scope="col">Ciudad</th>
									<th scope="col">Dirección</th>
									<th scope="col">Monto total</th>
									<th scope="col">Status</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="order in orders">
									<td>{{order.name}}</td>
									<td>{{order.phone}}</td>
									<td>{{order.city}}</td>
									<td>{{order.direction}}</td>
									<td>{{order.amount}}$</td>
									<td>{{order.status}}</td>
									<td>
										<button
											class="btn p-0"
											data-toggle="modal"
											@click="selectOrder(order)"
											data-target="#modalDetails">
											<i class="fas fa-eye mx-1"></i>
										</button>
										<button
											class="btn p-0"
											data-toggle="modal"
											@click="selectOrder(order)"
											data-target="#modalChangeStatus">
											<i class="fas fa-random"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade modal-admin" id="modalChangeStatus" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Cambiar status del pedido</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body px-4">
						<form>
							<div class="form-group">
								<select class="form-control" v-model="orderCurrent.status">
									<option value="Pendiente">Pendiente</option>
									<option value="En camino">En camino</option>
									<option value="Entregado">Entregado</option>
								</select>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							data-dismiss="modal" 
							class="btn btn-primary"
							@click="updateStatus">
							Guardar
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade modal-admin" id="modalDetails" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Detalles del pedido</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body text-left px-4">
						<p>
							<i class="far fa-user-circle mr-2"></i>
							<strong> Cliente: </strong>
							{{orderCurrent.name}}
						</p>
						<p>
							<i class="fas fa-street-view mr-2"></i>
							<strong> Dirección: </strong>
							{{orderCurrent.city}} - {{orderCurrent.direction}}
						</p>
						<p>
							<i class="fas fa-utensils mr-2"></i>
							<strong> Pedido: </strong>
						</p>
						<table class="table table-striped text-center">
							<thead>
								<tr>
									<th scope="col">Tipo</th>
									<th scope="col">Cantidad</th>
									<th scope="col">Producto</th>
									<th scope="col">Tamaño</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="pizza in orderCurrent.pizzas">
									<td>
										<img src="/assets/pizza-icon.png" width="auto" height="20px">
									</td>
									<td>{{pizza.quantity}}</td>
									<td>{{pizza.pizza.name}}</td>
									<td>{{pizza.size}}</td>
								</tr>
								<tr v-for="product in orderCurrent.products">
									<td>
										<img src="/assets/product-icon.png" width="auto" height="20px">
									</td>
									<td>{{product.quantity}}</td>
									<td>{{product.product.name}}</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
						<p>
							<i class="fas fa-dollar-sign mr-2"></i>
							<strong> Total: </strong>
							{{orderCurrent.amount}}$
						</p>
						<p>
							<i class="far fa-smile-beam mr-2"></i>
							<strong> Status: </strong>
							{{orderCurrent.status}}
						</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
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
	name: 'Order',
	data () {
		return {
			orderCurrent: {
				id: null,
				name: null,
				city: null,
				direction: null,
				amount: null,
				status: null,
				pizzas: null,
				products: null
			}
		}
	},
	computed: {
        orders() {
            return this.$store.state.orders;
        }
    },
    mounted () {
    	this.getOrders();
    },
    methods: {
        getOrders() {
            this.$store.dispatch('getOrders');
        },
        selectOrder(order) {
        	this.orderCurrent.id = order.id;
        	this.orderCurrent.name = order.name;
        	this.orderCurrent.city = order.city;
        	this.orderCurrent.direction = order.direction;
        	this.orderCurrent.amount = order.amount;
        	this.orderCurrent.status = order.status;
        	this.orderCurrent.pizzas = order.OrderPizzas;
        	this.orderCurrent.products = order.OrderProducts;
        },
        updateStatus(){
            this.$store.dispatch('updateStatus', this.orderCurrent);
        }
    }
}
</script>
<style scoped>
	.table{
		color: #747474;
	}
	.table thead th{
		border-top: none;
	}
	.table .btn{
		color: #28b0a6;
	}
	.table .btn:hover{
		color: #227669;
	}
	.modal-admin .modal-content i{
		color: #28b0a6;
	}
</style>