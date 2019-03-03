<template>
	<div class="order-box">
		<div class="orders table-responsive mt-5">
			<table class="table table-bordered">
				<thead class="bg-dark">
					<tr>
						<th scope="col">Producto</th>
						<th scope="col">Precio</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Total</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Pizza Margarita</strong></td>
						<td>10,53$</td>
						<td>1</td>
						<td><strong>10,53$</strong></td>
						<td>
							<button class="btn" data-toggle="tooltip" data-placement="top" title="Editar">
								<i class="far fa-edit"></i>
							</button>
							<button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar">
								<i class="far fa-trash-alt"></i>
							</button>
						</td>
					</tr>
					<tr>
						<td><strong>Pizza Hawaiana</strong></td>
						<td>10,53$</td>
						<td>2</td>
						<td><strong>21,06$</strong></td>
						<td>
							<button class="btn" data-toggle="tooltip" data-placement="top" title="Editar">
								<i class="far fa-edit"></i>
							</button>
							<button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar">
								<i class="far fa-trash-alt"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.table{
		background-color: #FFF;
		box-shadow: 0px 2px 20px -3px rgba(158, 155, 155, .4);
		color: #474747;
	}
	.table thead{
		background-image: url(/assets/bg-pizzas.png);
		color: #f7f7f7;
	}
	.table thead tr th{
		font-size: 1.25rem;
		font-weight: 300;
		border: .5px solid #474747 !important;
	}
	.table tbody{
		font-size: .9rem;
		color: #474747;
	}
	.table tbody .btn{
		color: #747474;
	}
	.table tbody td{
		padding: .4rem;
		vertical-align: middle;
	}
</style>