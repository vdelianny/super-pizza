<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="row">
			<div class="col-md-9">
				<div class="row">
					<div class="col-12 col-md-6" v-for="pizza in pizzas">
						<div class="card text-center py-3 mx-0 mx-md-2 mb-3">
							<div class="information-product pr-4 py-3 text-right">
								<div class="rounded-circle position-absolute w-45">
									<img
										width="auto"
										height="auto"
										class="rounded-circle"
										:src="urlPublic+'pizzas/'+pizza.id+'.jpg'">
								</div>
								<p class="name mb-0">
									<button
										type="button"
										data-toggle="modal"
										data-target="#exampleModal"
										@click="selectPizza(pizza)">
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
		
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{pizzaCurrent.name}}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body text-left py-4 px-3 px-md-5">
						<form action="">
							<div class="form-group">
								<label for="size">Seleccione tamaño</label>
								<select class="form-control" id="size" v-model="pizzaCurrent.size" @change="updatePrice">
									<option value="Pequeña">Pequeña</option>
									<option value="Mediana">Mediana</option>
									<option value="Familiar">Familiar</option>
								</select>
							</div>
							<div class="form-group">
								<label for="quantity">Cantidad</label>
								<input
									min="1"
									id="quantity"
									type="number"
									class="form-control"
									placeholder="Ingrese cantidad"
									v-model="pizzaCurrent.quantity">
							</div>
							<div class="form-group text-center">
								<div class="w-100">
									<button
										type="button"
										data-dismiss="modal"
										@click="addElementStore()"
										class="btn btn-primary w-100">
										Continuar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
/* eslint-disable */
import axios from 'axios';
import {urlPublic} from '../../vuex/variables.js';
export default {
	name: 'Pizzas',
	data () {
		return {
			pizzaCurrent: {
				pizzaId: null,
				name: null,
				size: 'Pequeña',
				quantity: 1,
				price: null,
				category: 'pizza'
			},
			price_peq: null,
			price_med: null,
			price_gran: null,
			urlPublic
		}
	},
    computed: {
        pizzas() {
            return this.$store.state.pizzas;
        },
        ingredients() {
            return this.$store.state.ingredients;
        }
    },
    mounted () {
    	this.getPizzas();
    	this.getIngredients();
    },
    methods: {
        getPizzas() {
        	if (this.pizzas.length <= 0) {
            	this.$store.dispatch('getPizzas');
        	}
        },
        getIngredients() {
        	if (this.ingredients.length <= 0) {
            	this.$store.dispatch('getIngredients');
        	}
        },
        selectPizza(pizza) {
        	this.pizzaCurrent.pizzaId = pizza.id;
        	this.pizzaCurrent.name = pizza.name;
        	this.pizzaCurrent.price = pizza.price_peq;
        	this.price_peq = pizza.price_peq;
        	this.price_med = pizza.price_med;
        	this.price_gran = pizza.price_gran;
        },
        addElementStore() {
        	this.$store.dispatch('addElementStore', this.pizzaCurrent);
        },
        updatePrice(){
        	switch(this.pizzaCurrent.size){
        		case 'Pequeña': 
        			this.pizzaCurrent.price = this.price_peq;
        		break;
        		case 'Mediana': 
        			this.pizzaCurrent.price = this.price_med;
        		break;
        		case 'Familiar': 
        			this.pizzaCurrent.price = this.price_gran;
        		break;
        	}
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
		background: #FFF;
		border-radius: 40% 8px 8px 40%;
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
	}
	.card .information-product div{
	    background: #FFF;
	    box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
	    display: flex;
	    height: 10rem;
	    justify-content: center;
	    left: -2%;
	    top: 3%;
	    width: 10rem;
	}
	.card .information-product div img{
		max-height: 100%;
		max-width: 100%;
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
	.custome{
		background: #f9f9f9;
    	border-radius: 10px;
	}
	.custome .form-control{
		background: transparent;
	}
</style>
