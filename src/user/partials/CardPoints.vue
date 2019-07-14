<template>
<!-- eslint-disable -->
	<div class="card text-center px-3 py-4">
		<p>
			<img src="/assets/logo.png" alt="logo de superpizza" width="100px" height="auto">
		</p>
		<h4>Usted tiene acumulados:</h4>
		<h1> {{ points }} </h1>
		<p>Equivalen a <b>{{ pointsToMoney }}$</b>. Puedes canjearlos en cualquiera de tus compras.</p>
	</div>
</template>
<script>		
/* eslint-disable */
	export default {
		name: 'CardPoints',
	    computed: {
	        points() {
	            return this.$store.state.user.points;
	        },
	        pointsToMoney() {
	            return this.$store.getters.pointsToMoney;
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
</style>