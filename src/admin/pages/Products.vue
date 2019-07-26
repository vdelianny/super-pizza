<template>
<!-- eslint-disable -->
	<div class="admin-page">
		<h2 class="title text-left py-3">Productos</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-4">
				<div class="card-admin">
					<div class="card-title mb-0 text-left">Nuevo producto</div>
					<div class="px-4 card-body pt-2">
						<form @submit="addProduct" enctype="multipart/form-data">
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
								<input type="file" ref="avatar" @change="uploadAvatar">
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
							@click="updateProduct">
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
							@click="deleteProduct">
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
	name: 'Products',
	data () {
		return {
			newProduct: {
				name: null,
				avatar: null,
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
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted () {
    	this.getProducts();
    },
    methods: {
        getProducts() {
            this.$store.dispatch('getProducts');
        },
        selectProduct(product) {
        	this.productCurrent.id = product.id;
        	this.productCurrent.name = product.name;
        	this.productCurrent.type = product.type;
        	this.productCurrent.price = product.price;
        },
        addProduct(e) {
        	var formData = new FormData();
        	formData.append('name', this.newProduct.name);
        	formData.append('avatar', this.newProduct.avatar);
        	formData.append('type', this.newProduct.type);
        	formData.append('price', this.newProduct.price);
            this.$store.dispatch('addProduct', formData);
            e.preventDefault();
        	this.newProduct.name = null;
			this.newProduct.avatar = null;
			this.newProduct.type = "";
			this.newProduct.price = null;
        },
        updateProduct() {
            this.$store.dispatch('updateProduct', this.productCurrent);
        },
        deleteProduct() {
            this.$store.dispatch('deleteProduct', this.productCurrent.id);
        },
        uploadAvatar() {
        	this.newProduct.avatar = this.$refs.avatar.files[0];
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