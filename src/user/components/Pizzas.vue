<template>
	<div>
		<div class="row">
			<div class="col-md-9 row">
				<div class="col-12 col-md-6"><Card/></div>
				<div class="col-12 col-md-6"><Card/></div>
				<div class="col-12 col-md-6"><Card/></div>
				<div class="col-12 col-md-6"><Card/></div>
				<div class="col-12 col-md-6"><Card/></div>
				<div class="col-12 col-md-6"><Card/></div>
				<div class="col-12 col-md-6"><Card/></div>
				<div class="col-12 col-md-6"><Card/></div>
			</div>
			<div class="col-md-3">
				<div class="banners my-3 py-3">				
					<img src="/assets/sale-1.png" width="100%" height="auto" alt="">
				</div>
			</div>
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
