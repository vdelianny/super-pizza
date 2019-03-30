<template>
	<div class="container py-5">
		<div class="order-content row">
			<div class="form-shop col-md-7 p-4">
				<h2 class="text-left title-form">Formulario de compra</h2>
				<form>
					<div class="text-left subtitle mb-2 mt-4">
						<label><i class="far fa-address-card"></i> Datos personales</label>
					</div>
					<div class="form-row">
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Nombre">
						</div>
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Apellido">
						</div>
					</div>
					<div class="text-left subtitle mb-2 mt-3">
						<label><i class="fas fa-map-pin"></i> Dirección de compra</label>
					</div>
					<div class="form-row">
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Teléfono">
						</div>
						<div class="form-group col">
							<select class="form-control">
								<option selected disabled>Ciudad</option>
								<option>Madrid</option>
								<option>Barcelona</option>
								<option>Sevilla</option>
								<option>Valencia</option>
							</select>
						</div>
						<div class="form-group col-12">
							<input type="text" class="form-control" placeholder="Dirección">
						</div>
					</div>
					<div class="text-left subtitle mb-2 mt-3">
						<label><i class="far fa-money-bill-alt"></i> Datos bancarios</label>
					</div>
					<div class="form-row">
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="Número de tarjeta">
						</div>
						<div class="form-group col">
							<input type="text" class="form-control" placeholder="CCV">
						</div>
					</div>
					<button type="submit" class="btn btn-primary w-75 mt-4">Continuar</button>
				</form>
			</div>
			<div class="details-shop text-left col-md-5 p-4">
				<table class="table">
					<tbody>
						<tr>
							<td width="50px">
								<img src="/assets/pizza-icon.png" width="auto" height="25px">
								<span class="cant">1</span>
							</td>
							<td>Pizza Margarita</td>
							<td><span>Grande</span></td>
							<td class="text-right">8,05$</td>
						</tr>
						<tr>
							<td width="50px">
								<img src="/assets/drink-icon.png" width="auto" height="25px">
								<span class="cant">2</span>
							</td>
							<td>Bebida</td>
							<td><span>Pequeño</span></td>
							<td class="text-right">10,05$</td>
						</tr>
						<tr>
							<td width="50px">
								<img src="/assets/aditional-icon.png" width="auto" height="25px">
								<span class="cant">3</span>
							</td>
							<td>Complemento</td>
							<td><span>Mediano</span></td>
							<td class="text-right">11,00$</td>
						</tr>
					</tbody>
				</table>
				<hr>
				<table class="table">
					<tbody>
						<tr style="font-size: 1.05rem">
							<td><strong>Total</strong></td>
							<td class="text-right"><strong>200,00$</strong></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.order-content{
		box-shadow: 0px 2px 20px -3px rgba(158, 155, 155, .4);
	}
	.form-shop i{
		color: #ba0811;
	}
	.form-shop .title-form{
		font-size: 1.5rem;
		font-weight: 300;
	}
	.form-shop .btn-primary{
		background-color: #ba0811;
		border-color: #ba0811;
	}
	.details-shop{
		background-color: #f5f5f5;
		box-shadow: inset 40px -20px 10px -38px rgba(158, 155, 155, 0.4);
	}
	.table{
		color: #474747;
	}
	.table tbody{
		font-size: .9rem;
	}
	.table tbody td{
		height: 50px;
	}
	.table tbody td{
		border-top: none;
		padding: .4rem;
		vertical-align: middle;
	}
	.table tbody td span{
		background: rgba(186, 8, 17, 0.8);
		border-radius: 50px;
		font-size: small;
		color: white;
		padding: 0 6px;
	}
	.table tbody td .cant{
		margin-top: -8px;
		margin-left: -8px;
		position: absolute;
	}
</style>