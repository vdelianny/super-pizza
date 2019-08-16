<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="row justify-content-md-center px-3">
			<div class="form-register col-12 col-md-6 py-5">
				<h2 class="text-center title mb-3">Rastreo de pedidos</h2>
				<form @submit="tracking">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Número de pedido" v-model="orderNumber" required>
					</div>
					<button type="submit" class="btn btn-primary w-75 mt-4">Continuar</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	name: 'Tracking',
	data () {
		return {
			orderNumber: null
		}
	},
    methods: {
    	validateFields() {
    		if (this.orderNumber != null) {
    			return true
    		}
    		return false
    	},
	    tracking(e) {
	    	e.preventDefault();
	    	if (this.validateFields()) {
            	this.$store.dispatch('tracking', this.orderNumber);
	    	} else {
	    		this.$store.commit('setMgError', 'Por favor, complete los campos');
	            this.$store.commit('setShowError', true);
	    	}
        }
    }
}
</script>
<style scoped>
	.form-register{
		box-shadow: 0px 2px 20px -3px rgba(158, 155, 155, .4);
	}
	.form-register .title{
		font-size: 1.5rem;
		font-weight: 300;
	}
</style>