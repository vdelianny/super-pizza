<template>
<!-- eslint-disable -->
	<div class="card text-center">
		<div class="card-header">
			<h2 class="text-left">Facturas</h2>
		</div>
		<div class="card-body pt-0">
			<table class="table table-striped" id="my-table">
				<thead>
					<tr>
						<th scope="col">Estado del pedido</th>
						<th scope="col">Nombre</th>
						<th scope="col">Monto</th>
						<th scope="col">Teléfono</th>
						<th scope="col">Hora de retiro/Dirección de envío</th>
						<th scope="col">Descargar</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="invoice in invoices">
						<td>{{invoice.status}}</td>
						<td>{{invoice.name}}</td>
						<td>{{invoice.amount}}$</td>
						<td>{{invoice.phone}}</td>
						<td>{{invoice.direction}} {{invoice.withdrawTime}}</td>
						<td @click="generateContent(invoice)"><i class="fas fa-download"></i></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>		
/* eslint-disable */
	import jsPDF from 'jspdf';
	export default {
		name: 'CardPoints',
	    computed: {
	        invoices() {
	            return this.$store.state.user.invoices;
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
	            this.$store.dispatch('getUserInvoices', id);
	        },
	        generateContent(invoice) {
	        	var html = `<h3>Factura</h3>
	        	<p><b>Nombre:</b> ${invoice.name}</p>
	        	<p><b>Monto:</b> ${invoice.amount}</p>
	        	<p><b>Teléfono:</b> ${invoice.phone}</p>
	        	<p><b>Hora de retiro/Dirección de envío:</b> ${invoice.direction || invoice.withdrawTime}</p>`
	        	this.download(html);
	        },
	        download(html) {
	        	var doc = new jsPDF();
			    doc.fromHTML(html, 10, 10,);
			    doc.save('factura.pdf');
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