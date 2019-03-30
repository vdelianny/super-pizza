<template>
	<div class="container py-5">
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
					<div class="message p-3 mb-4">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore totam assumenda, libero odit consequuntur dolorum autem iste facilis officiis repellendus. Laboriosam eveniet dolore unde rem commodi cum numquam quasi nihil!
						</p>
					</div>			
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
	.banners .message{
		background-color: #f7f7f7;
		border-radius: 10px;
		box-shadow: 0px 2px 10px 0px rgba(158, 155, 155, .4);
		color: #888;
	}
</style>
