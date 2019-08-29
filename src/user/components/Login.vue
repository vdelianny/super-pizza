<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="row justify-content-md-center px-3">
			<div class="form-register col-12 col-md-6 py-5 px-3 px-md-4">
				<h2 class="text-center title mb-3">Ingreso de usuarios</h2>
				<form @submit="login">
					<div class="form-group">
						<input name="email" type="email" class="form-control" placeholder="Email" v-model="user.email" required>
					</div>
					<div class="form-group">
						<input name="password" type="password" class="form-control" placeholder="Contraseña" v-model="user.password" required>
					</div>
					<div class="form-check mt-4 text-left">
						<label class="form-check-label">
							<input type="checkbox" class="form-check-input">
							Recordar datos
						</label>
					</div>
					<button type="submit" class="btn btn-primary w-100 mt-4">Conectarse</button>
					<div class="mt-4 text-left">
						<a href="#">¿Olvidaste tu contraseña?</a>
					</div>
					<div class="loginSignUpSeparator">
						<span class="textInSeparator">o</span>
					</div>
					<div>
						<a href="#" class="btn btn-secundary w-100">Registrarse</a>
					</div>
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
				email: null,
				password: null
			}
		}
	},
    methods: {
	    login(e) {
            this.$store.dispatch('userLogin', this.user);
            e.preventDefault();
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
    .loginSignUpSeparator {
	    border-top: 1px solid #cbd2d6;
	    position: relative;
	    margin: 25px 0 10px;
	    text-align: center;
	}
	.loginSignUpSeparator .textInSeparator {
	    background-color: #fff;
	    padding: 0 .5em;
	    position: relative;
	    color: #6c7378;
	    top: -.7em;
	}
</style>