<template>
	<div>
		<div class="row">
			<div class="col-12 col-md-8 sale-content">
				<p class="title">¡Conoce nuestras últimas ofertas!</p>
				<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="d-block w-100" src="/assets/banner.jpg" alt="First slide">
							<div class="carousel-caption pb-3 pb-md-4 text-left">
								<a class="btn btn-primary px-4" href="#">¡Ordena ya!</a>
							</div>
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="/assets/banner.jpg" alt="Second slide">
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
			<div class="col-12 col-md-4 p-3 my-auto">
				<div class="login-box box my-4 mx-0 mx-md-4">
					<p class="title p-3">Inicio de sesión</p>
					<form class="p-3">
						<div class="form-group">
							<input type="email" class="form-control" placeholder="Ingrese email">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Ingrese contraseña">
						</div>
						<p><button type="submit" class="btn btn-primary w-75">Iniciar sesión</button></p>
					</form>
				</div>
				<div class="register-box box my-4 mx-0 mx-md-4">
					<p class="title p-3">¿No estás registrado?</p>
					<div class="p-3">
						<p><a href="#" class="btn btn-primary w-75">Registrarme</a></p>
						<p><a href="#" class="btn btn-primary w-75">Pedido sin registar</a></p>
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
	.box {
		background-color: #FFF;
		border-radius: 5px;
		box-shadow: 0px 2px 20px -3px rgba(158, 155, 155, .4);
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
		background-color: #ba0811;
	}
	.register-box .btn{
		background-color: #ffc50c;
	}
	.login-box .title{
		background-color: #ba0811;
		background-image: url(/assets/bg-pizzas.png);
	}
	.register-box .title{
		background-color: #ffc50c;
		background-image: url(/assets/bg-pizzas.png);
	}
	.sale-content .title{
		font-size: 2rem;
		font-weight: 600;
	}
	.carousel-caption {
		bottom: 0px;
		left: 5%;
	}
	.carousel-caption .btn{
		background-color: #FFF;
		border: 2px solid #FFF;
		color: #ba0811;
		font-size: 1.1rem;
		font-weight: 500;
	}
	.carousel-caption .btn:hover,
	.carousel-caption .btn:focus{
		background-color: transparent;
		border: 2px solid #FFF;
		color: #FFF;
	}
</style>
