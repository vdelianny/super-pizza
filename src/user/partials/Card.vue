<template>
	<div>
		<div class="card text-center p-3 mb-5">
			<img width="100%" src="/assets/pizza.png" alt="">
			<p class="price mb-1 mt-2">10,53$</p>
			<p class="name">Margarita</p>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Pedir
			</button>
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
		box-shadow: 0px 0px 15px 0px rgba(158, 155, 155, .2);
	}
	.card .btn{
		background-color: #ba0811;
		border-radius: 0px;
		border-color: #ba0811;
	}
	.card .btn:hover,
	.card .btn:focus{
		background-color: #FFF;
		color: #ba0811;
	}
	.card .price{
		color: #ba0811;
		font-size: 1.5rem;
		font-weight: 600;
	}
	.card .name{
		font-size: .9rem;
		font-weight: 400;
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
</style>
