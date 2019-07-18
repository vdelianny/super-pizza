<template>
	<div>
		<div class="sup-nav">
			<div class="navbar navbar-expand-lg w-100 w-md-75 mx-auto">
				<a class="navbar-brand" href="/">
					<img src="/assets/logo.png" alt="logo de superpizza" width="80px" height="auto">
				</a>
				<div class="navbar-nav ml-auto">
					<div v-if="!isAuthenticated" class="d-flex">
						<router-link tag="li" class="mx-2 nav-item" to="/login">
							<a class="nav-link p-0" style="font-size: 1.2rem;">
								<i class="fas fa-user-plus"></i>
								<p class="mb-0">Acceso</p>
							</a>
						</router-link>
						<router-link tag="li" class="mx-2 nav-item" to="/register">
							<a class="nav-link p-0" style="font-size: 1.2rem;">
								<i class="far fa-edit"></i>
								<p class="mb-0">Registro</p>
							</a>
						</router-link>
					</div>
					<div v-else class="d-flex">
						<li class="mx-2 nav-item" @click="toProfile()">
							<div class="nav-link p-0" style="font-size: 1.2rem;">
								<i class="fas fa-user-cog"></i>
								<p class="mb-0">Perfil</p>
							</div>
						</li>
						<li class="mx-2 nav-item" @click="logout()">
							<div class="nav-link p-0" style="font-size: 1.2rem;">
								<i class="fas fa-power-off"></i>
								<p class="mb-0">Salir</p>
							</div>
						</li>
					</div>
					<router-link tag="li" class="mx-2 nav-item" to="/orders">
						<a class="nav-link p-0" style="font-size: 1.2rem;">
							<i class="fas fa-shopping-cart"></i>
							<p class="mb-0">Carrito</p>
						</a>
					</router-link>
				</div>
			</div>
		</div>
		<nav class="navbar navbar-down navbar-dark bg-dark sticky-top navbar-expand-lg">
			<div class="container">
				<span class="navbar-brand"></span>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbar">
					<ul class="navbar-nav mr-auto">
						<div class="nav-item">
							<router-link tag="li" to="/">
								<a class="nav-link">Ofertas</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/pizzas">
								<a class="nav-link">Pizzas</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/products">
								<a class="nav-link">Bebidas y Complementos</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/tracking">
								<a class="nav-link">Rastrear pedido</a>
							</router-link>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'Nav',
	data () {
		return {
			logged: true
		}
	},
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        },
        toProfile() {
            this.$store.dispatch('toProfile');
        }
    }
}
</script>

<style scoped>
	.nav-link{
		cursor: pointer;
	}
	.sup-nav{
		background-color: #c12f36;
	}
	.sup-nav .nav-item p{
		color: #fff;
		font-size: .9rem;
		text-transform: capitalize;
	}
	.navbar-down{
		background-image: url(/assets/bg-pizzas.png);
		box-shadow: 0px 5px 12px -2px rgba(158, 155, 155, 1);
		/*border-bottom: 5px solid #f5be10;*/
	}
	.navbar .nav-link{
		color: #f7f7f7;
		font-size: .9rem;
		font-weight: 400;
		text-transform: uppercase;
	}
</style>
