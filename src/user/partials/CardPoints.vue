<template>
<!-- eslint-disable -->
	<div class="card text-center px-3 py-4">
		<p>
			<img src="/assets/logo.png" alt="logo de superpizza" width="100px" height="auto">
		</p>
		<h3>Usted tiene acumulados:</h3>
		<h1> Puntos </h1>
		<p>Equivalen a $. Puedes canjearlos en cualquiera de tus compras.</p>
	</div>
</template>
<script>		
/* eslint-disable */
	export default {
		name: 'CardPoints',
		data () {
			return {
				
			}
		},
	    methods: {
		    
	    }
	}
</script>
<style scoped>
	.card{
		background-color: #FFF;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 0px rgba(155, 155, 155, .4);
	}

</style>