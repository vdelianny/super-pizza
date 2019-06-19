<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="row">
			<div class="col-md-9">
				<div class="row">
					<div class="col-12 col-md-6" v-for="pizza in pizzas">
						<div class="card text-center py-3 mx-0 mx-md-2 mb-3">
							<div class="information-product pr-4 py-3 text-right">
								<img
									width="auto"
									height="auto"
									:src="url+'/pizzas/'+pizza.id+'.jpg'"
									class="rounded-circle position-absolute w-45 p-2">
								<p class="name mb-0">
									<button type="button" data-toggle="modal" data-target="#exampleModal">
										<i class="fas fa-plus-circle mr-2"></i>
										<span>{{pizza.name}}</span>
									</button>
								</p>
								<p class="price my-0 w-50 ml-auto">
									<i v-for="ingredient in pizza.ingredients">{{ingredient.name}}, </i>
								</p>
							</div>
						</div>
					</div>
				</div>
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
/* eslint-disable */
import axios from 'axios';

export default {
	name: 'Pizzas',
	data () {
		return {
			pizzas: null,
			url:'http://localhost:3000'
		}
	},
    mounted () {
    	this.getPizzas();
    },
    methods: {
        getPizzas() {
        	axios.get(this.url+'/api/pizzas')
	    	.then(response => {
	    		this.pizzas = response.data.pizzas;
	    		console.log(this.pizzas);
	    	});
        }
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

	.card{
		border: none;
		background-color: transparent;
		/*box-shadow: 0px 0px 15px 0px rgba(158, 155, 155, .2);*/
	}
	.card .information-product{
		background: rgba(255, 255, 255, 0.8);
		border-radius: 40% 8px 8px 40%;
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
	}
	.card .information-product img{
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
		left: -2%;
		max-width: 220px;
		top: 3%;
	}
	.card .price{
		min-height: 4.5rem;
		font-size: .85rem;
		color: rgba(97, 92, 92, 0.7);
	}
	.card .name button{
		background-color: transparent;
		border: none;
		font-size: 1rem;
		font-weight: 600;
		color: #c12f36;
	}
	.card .name button span{
		color: #474747;
	}
</style>
