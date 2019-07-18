<template>
<!-- eslint-disable -->
	<div class="w-10 position-absolute sidebar" v-if="isAuthenticatedAdmin">
		<div class="nav flex-column" aria-orientation="vertical">
			<router-link tag="a" class="nav-link pt-3" to="/admin/pizzas">
				<i class="fas fa-home"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/pizzas">
				<i class="fas fa-pizza-slice"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/products">
				<i class="fas fa-cookie-bite"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/ingredients">
				<i class="fas fa-clipboard-list"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/orders">
				<i class="fas fa-shopping-basket"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/payments">
				<i class="fas fa-dollar-sign"></i>
			</router-link>
			<li class="nav-link pt-3"  @click="logout()">
				<i class="fas fa-power-off"></i>
			</li>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
/*
"admin", "admin@sp.com", "0000"
*/
	export default {
    name: 'Sidebar',
    computed: {
        isAuthenticatedAdmin() {
            return this.$store.getters.isAuthenticatedAdmin;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOutAdmin');
        }
    }
}
</script>

<style scoped>
	.sidebar{
		background-color: #28b0a6;
		box-shadow: 0px 5px 10px 3px rgba(158, 155, 155, .4);
		min-height: calc(100vh - 60px);
		width: auto;
	}
	.sidebar .nav-link{
		color: #227669;
		font-size: 1.3rem;
		border-bottom: 1px solid rgba(26, 152, 133, 0.5);
	}
	.sidebar .nav-link:focus,
	.sidebar .nav-link:hover{
		color: #f5f5f5;
	}
</style>