<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="row">
			<div class="col-md-9">
				<div class="row">
					<div class="col-12 col-md-6" v-for="pizza in pizzas">
						<div class="card text-center py-3 mx-0 mx-md-2 mb-3">
							<div class="information-product pr-4 py-3 text-right">
								<div class="rounded-circle position-absolute w-45 p-2">
									<img
										width="auto"
										height="auto"
										:src="url+'/pizzas/'+pizza.id+'.jpg'">
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
								<select class="form-control" id="size" v-model="pizzaCurrent.size">
									<option>Pequeña</option>
									<option>Mediana</option>
									<option>Familiar</option>
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
							<div class="form-group text-center d-flex">
								<!--
								<div class="w-50 px-2">
									<router-link tag="button" data-dismiss="modal" class="btn btn-secundary w-100" to="/custome">
										Personalizar
									</router-link>
								</div>
								-->
								<div class="w-100 px-2">
									<button
										type="button"
										data-dismiss="modal"
										@click="addPizzaStorage()"
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

export default {
	name: 'Pizzas',
	data () {
		return {
			pizzas: null,
			pizzaCurrent: {
				id: null,
				name: null,
				size: 'Pequeña',
				quantity: 1
			},
			pizzasStorage: [],
			url:'http://localhost:3000'
		}
	},
    mounted () {
    	this.getPizzas();
    	if (localStorage.getItem('pizzasStorage')) {
    		try {
    			this.pizzasStorage = JSON.parse(localStorage.getItem('pizzasStorage'));
    		} catch(e) {
    			localStorage.removeItem('pizzasStorage');
    		}
    	}
    },
    methods: {
        getPizzas() {
        	axios.get(this.url+'/api/pizzas')
	    	.then(response => {
	    		this.pizzas = response.data.pizzas;
	    	});
        },
        selectPizza(pizza) {
        	this.pizzaCurrent.id = pizza.id;
        	this.pizzaCurrent.name = pizza.name;
        },
        addPizzaStorage() {
        	this.pizzasStorage.push(this.pizzaCurrent);
        	const parsed = JSON.stringify(this.pizzasStorage);
        	localStorage.setItem('pizzasStorage', parsed);
        	//window.localStorage.clear()
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
	.card .information-product div{
	    background: rgba(255, 255, 255, 0.8);
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
</style>
