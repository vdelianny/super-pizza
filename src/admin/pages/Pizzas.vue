<template>
<!-- eslint-disable -->
	<div class="admin-page">
		<h2 class="title text-left py-3">Pizzas</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-4">
				<div class="card-admin">
					<div class="card-title mb-0 text-left">Nueva pizza</div>
					<div class="px-4 card-body pt-2">
						<form @submit="addPizza" enctype="multipart/form-data">
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									v-model="newPizza.name"
									placeholder="Nombre del producto">
							</div>
							<div class="form-group">
								<p class="text-left px-3">Ingredientes</p>
								<div class="row text-left px-4">
									<label v-for="ingredient in ingredients" class="col-12 col-md-6">
										<input type="checkbox" :value="ingredient.id"  v-model="newPizza.ingredients">
										<span class="ml-2">{{ingredient.name}}</span>
									</label>
								</div>
							</div>
							<div class="form-group">
								<input type="file" ref="avatar" @change="uploadAvatar">
							</div>
							<div class="form-group">
								<input
									min=0
									step=".01"
									type="number"
									class="form-control"
									v-model="newPizza.price"
									placeholder="Precio del producto">
							</div>
							<button type="submit" class="btn btn-admin mt-4 w-75">Enviar</button>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="card-admin">
					<div class="card-title mb-0 text-left">Pizzas</div>
					<div class="px-4 card-body pt-2">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Nombre</th>
									<th scope="col">Ingredientes</th>
									<th scope="col">Precio</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="pizza in pizzas">
									<td>{{pizza.name}}</td>
									<td>
										<ul class="p-0">
											<li v-for="ingredient in pizza.ingredients">
												<em>{{ingredient.name}}</em>
											</li>
										</ul>
									</td>
									<td>{{pizza.price}}</td>
									<td>
										<!--
										<button class="btn p-0" data-toggle="modal" data-target="#modalEdit">
											<i class="fas fa-edit mx-1"></i>
										</button>
										-->
										<button
											class="btn p-0"
											data-toggle="modal"
											data-target="#modalDelete"
											@click="selectPizza(pizza)">
											<i class="fas fa-trash mx-1"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade modal-admin" id="modalEdit" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Editar producto</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body px-4">
						<form>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Nombre del producto">
							</div>
							<div class="form-group">
								<select class="form-control">
									<option disabled hidden selected>Tipo de producto</option>
									<option value="pizza">Pizza</option>
									<option value="drink">Bebida</option>
									<option value="complement">Complemento</option>
								</select>
							</div>
							<div class="form-group">
								<input type="number" class="form-control" placeholder="Precio del producto">
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-primary">Guardar</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade modal-admin" id="modalDelete" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Eliminar pizza</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						¿Desea eliminar esta pizza: {{ pizzaCurrent.name }}?
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							class="btn btn-primary"
							data-dismiss="modal"
							@click="deletePizza">
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	name: 'Pizzas',
	data () {
		return {
			newPizza: {
				name: null,
				avatar: null,
				ingredients: [],
				price: null
			},
			pizzaCurrent: {
				id: null,
				name: null,
				price: null
			}
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
        getIngredients() {
            this.$store.dispatch('getIngredients');
        },
        getPizzas() {
            this.$store.dispatch('getPizzas');
        },
        selectPizza(pizza) {
        	this.pizzaCurrent.id = pizza.id;
        	this.pizzaCurrent.name = pizza.name;
        	this.pizzaCurrent.price = pizza.price;
        },
        addPizza(e) {
        	var formData = new FormData();
        	formData.append('name', this.newPizza.name);
        	formData.append('avatar', this.newPizza.avatar);
        	for (var i=0; i<this.newPizza.ingredients.length; i++){
    			formData.append('ingredients[]', this.newPizza.ingredients[i]);
        	}
        	formData.append('price', this.newPizza.price);
            this.$store.dispatch('addPizza', formData);
            e.preventDefault();
        	this.newPizza.name = null;
			this.newPizza.avatar = null;
			this.newPizza.ingredients = [];
			this.newPizza.price = null;
        },
        deletePizza() {
            this.$store.dispatch('deletePizza', this.pizzaCurrent.id);
        },
        uploadAvatar() {
        	this.newPizza.avatar = this.$refs.avatar.files[0];
        }
    }
}
</script>
<style scoped>
	.table{
		color: #747474;
	}
	.table thead th{
		border-top: none;
	}
	.table .btn{
		color: #28b0a6;
	}
	.table .btn:hover{
		color: #227669;
	}
	ul{
		list-style: none;
	}
</style>