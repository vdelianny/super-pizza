<template>
	<div>
		<nav class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
			<div class="container">
				<a class="navbar-brand" href="/">
					<img src="/assets/logo.png" alt="logo de superpizza" width="40px" height="auto">
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbar">
					<ul class="navbar-nav mr-auto">
						<div class="nav-item">
							<router-link tag="li" to="/">
								<a class="nav-link">Ofertas</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/pizzas">
								<a class="nav-link">Pizzas</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/">
								<a class="nav-link">Bebidas</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/">
								<a class="nav-link">Complementos</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/">
								<a class="nav-link">Rastrear pedido</a>
							</router-link>
						</div>
					</ul>
					<div class="navbar-nav my-2 my-lg-0">
						<div class="nav-item">
							<router-link tag="li" to="/">
								<a class="nav-link">Iniciar Sesión</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/">
								<a class="nav-link">Registrarme</a>
							</router-link>
						</div>
						<div class="nav-item">
							<router-link tag="li" to="/orders">
								<a class="nav-link" style="font-size: 1rem;">
									<i class="fas fa-shopping-cart"></i>
								</a>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
<style scoped>
	.navbar{
		background-image: url(/assets/bg-pizzas.png);
		border-bottom: 5px solid #ffc50c;
	}
	.navbar .nav-link{
		color: #f7f7f7;
		font-size: .9rem;
		font-weight: 500;
		text-transform: uppercase;
	}
</style>
