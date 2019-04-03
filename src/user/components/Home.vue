<template>
	<div>
		<!--Carousel section -->
		<div class="section-one py-5">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-8 sale-content">
						<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
								<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block w-100" src="/assets/p-ban.png" alt="First slide">
									<div class="carousel-caption pb-3 pb-md-4 text-left">
										<a class="btn btn-primary px-4" href="#">¡Ordena ya!</a>
									</div>
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="/assets/p-ban.png" alt="Second slide">
									<div class="carousel-caption pb-3 pb-md-4 text-left">
										<a class="btn btn-primary px-4" href="#">¡Ordena ya!</a>
									</div>
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
					<div class="col-12 col-md-4 pt-0 pb-3 px-3 my-auto">
						<div class="register-box box mb-4 mx-0 mx-md-4">
							<p class="title pt-4 mb-0">Inicio de sesión</p>
							<form class="p-4">
								<div class="form-group">
									<input type="email" class="form-control" placeholder="Ingrese email">
								</div>
								<div class="form-group">
									<input type="password" class="form-control" placeholder="Ingrese contraseña">
								</div>
								<div class="form-group text-left">
									<input type="checkbox">
									<span class="ml-2">Recordar sesión</span>
								</div>
								<div class="form-group text-left">
									<a href="#">Olvidé mi contraseña</a>
								</div>
								<p><button type="submit" class="btn btn-primary w-75">Iniciar sesión</button></p>
							</form>
							<p class="title pt-3 mb-0">¿No estás registrado?</p>
							<div class="p-4">
								<p><a href="#" class="btn btn-primary w-75">Registrarme</a></p>
								<p><a href="#" class="btn btn-primary w-75">Pedido sin registar</a></p>
							</div>
						</div>
						<!--
						<div class="login-box box my-4 mx-0 mx-md-4">
						</div>
						-->
					</div>
				</div>
			</div>
		</div>
		<div class="container py-5">
			<!--Grid section -->
			<div class="section-two mb-5">
				<h3 class="title">Pizzas a domicilio con SuperPizza</h3>
				<hr class="w-50 mx-auto">
				<div class="row mt-5">
					<div class="col-12 col-md-4">
						<img src="/assets/p-1.png" class="mb-3" width="100%">
						<h5>Conoce la nueva pizza especial</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora.
						</p>
					</div>
					<div class="col-12 col-md-4">
						<img src="/assets/p-2.png" class="mb-3" width="100%">
						<h5>Combo de pizza mediana y bebida</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis.
						</p>
					</div>
					<div class="col-12 col-md-4">
						<img src="/assets/p-3.png" class="mb-3" width="100%">
						<h5>Prueba nuestro pan de ajo ¡Gratis!</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati.
						</p>
					</div>
				</div>
			</div>
			<hr class="my-5">
			<!--description section -->
			<div class="section-three">
				<div class="row">
					<div class="col-12 col-md-8 part-left text-left">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, deserunt, eos. Ab similique minima maiores repudiandae ipsam sit placeat magnam officiis.
						</p>
						<h4 class="title mb-4">
							<img src="/assets/logo.png" alt="logo de superpizza" height="50px" width="auto">
							¿Por qué registrarte en SuperPizza?
						</h4>
						<div class="icons-box px-0 px-md-4 py-4">
							<div class="mt-2">
								<i class="fas fa-pizza-slice"></i>
								<span class="ml-2">Promociones y descuentos exclusivos</span>
							</div>
							<div class="mt-3">
								<i class="fas fa-shipping-fast"></i>
								<span class="ml-2">Seguimiento del estado de tu pedido</span>
							</div>
							<div class="mt-3">
								<i class="fas fa-money-check-alt"></i>
								<span class="ml-2">Pagos con tarjetas</span>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4">
						<div class="register-box box mb-4 mx-0 mx-md-4">
							<p class="title pt-4 mb-0">Registarme</p>
							<form class="p-4">
								<div class="form-group">
									<input type="email" class="form-control" placeholder="Ingrese email">
								</div>
								<div class="form-group">
									<input type="password" class="form-control" placeholder="Ingrese contraseña">
								</div>
								<div class="form-group">
									<input type="password" class="form-control" placeholder="Repita contraseña">
								</div>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Ingrese teléfono">
								</div>
								<div class="form-group text-left">
									<input type="checkbox">
									<span class="ml-2">He leído los <a href="#">términos y condiciones</a></span>
								</div>
								<p><button type="submit" class="btn btn-primary w-75">Iniciar sesión</button></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		props: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.section-one{
		background-image: url(/assets/bg-texture.jpg);
	}
	.box {
		background-color: #FFF;
		border-radius: 5px;
		box-shadow: 0px 2px 15px 0px rgba(158, 155, 155, .4);
	}
	.box .title{
		border-radius: 5px 5px 0 0;
		color: #FFF;
		font-weight: 500;
		text-transform: uppercase;
	}
	.box .btn{
		border: none;
		font-size: .95rem;
		text-transform: uppercase;
	}
	.login-box .btn{
		background-color: #f5be10;
	}
	.register-box .btn{
		background-color: #c12f36;
	}
	.register-box .title{
		color: #c12f36;
		font-weight: 400;
	}
	.sale-content .title{
		font-size: 2rem;
		font-weight: 600;
	}
	.carousel-caption {
		top: 0px;
		left: 5%;
	}
	.carousel-caption .btn{
		background-color: #FFF;
		border: 2px solid #FFF;
		color: #c12f36;
		font-size: 1.1rem;
		font-weight: 500;
	}
	.carousel-caption .btn:hover,
	.carousel-caption .btn:focus{
		background-color: transparent;
		border: 2px solid #FFF;
		color: #FFF;
	}
	/*
	.login-box .title{
		background-color: #f5be10;
		background-image: url(/assets/bg-pizzas.png);
	}
	.register-box .title{
		background-color: #c12f36;
		background-image: url(/assets/bg-pizzas.png);
	}
	*/
	.section-two, .section-three{
		color: #747474;
	}
	.section-two .title,
	.section-three .part-left .title{
		font-weight: 300;
	}
	.section-two h5{
		font-size: 1.05rem;
		font-weight: 400;
	}
	.section-two p{
		font-weight: 300;
	}
	.section-three .part-left .icons-box{
		width: fit-content;
		border-radius: 5px;
		box-shadow: 0px 2px 15px 0px rgba(158, 155, 155, .4);
	}
	.section-three .part-left .icons-box span{
		vertical-align: bottom;
		font-weight: 300;
		font-size: 1.2rem;
	}
	.section-three .part-left .icons-box i{
		font-size: 1.5rem;
		width: 35px;
	}
	@media (min-width: 768px) {
		.section-three{
			background-image: url(/assets/bg-pizza.png);
			background-repeat: no-repeat;
			background-position-x: center;
			background-size: 200px;
			background-position-y: bottom;
		}
	}
</style>
