<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" id="points-tab" data-toggle="tab" href="#points" role="tab" aria-controls="points" aria-selected="true">
					Puntos
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="true">
					Pedidos por entregar
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="true">
					Configuración de la cuenta
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="invoices-tab" data-toggle="tab" href="#invoices" role="tab" aria-controls="invoices" aria-selected="true">
					Facturas
				</a>
			</li>
		</ul>
		<div class="tab-content mt-5" id="myTabContent">
  			<div class="tab-pane fade show active" id="points" role="tabpanel" aria-labelledby="points-tab">
  				<div class="row justify-content-md-center">
  					<div class="col-12 col-md-5">
						<CardPoints/>
  					</div>
  				</div>
  			</div>
  			<div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
  				<div class="row justify-content-md-center">
  					<div class="col-12 col-md-5">
						<UserOrders/>
  					</div>
  				</div>
  			</div>
  			<div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
  				<div class="row justify-content-md-center">
  					<div class="col-12 col-md-6">
						<CardSettings/>
  					</div>
  				</div>
  			</div>
  			<div class="tab-pane fade" id="invoices" role="tabpanel" aria-labelledby="invoices-tab">
  				<div class="row justify-content-md-center">
  					<div class="col-12">
						<UserInvoices/>
  					</div>
  				</div>
  			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
import CardPoints from '../partials/CardPoints.vue'
import UserOrders from '../partials/UserOrders.vue'
import CardSettings from '../partials/CardSettings.vue'
import UserInvoices from '../partials/UserInvoices.vue'
export default {
	name: 'Profile',
	components: {
		UserOrders,
		CardPoints,
		CardSettings,
		UserInvoices
	},
    methods: {
	    
    }
}
</script>
<style scoped>
	.nav-link{
		color: #474747;
	}
	.nav-link.active{
		background-color: #343a3f;
		border-color: transparent;
		color: #FFF;
	}
</style>