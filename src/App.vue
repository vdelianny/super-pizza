<template>
	<div id="app">
		<Nav/>
		<div class="body">
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
		//background-color: #f5f5f566;
		color: #474747;
		font-family: 'Roboto';
		overflow-x: hidden;
		text-align: center;
	}
	.body{
		min-height: 100vh;
	}
	.form-control{
		font-weight: 300;
		border: none;
		border-bottom: 1px solid rgba(204, 204, 204, 0.6);
		border-radius: 0px;
	}
	.form-control:focus{
		box-shadow: none;
		border-color: #9c9a9a;
	}
	select{
		background-image: url(/assets/chevron-down.png);
		background-position: 95% center;
		background-repeat: no-repeat;
		background-size: 20px;
		text-indent: 1px;
		text-overflow: '';
		-moz-appearance: none;
		-webkit-appearance: none;
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
	.btn:focus,
	button:focus,
	a:focus{
		box-shadow: none;
		outline: none;
	}
	a:hover{
		text-decoration: none;
	}
	label{
		font-size: .96rem;
		font-weight: 300;
	}
	.form-row>.col, .form-row>[class*=col-] {
		padding-right: 10px;
		padding-left: 10px;
	}

	@media (min-width: 768px) {
		.w-xs-50{
			width: 50%;
		}
		.w-md-75{
			width: 75% !important;
		}
	}
</style>
