<template>
	<div class="container py-5">
		<div class="custom-pizza mt-5">
			<div class="ingredients p-5 text-left">
				<div class="text-center mb-4">
					<img width="auto" height="auto" src="/assets/message.png">
				</div>
				<p class="title mb-3 text-center">Selecciona los ingredientes que desees añadir.</p>
				<form action="">
					<div class="vegetals px-2 px-md-5">
						<p class="subtitle text-center mt-5 mb-0">Vegetales</p>
						<hr class="w-50 mb-5 mt-2">
						<div class="form-row justify-content-md-center">
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/pimiento.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Pimientos</span>
								</label>
							</div>
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/jalapeño.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Jalapeños</span>
								</label>
							</div>	
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/piña.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Piña</span>
								</label>
							</div>
						</div>
						<div class="form-row justify-content-md-center">
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/maiz.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Maíz</span>
								</label>
							</div>	
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/cebolla.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Cebolla</span>
								</label>
							</div>
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/tomate.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Tomate</span>
								</label>
							</div>	
						</div>
					</div>

					<div class="animals px-2 px-md-5">
						<p class="subtitle text-center mt-5 mb-0">Productos animales</p>
						<hr class="w-50 mb-5 mt-2">
						<div class="form-row justify-content-md-center">
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/pepperoni.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Pepperoni</span>
								</label>
							</div>
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/bacon.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Bacon</span>
								</label>
							</div>	
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/jamon.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Jamón</span>
								</label>
							</div>
						</div>
					</div>

					<div class="others px-2 px-md-5">
						<p class="subtitle text-center mt-5 mb-0">Otros</p>
						<hr class="w-50 mb-5 mt-2">
						<div class="form-row justify-content-md-center">
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/queso.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Queso extra</span>
								</label>
							</div>
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/champiñon.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Champiñones</span>
								</label>
							</div>	
							<div class="form-check col-12 col-md-3 p-2">
								<img src="/assets/ingredients/aceituna.png" class="element mr-4 p-1" width="40px">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" value="option1">
									<span>Aceitunas negras</span>
								</label>
							</div>
						</div>
					</div>
					<div class="text-center mt-5 pt-0 pt-md-4">
						<router-link tag="button" class="btn btn-primary w-50" to="/orders">
							Continuar
						</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Custome'
}
</script>
<style scoped>
	.custom-pizza{
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
	}
	.custom-pizza .pizza{
		background-color: #FFF;
		box-shadow: 0px 0px 10px 2px rgba(158, 155, 155, .2);
		margin-top: -4rem;
		max-width: 8rem;
	}
	.custom-pizza .ingredients img.element{
		background: #f7f7f7;
		border-radius: 5px;
		border: 1px solid #ebebeb;
	}
	.custom-pizza .ingredients .title{
		font-size: 1.3rem;
		font-weight: 300;
		color: #747474;
	}
	.custom-pizza .ingredients .subtitle{
		font-weight: 500;
	}
	.custom-pizza .ingredients hr{
		background-color: rgba(193, 47, 54, 0.3);
	}
</style>
