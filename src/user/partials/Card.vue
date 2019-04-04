<template>
	<div>
		<div class="card text-center py-3 mx-0 mx-md-2 my-0">
			<div class="information-product pr-4 py-3 text-right">
				<img width="auto" height="auto" src="/assets/pizza.png" class="rounded-circle position-absolute w-45 p-2">
				<p class="name mb-0">
					<button type="button" data-toggle="modal" data-target="#exampleModal">
						<i class="fas fa-plus-circle mr-2"></i>
						<span>Margarita</span>
					</button>
				</p>
				<p class="price my-0 w-50 ml-auto"><i>Salsa, queso, peperonni, pimiento, aceituna, cebolla.</i></p>
			</div>
		</div>

		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Pizza Margarita</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body text-left py-4 px-3 px-md-5">
						<form action="">
							<div class="form-group">
								<label for="exampleFormControlSelect1">Seleccione tamaño</label>
								<select class="form-control" id="exampleFormControlSelect1">
									<option>Pequeña</option>
									<option>Mediana</option>
									<option>Familiar</option>
								</select>
							</div>
							<div class="form-group">
								<label for="exampleFormControlSelect1">Cantidad</label>
								<input type="number" class="form-control" placeholder="Ingrese cantidad" id="exampleFormControlSelect1" min="1" max="10">
							</div>
							<div class="form-group text-center d-flex">
								<div class="w-50 px-2">
									<router-link tag="button" data-dismiss="modal" class="btn btn-secundary w-100" to="/custome">
										Personalizar
									</router-link>
								</div>
								<div class="w-50 px-2">
									<button type="button" class="btn btn-primary w-100">Continuar</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.card{
		border: none;
		background-color: transparent;
		/*box-shadow: 0px 0px 15px 0px rgba(158, 155, 155, .2);*/
	}
	.card .information-product{
		background: rgba(255, 255, 255, 0.8);
		border-radius: 40% 8px 8px 40%;
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
	}
	.card .information-product img{
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
		left: -2%;
		max-width: 220px;
		top: 3%;
	}
	.card .price{
		min-height: 4.5rem;
		font-size: .85rem;
		color: rgba(97, 92, 92, 0.7);
	}
	.card .name button{
		background-color: transparent;
		border: none;
		font-size: 1rem;
		font-weight: 600;
		color: #c12f36;
	}
	.card .name button span{
		color: #474747;
	}

	.modal .modal-header{
		color: #f7f7f7;
		/*border-bottom: 5px solid #f5be10;*/
		background-color: #343a40;
		background-image: url(/assets/bg-pizzas.png);
	}
	.modal .modal-header .close{
		color: #f7f7f7;
		text-shadow: none;
	}
	.modal .modal-body label{
		color: #747474;
		font-size: .9rem;
	}
	.modal .modal-body .form-group{
		margin-bottom: 1.5rem;
	}

	@media (max-width: 767px) {

	}

</style>
