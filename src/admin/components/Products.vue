<template>
	<div class="admin-page">
		<h2 class="title text-left py-3">Products</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-4">
				<div class="card-admin pb-4">
					<div class="card-title text-left">Nuevo producto</div>
					<div class="px-4">
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
							<button type="submit" class="btn btn-admin mt-4 w-75">Enviar</button>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="card-admin pb-3">
					<div class="card-title text-left">Productos</div>
					<div class="px-4">
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
								<tr>
									<td>Margarita</td>
									<td>Pizza</td>
									<td>10,50$</td>
									<td>
										<button class="btn p-0" data-toggle="modal" data-target="#modalEdit">
											<i class="fas fa-edit mx-1"></i>
										</button>
										<button class="btn p-0" data-toggle="modal" data-target="#modalDelete">
											<i class="fas fa-trash mx-1"></i>
										</button>
									</td>
								</tr>
								<tr>
									<td>Cola 2L</td>
									<td>Bebida</td>
									<td>10,50$</td>
									<td>
										<button class="btn p-0" data-toggle="modal" data-target="#modalEdit">
											<i class="fas fa-edit mx-1"></i>
										</button>
										<button class="btn p-0" data-toggle="modal" data-target="#modalDelete">
											<i class="fas fa-trash mx-1"></i>
										</button>
									</td>
								</tr>
								<tr>
									<td>Nachos</td>
									<td>Complemento</td>
									<td>10,50$</td>
									<td>
										<button class="btn p-0" data-toggle="modal" data-target="#modalEdit">
											<i class="fas fa-edit mx-1"></i>
										</button>
										<button class="btn p-0" data-toggle="modal" data-target="#modalDelete">
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
						<h5 class="modal-title">Eliminar producto</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						¿Desea eliminar este producto?
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-primary">Guardar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

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