<template>
	<div class="admin-page">
		<h2 class="title text-left py-3">Pagos realizados</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-8">
				<div class="card-admin pb-3">
					<div class="card-title text-left">Pagos</div>
					<div class="px-4">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Cliente</th>
									<th scope="col">Fecha</th>
									<th scope="col">Monto</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Jhon Doe</td>
									<td>05/04/2019</td>
									<td>30,50$</td>
								</tr>
								<tr>
									<td>Jhon Doe</td>
									<td>05/04/2019</td>
									<td>10,50$</td>
								</tr>
								<tr>
									<td>Jhon Doe</td>
									<td>05/04/2019</td>
									<td>5,50$</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade modal-admin" id="modalChangeStatus" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Cambiar status del pedido</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body px-4">
						<form>
							<div class="form-group">
								<select class="form-control">
									<option disabled hidden selected>Status del pedido</option>
									<option value="pizza">Pendiente</option>
									<option value="drink">En camino</option>
									<option value="complement">Entregado</option>
								</select>
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
		<div class="modal fade modal-admin" id="modalDetails" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Detalles del pedido</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body text-left px-4">
						<p>
							<i class="far fa-user-circle mr-2"></i>
							<strong> Cliente:</strong> Jhon Doe
						</p>
						<p>
							<i class="fas fa-street-view mr-2"></i>
							<strong> Dirección:</strong> Av. de Concha Espina, 1, 28036 Madrid, España
						</p>
						<p>
							<i class="fas fa-utensils mr-2"></i>
							<strong> Pedido:</strong>
						</p>
						<table class="table table-striped text-center">
							<thead>
								<tr>
									<th scope="col">Cantidad</th>
									<th scope="col">Producto</th>
									<th scope="col">Precio</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Pizza Margarita</td>
									<td>10,50$</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Pizza Hawaiana</td>
									<td>10,50$</td>
								</tr>
							</tbody>
						</table>
						<p>
							<i class="fas fa-dollar-sign mr-2"></i>
							<strong> Total:</strong> 21,00$
						</p>
						<p>
							<i class="far fa-smile-beam mr-2"></i>
							<strong> Status:</strong> En camino
						</p>
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
	.modal-admin .modal-content i{
		color: #28b0a6;
	}
</style>