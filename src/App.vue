<template>
	<div id="app">
		<Nav/>
		<div class="container body py-5">
			<router-view />
		</div>
		<Footer/>
	</div>
</template>

<script>
import Nav from './user/partials/Nav.vue'
import Footer from './user/partials/Footer.vue'

export default {
	name: 'app',
	components: {
		Nav,
		Footer
	}
}
</script>

<style>
	#app {
		background-color: #f5f5f566;
		color: #474747;
		font-family: 'Roboto';
		text-align: center;
	}
	.body{
		min-height: 100vh;
	}
	.form-control{
		font-weight: 300;
	}
	.carousel-indicators li{
		border-radius: 50px;
		border: none;
		height: 12px;
		width: 12px;
	}
	.btn{
		border-radius: 0;
	}
	.btn:focus{
		box-shadow: none;
	}
</style>
