<template>
<!-- eslint-disable -->
	<div class="admin-page">
		<h2 class="title text-left py-3">Ingredientes</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-4">
				<div class="card-admin pb-4">
					<div class="card-title text-left">Nuevo ingrediente</div>
					<div class="px-4 pt-3">
						<form @submit="addIngredient">
							<div class="form-group">
								<input type="text" class="form-control" v-model="name" placeholder="Nombre del ingrediente">
							</div>
							<button type="submit" class="btn btn-admin mt-4 w-75">Enviar</button>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="card-admin pb-3">
					<div class="card-title text-left">Ingredientes</div>
					<div class="px-4">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Nombre</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="ingredient in ingredients">
									<td>{{ingredient.name}}</td>
									<td>
										<button
											class="btn p-0"
											data-toggle="modal"
											data-target="#modalEdit"
											@click="selectIngredient(ingredient)">
											<i class="fas fa-edit mx-1"></i>
										</button>
										<button
											class="btn p-0"
											data-toggle="modal"
											data-target="#modalDelete"
											@click="selectIngredient(ingredient)">
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
						<h5 class="modal-title">Editar ingrediente</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body px-4">
						<form>
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									v-model="ingredientCurrent.name"
									placeholder="Nombre del ingrediente">
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							class="btn btn-primary"
							data-dismiss="modal"
							@click="updateIngredient(ingredientCurrent.id)">
							Guardar
						</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="modal fade modal-admin" id="modalDelete" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Eliminar ingrediente</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						¿Desea eliminar el ingrediente: {{ ingredientCurrent.name }}? 
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							class="btn btn-primary"
							data-dismiss="modal"
							@click="deleteIngredient(ingredientCurrent.id)">
							Guardar
						</button>
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
	name: 'Ingredients',
	data () {
		return {
			ingredients: null,
			name: null,
			ingredientCurrent: {
				name: null,
				id: null
			}
		}
	},
    mounted () {
    	this.getIngredients();
    },
    methods: {
        getIngredients() {
        	axios.get('http://localhost:3000/api/ingredients')
	    	.then(response => {
	    		this.ingredients = response.data.ingredients;
	    	});
        },
        addIngredient(e) {
        	e.preventDefault();
            axios.post('http://localhost:3000/api/ingredients', {
            	name: this.name,
            })
            .then(() => {
            	this.getIngredients();
            	this.name = null;
            });
        },
        deleteIngredient(ingredient) {
        	axios.delete('http://localhost:3000/api/ingredients/'+ingredient)
        	.then(response => {
            	this.getIngredients();
        	});
        },
        updateIngredient(ingredient) {
        	axios.put('http://localhost:3000/api/ingredients/'+ingredient, {
            	name: this.ingredientCurrent.name,
            }).then(response => {
            	this.getIngredients();
        	});
        },
        selectIngredient(ingredient) {
        	this.ingredientCurrent.name = ingredient.name;
        	this.ingredientCurrent.id = ingredient.id;
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

</style>