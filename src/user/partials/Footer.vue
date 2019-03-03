<template>
	<div class="footer pt-5 pb-3">
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-12 col-md-auto text-center">
					<img src="/assets/logo.png" alt="logo de superpizza" width="100px" height="auto">
				</div>
				<div class="col-12 col-md-auto text-center text-md-left">
					<p class="title">Productos</p>
					<ul class="p-0">
						<li><a href="#">Menús</a></li>
						<li><a href="#">Ofertas</a></li>
						<li><a href="#">Pizzas</a></li>
						<li><a href="#">Bebidas</a></li>
						<li><a href="#">Complementos</a></li>
					</ul>
				</div>
				<div class="col-12 col-md-auto text-center text-md-left">
					<p class="title">Ayuda</p>
					<ul class="p-0">
						<li><a href="#">Contacto</a></li>
						<li><a href="#">Cómo comprar</a></li>
						<li><a href="#">Cómo rastrear mi pedido</a></li>
					</ul>
				</div>
			</div>
			<hr>
			<p class="copyright"><strong>SuperPizza</strong> Derechos reservados</p>
		</div>
	</div>
</template>
<style scoped>
	.footer{
		border-top: 5px solid #ffc50c;
		background-color: #343a40;
		background-image: url(/assets/bg-pizzas.png);
		color: #f7f7f7;
	}
	.footer .copyright{
		font-weight: 300;
	}
	.footer .title{
		font-size: 1.2rem;
		font-weight: 300;
	}
	.footer li{
		list-style: none;
	}
	.footer li a{
		color: #F7f7f7;
		text-decoration: none;
	}
	hr{
		border-top: 1px solid rgba(299,299,299,.1);
	}
</style>
