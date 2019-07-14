<template>
<!-- eslint-disable -->
	<div class="card text-center">
		<div class="card-header">
			<h2 class="text-left">Tus pedidos</h2>
		</div>
		<div class="card-body pt-0">
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Monto total</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="order in orders">
						<td>{{order.amount}}$</td>
						<td>{{order.status}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>		
/* eslint-disable */
	export default {
		name: 'CardPoints',
	    computed: {
	        orders() {
	            return this.$store.state.user.orders;
	        },
	        userId(){
	            return this.$store.state.user.id;
	        }
	    },
	    mounted () {
    		this.getUserOrders();
	    },
	    methods: {
	        getUserOrders() {
	        	const id = this.userId;
	            this.$store.dispatch('getUserOrders', id);
	        }
        }
	}
</script>
<style scoped>
	.card{
		background-color: #FFF;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 0px rgba(155, 155, 155, .4);
	}
	.card .card-header {
		background-color: #343a3f;
		border-bottom: none;
		color: #fff;
	}
	.card .card-header h2{
		font-size: 1.3rem;
		font-weight: 300;
	}
	.table {
		color: #474747;
	}
	.table thead th {
	   border-top: none;
	}
</style>