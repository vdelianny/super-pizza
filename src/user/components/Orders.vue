<template>
	<div class="order-content row">
		<div class="form-shop col-md-7">
			<div class="text-left title-form">
				<h2>SuperPizza</h2>
			</div>
			<form>
				<div class="text-left subtitle">
					<label>Datos personales</label>
				</div>
				<div class="form-row">
					<div class="form-group col">
						<input type="text" class="form-control" placeholder="Nombre">
					</div>
					<div class="form-group col">
						<input type="text" class="form-control" placeholder="Apellido">
					</div>
				</div>
				<div class="text-left subtitle">
					<label>Dirección de compra</label>
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
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Dirección">
				</div>
				<div class="text-left subtitle">
					<label>Datos bancarios</label>
				</div>
				<button type="submit" class="btn btn-primary">Continuar</button>
			</form>
		</div>
		<div class="details-shop text-left col-md-5">
			<table class="table">
				<tbody>
					<tr>
						<td>1 Pizza Margarita</td>
						<td class="text-right">8,05$</td>
					</tr>
					<tr>
						<td>1 Pizza Peperonni</td>
						<td class="text-right">10,05$</td>
					</tr>
					<tr>
						<td>1 Pizza Vegetariana</td>
						<td class="text-right">11,00$</td>
					</tr>
				</tbody>
			</table>
			<hr>
			<table class="table">
				<tbody>
					<tr>
						<td>Total</td>
						<td class="text-right"><strong>30,00$</strong></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<style scoped>
	.table{
		color: #474747;
	}
	.table tbody{
		font-size: .9rem;
	}
	.table tbody td{
		border-top: none;
		padding: .4rem;
		vertical-align: middle;
	}
</style>