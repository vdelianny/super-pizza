<template>
	<div>
		<div class="row">
			<div class="col-12 col-md-4"><Card/></div>
			<div class="col-12 col-md-4"><Card/></div>
			<div class="col-12 col-md-4"><Card/></div>
			<div class="col-12 col-md-4"><Card/></div>
			<div class="col-12 col-md-4"><Card/></div>
			<div class="col-12 col-md-4"><Card/></div>
			<div class="col-12 col-md-4"><Card/></div>
			<div class="col-12 col-md-4"><Card/></div>
		</div>
	</div>
</template>
<script>
import Card from '../partials/Card.vue'

export default {
	name: 'Pizzas',
	components: {
		Card,
	}
}
</script>
<style scoped>

</style>
