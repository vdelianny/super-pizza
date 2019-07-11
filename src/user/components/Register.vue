<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="row justify-content-md-center px-3">
			<div class="form-register col-12 col-md-6 py-5">
				<h2 class="text-center title mb-3">Registro de usuario</h2>
				<form @submit="addUser">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Nombre y apellido" v-model="user.name" required>
					</div>
					<div class="form-group">
						<input type="email" class="form-control" placeholder="Email" v-model="user.email" required>
					</div>
					<div class="form-group">
						<input type="password" class="form-control" placeholder="Password" v-model="user.password" required>
					</div>
					<button type="submit" class="btn btn-primary w-75 mt-4">Continuar</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
export default {
	name: 'Register',
	data () {
		return {
			user: {
				name: null,
				email: null,
				password: null
			}
		}
	},
    methods: {
	    addUser() {
	    	this.$store.dispatch('userRegister', {
            	name: this.user.name,
            	email: this.user.email,
            	password: this.user.password
            });
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