<template>
	<div>
		<div class="card text-center py-3 mx-0 mx-md-2 my-3">
			<div class="information-product pr-4 py-3 text-right">
				<img width="auto" height="auto" src="/assets/pizza.png" class="rounded-circle position-absolute w-50 wd-md-100">
				<p class="name">
					<button type="button" data-toggle="modal" data-target="#exampleModal">
						<i class="fas fa-plus-circle"></i>
					</button>
					Margarita
				</p>
				<p class="price my-0"><span>Pequeña</span> 10,53$</p>
				<p class="price my-0"><span>Mediana</span> 10,53$</p>
				<p class="price my-0"><span>Familiar</span> 10,53$</p>
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
							<div class="form-group">
								<button type="button" class="btn btn-primary w-100">Continuar</button>
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
		box-shadow: 0px 0px 10px 5px rgba(158, 155, 155, .2);
	}
	.card .information-product img{
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 0px 10px 5px rgba(158, 155, 155, .2);
		left: -2%;
		max-width: 220px;
		top: 3%;
	}
	.card .price{
		font-size: .95rem;
		color: rgba(97, 92, 92, 0.7);
	}
	.card .name{
		font-size: 1rem;
		font-weight: 600;
		color: #474747;
	}
	.card .name button{
		background-color: transparent;
		border: none;
		color: #ba0811;
	}

	.modal .modal-header{
		color: #f7f7f7;
		border-bottom: 5px solid #ffc50c;
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
	.modal .modal-body .btn,
	.modal .modal-body .btn:hover,
	.modal .modal-body .btn:focus{
		background-color: #ba0811;
		border-radius: 0px;
		border-color: #ba0811;
	}

	@media (max-width: 767px) {

	}

</style>
