<template>
<!-- eslint-disable -->
	<div class="p-5 login-admin">
		<div class="row justify-content-md-center px-3">
			<div class="form-login col-12 col-md-4 py-5 mt-0 mt-md-5">
				<h2 class="text-center title mb-3">Ingreso al sistema</h2>
				<form @submit="login">
					<div class="form-group">
						<input name="email" type="email" class="form-control" placeholder="Email" v-model="user.email" required>
					</div>
					<div class="form-group">
						<input name="password" type="password" class="form-control" placeholder="Contraseña" v-model="user.password" required>
					</div>
					<button type="submit" class="btn btn-primary w-75 mt-4">Conectarse</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	name: 'LoginAdmin',
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
	.login-admin {
		background-color: #28b0a6;
    	height: 100vh;
	}
	.login-admin .form-login{
		background-color: #FFF;
		box-shadow: 0px 2px 17px -3px rgba(0, 0, 0, .5);
		border-radius: 5px;
	}
	.login-admin .form-login .title{
		font-size: 1.5rem;
		font-weight: 300;
	}
	.login-admin .form-login .btn-primary{
		background-color: #28b0a6;
		border-color: #28b0a6;
	}
</style>