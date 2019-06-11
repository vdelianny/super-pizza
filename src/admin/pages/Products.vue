<template>
<!-- eslint-disable -->
	<div class="admin-page">
		<h2 class="title text-left py-3">Productos</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-4">
				<div class="card-admin">
					<div class="card-title mb-0 text-left">Nuevo producto</div>
					<div class="px-4 card-body pt-2">
						<form @submit="addProduct">
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									v-model="newProduct.name"
									placeholder="Nombre del producto">
							</div>
							<div class="form-group">
								<select class="form-control" v-model="newProduct.type">
									<option value="" disabled hidden selected>Tipo de producto</option>
									<option value="Bebida">Bebida</option>
									<option value="Complemento">Complemento</option>
								</select>
							</div>
							<div class="form-group">
								<input
									type="number"
									class="form-control"
									v-model="newProduct.price"
									placeholder="Precio del producto">
							</div>
							<button type="submit" class="btn btn-admin mt-4 w-75">Enviar</button>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="card-admin">
					<div class="card-title mb-0 text-left">Productos</div>
					<div class="px-4 card-body pt-2">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Nombre</th>
									<th scope="col">Tipo</th>
									<th scope="col">Precio</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="product in products">
									<td>{{product.name}}</td>
									<td>{{product.type}}</td>
									<td>{{product.price}}</td>
									<td>
										<button
											class="btn p-0"
											data-toggle="modal"
											data-target="#modalEdit"
											@click="selectProduct(product)">
											<i class="fas fa-edit mx-1"></i>
										</button>
										<button
											class="btn p-0"
											data-toggle="modal"
											data-target="#modalDelete"
											@click="selectProduct(product)">
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
								<input
									type="text"
									class="form-control"
									v-model="productCurrent.name"
									placeholder="Nombre del producto">
							</div>
							<div class="form-group">
								<select class="form-control" v-model="productCurrent.type">
									<option value="" disabled hidden selected>Tipo de producto</option>
									<option value="Bebida">Bebida</option>
									<option value="Complemento">Complemento</option>
								</select>
							</div>
							<div class="form-group">
								<input
									type="number"
									class="form-control"
									v-model="productCurrent.price"
									placeholder="Precio del producto">
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							class="btn btn-primary"
							data-dismiss="modal"
							@click="updateIngredient(productCurrent.id)">
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
						<h5 class="modal-title">Eliminar producto</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						¿Desea eliminar el producto: {{productCurrent.name}}?
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							class="btn btn-primary"
							data-dismiss="modal"
							@click="deleteProduct(productCurrent.id)">
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
import axios from 'axios';

export default {
	name: 'Products',
	data () {
		return {
			products: null,
			newProduct: {
				name: null,
				type: "",
				price: null
			},
			productCurrent: {
				id: null,
				name: null,
				type: "",
				price: null
			}
		}
	},
    mounted () {
    	this.getProducts();
    },
    methods: {
        getProducts() {
        	axios.get('http://localhost:3000/api/products')
	    	.then(response => {
	    		this.products = response.data.products;
	    	});
        },
        addProduct(e) {
        	e.preventDefault();
            axios.post('http://localhost:3000/api/products', {
            	name: this.newProduct.name,
            	type: this.newProduct.type,
            	price: this.newProduct.price
            })
            .then(() => {
            	this.getProducts();
            	this.newProduct.name = null;
				this.newProduct.type = "";
				this.newProduct.price = null;
            });
        },
        deleteProduct(product) {
        	axios.delete('http://localhost:3000/api/products/'+product)
        	.then(response => {
            	this.getProducts();
        	});
        },
        updateIngredient(product) {
        	axios.put('http://localhost:3000/api/products/'+product, {
            	name: this.productCurrent.name,
				type: this.productCurrent.type,
				price: this.productCurrent.price
            }).then(response => {
            	this.getProducts();
        	});
        },
        selectProduct(product) {
        	this.productCurrent.id = product.id;
        	this.productCurrent.name = product.name;
        	this.productCurrent.type = product.type;
        	this.productCurrent.price = product.price;
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