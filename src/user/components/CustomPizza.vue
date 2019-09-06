<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="custom-pizza mt-0 mt-md-5">
			<div class="ingredients p-3 p-md-5 text-left w-md-75 mx-auto">
				<div class="text-center mb-4">
					<img width="auto" height="auto" src="/assets/message.png">
				</div>
				<p class="title mb-3 text-center">Selecciona los ingredientes que desees añadir.</p>
				<form action="">
					<div class="form-row">
						<div class="col-12 col-md-6 py-2 py-md-4">
							<label for="size">Seleccione tamaño</label>
							<select id="size" class="form-control" v-model="pizzaCustom.size">
								<option>Pequeña</option>
								<option>Mediana</option>
								<option>Familiar</option>
							</select>
						</div>
						<div class="col-12 col-md-6 py-2 py-md-4">
							<label for="quantity">Cantidad</label>
							<input
								min="1"
								id="quantity"
								type="number"
								class="form-control"
								placeholder="Ingrese cantidad"
								v-model="pizzaCustom.quantity">
						</div>
					</div>
					<div class="form-row">
						<div v-for="ingredient in ingredients" class="col-12 col-md-4 py-2 px-4 ingredient-box">
							<button
								type="button"
								class="position-absolute btn btn-secundary subtract"
								@click="subtractIngredients(ingredient)"
								v-if="quantitySameIngredient(ingredient.id) >= 1">
								-
							</button>
							<div class="ingredient-content text-center">
								<img src="/assets/ingredients/queso.png" alt="">
								<p>{{ingredient.name}}</p>
								<span>{{quantitySameIngredient(ingredient.id)}}</span>
							</div>
							<button 
								type="button"
								class="position-absolute btn btn-primary add"
								@click="addIngredients(ingredient)">
								<div class="text-center">+</div>
							</button>
						</div>
					</div>

					<div class="text-center mt-5 pt-0 pt-md-4">
						<button type="button" @click="addElementStore()" class="btn btn-primary w-50">
							Continuar
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	name: 'Custome',
	data () {
		return {
			pizzaCustom: {
				size: 'Pequeña',
				quantity: 1,
				price: null,
				category: 'pizzacustom',
				ingredients: [],
			},
			quantityIngredients: 0
		}
	},
	computed: {
        ingredients() {
            return this.$store.state.ingredients;
        }
    },
    mounted () {
    	this.getIngredients();
    },
    methods: {
        getIngredients() {
        	if (this.ingredients.length <= 0) {
            	this.$store.dispatch('getIngredients');
        	}
        },
        addElementStore() {
        	this.pricePizza();
        	if (this.quantityIngredients >= 3) {
        		this.$store.dispatch('addElementStore', this.pizzaCustom);
        		this.$store.commit('setMgSuccess', `Su pizza ha sido agregada al carrito`);
                this.$store.commit('setShowSuccess', true);
        	} else{
	            this.$store.commit('setMgError', 'Debe elegir al menos 3 ingredientes');
	            this.$store.commit('setShowError', true);
        	}
        },
        pricePizza() {
        	var price = 0;
        	switch (this.pizzaCustom.size) {
                case 'Pequeña':
                	price = 8.90 + (this.quantityIngredients * 0.90);
                break;
                case 'Mediana':
                	price = 11.90 + (this.quantityIngredients * 1.20);
                break;
                case 'Familiar':
                	price = 13.90 + (this.quantityIngredients * 1.50);
                break;
            }
        	
        	this.pizzaCustom.price = Number(price.toFixed(2));
        },
        updateQuantity(operation) {
        	if (operation == 'add') {
        		this.quantityIngredients += 1;
        		this.quantityIngredients += 1;
        	} else {
        		this.quantityIngredients -= 1;
        		this.quantityIngredients -= 1;
        	}
        },
        findFromList(id) {
        	var list = this.pizzaCustom.ingredients;
        	return list.findIndex(
        		function (list) { return list.id == id }
    		);
        },
        addIngredients(ingredient) {
        	console.log(ingredient);
        	var posIngredient = this.findFromList(ingredient.id);
        	if (posIngredient >= 0) {
        		this.pizzaCustom.ingredients[posIngredient].quantity += 1; 
        	} else{
	        	var newIngredient = {'id': ingredient.id, 'quantity': 1, 'name': ingredient.name};
	        	this.pizzaCustom.ingredients.push(newIngredient);
        	}
    		this.updateQuantity('add');
        	/*
        	if (!newList.includes(ingredient)) {
        		var newList = this.pizzaCustom.ingredients;
        		newList = this.pizzaCustom.ingredients.concat(`${ingredient}, `);
        	} else {
        		newList = this.pizzaCustom.ingredients.replace(`${ingredient}, `, '');
        	}
        	this.pizzaCustom.ingredients = newList;*/
        },
        subtractIngredients(ingredient) {
        	var posIngredient = this.findFromList(ingredient.id);
        	if (posIngredient >= 0) {
        		this.pizzaCustom.ingredients[posIngredient].quantity -= 1; 
        	}
    		this.updateQuantity('subtract');
        },
        quantitySameIngredient(id) {
        	var element = this.pizzaCustom.ingredients.filter(
        		function(ingredient){ return ingredient.id == id }
    		);
    		if (element.length > 0) {
    			return element[0].quantity;
    		}
    		return 0;
        }
    }
}
</script>
<style scoped>
	.custom-pizza{
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
	}
	.custom-pizza .pizza{
		background-color: #FFF;
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
		margin-top: -4rem;
		max-width: 8rem;
	}
	.custom-pizza .ingredients img.element{
		background: #f7f7f7;
		border-radius: 5px;
		border: 1px solid #ebebeb;
	}
	.custom-pizza .ingredients .title{
		font-size: 1.3rem;
		font-weight: 300;
		color: #747474;
	}
	.custom-pizza .ingredients .subtitle{
		font-weight: 500;
	}
	.custom-pizza .ingredients hr{
		background-color: rgba(193, 47, 54, 0.3);
	}
	.custom-pizza .ingredients .ingredient-box{		
		align-items: center;
	    display: grid;
	}
	.custom-pizza .ingredients .ingredient-box .btn{
        line-height: 1rem;
	    opacity: 0.8;
	}
	.custom-pizza .ingredients .ingredient-box .subtract{
		left: 10px;
	}
	.custom-pizza .ingredients .ingredient-box .add{
		right: 10px;
	}
	.custom-pizza .ingredients .ingredient-box .ingredient-content{
	    background-color: rgba(249, 249, 249, .6);
	    border-radius: 10px;
	}
	@media(max-width: 992px) {
		.w-md-75{
			width: 100%;
		}
	}
</style>
