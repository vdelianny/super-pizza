<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="row justify-content-md-center px-3">
			<div class="form-register col-12 col-md-6 py-5 px-3 px-md-4">
				<h2 class="text-center title mb-3">Registro de usuario</h2>
				<form @submit="addUser">
					<div class="form-group">
						<input 
							required
							name="name" 
							type="text"
							class="form-control"
							v-model="user.name"
							placeholder="Nombre y apellido">
					</div>
					<div class="form-group">
						<input
							required
							name="email"
							type="email"
							placeholder="Email"
							class="form-control"
							v-model="user.email">
					</div>
					<div class="form-group">
						<input
							required
							name="email"
							type="email"
							class="form-control"
							v-model="user.emailConfirm"
							placeholder="Confirmar email">
					</div>
					<div class="form-group">
						<input
							required
							type="password"
							class="form-control"
							v-model="user.password"
							placeholder="Contraseña">
					</div>
					<div class="form-group">
						<input
							required
							type="password"
							class="form-control"
							v-model="user.passwordConfirm"
							placeholder="Confirmar contraseña">
					</div>
					<div class="form-check mt-4 text-left">
						<label class="form-check-label">
							<input type="checkbox" v-model="checkTerms" class="form-check-input">
							Al registrarse usted acepta nuestros <a href="#">términos y condiciones</a>
						</label>
					</div>
					<button type="submit" class="btn btn-primary w-100 mt-4">Registrarse</button>
					<div class="loginSignUpSeparator">
						<span class="textInSeparator">o</span>
					</div>
					<div>
						<a href="#" class="btn btn-secundary w-100">Iniciar sesión</a>
					</div>
					<button class="btn btn-primary" @click="recaptcha">Execute recaptcha</button>
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
				emailConfirm: null,
				password: null,
				passwordConfirm: null
			},
			checkTerms: false
		}
	},
    methods: {
    	recaptcha() {
    		this.$recaptcha('login').then((token) => {
    			console.log(token) // Will print the token
    		});
	    },
    	isEqualEmail(){
    		return this.user.email == this.user.emailConfirm;
    	},
    	isEqualPassword(){
    		return this.user.password == this.user.passwordConfirm;
    	},
    	fieldsCompleted(){
    		var user = this.user;
    		return user.name != null && user.email != null && user.password != null;
    	},
    	acceptTerms(){
    		return this.checkTerms;
    	},
    	showError(msg){
    		this.$store.commit('setMgError', msg);
            this.$store.commit('setShowError', true);	
    	},
	    addUser(e) {
	    	e.preventDefault();
	    	if (!this.isEqualEmail()) {
	    		this.showError('Los valores de email no coinciden');
	    	} else if (!this.isEqualPassword()) {
	    		this.showError('Los valores de contraseña no coinciden');
	    	} else if(!this.fieldsCompleted()){
	    		this.showError('Por favor, llene todos los campos');
	    	} else if(!this.acceptTerms()){
	    		this.showError('Por favor, acepte los términos y condiciones');
	    	} else {
	    		this.$store.dispatch('userRegister', this.user);
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