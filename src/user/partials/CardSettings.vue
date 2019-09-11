<template>
<!-- eslint-disable -->
	<div class="card py-4">
		<div class="settings-header">
			<h4 class="text-left px-4 pb-2">
				<i class="far fa-user-circle mx-1"></i>
				Información personal
			</h4>
		</div>
		<div class="p-4">
			<h5 class="mb-3 text-left">
				Actualizar correo electrónico
			</h5>
			<div class="form-group col-12">
				<p class="text-left mb-0">Ingrese su nuevo correo electrónico</p>
				<input
					type="text"
					class="form-control"
					v-model="user.email">
				<div class="mt-3">
					<button class="btn btn-primary w-100" @click="updateEmail">Guardar cambios</button>
				</div>
			</div>
		</div>
		<div class="p-4">
			<h5 class="mb-3 text-left">
				Actualizar contraseña
			</h5>
			<div class="form-group">
				<p class="text-left mb-0">Ingrese su nueva contraseña</p>
				<input
					type="password"
					class="form-control"
					v-model="user.password">
			</div>
			<div class="form-group">
				<p class="text-left mb-0">Confirme su nueva contraseña</p>
				<input
					type="password"
					class="form-control"
					v-model="user.confirmPassword">
			</div>
			<div class="text-center">
				<button class="btn btn-primary w-100" @click="updatePassword">Guardar cambios</button>
			</div>
		</div>
		<div class="p-4">
			<h5 class="mb-3 text-left">
				Eliminar cuenta
			</h5>
			<div class="form-group col-12">
				<p class="text-left mb-0">¿Desea eliminar sus datos de nuestra web?</p>
				<div class="mt-3">
					<button class="btn btn-primary w-100">Eliminar</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>		
/* eslint-disable */
	export default {
		name: 'CardPoints',
		data () {
			return {
				user: {
					email: null,
					password: null,
					confirmPassword: null
				}
			}
		},
	    computed: {
	        email() {
	            return this.$store.state.user.email;
	        }
	    },
	    mounted () {
	    	this.user.email = this.email;
	    },
	    methods: {
	    	updateEmail() {
	    		this.$store.dispatch('updateEmail', this.user.email);
	    	},
	    	updatePassword() {
	    		if (!this.comparePassword) {
	    			this.$store.commit('setMgError', 'Las contraseñas no coinciden');
	            	this.$store.commit('setShowError', true);
	    		} else {
	    			this.$store.dispatch('updatePassword', this.user.password);
	    			this.user.password = null;
	    			this.user.confirmPassword = null;
	    		}
	    	},
	    	comparePassword() {
	    		return this.user.password === this.user.confirmPassword;
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
	.card h4{
	    font-weight: 400;
	}
	.card h5{
	    font-weight: 300;
	}
	.card .settings-header{
		border-bottom: 1px solid #ccc;
	}
	.card .settings-header h4{
		font-weight: 300;
	}
</style>