<template>
	<div class="w-10 position-absolute sidebar">
		<div class="nav flex-column" aria-orientation="vertical">
			<router-link tag="a" class="nav-link pt-3" to="/admin/">
				<i class="fas fa-home"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/products">
				<i class="fas fa-pizza-slice"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/">
				<i class="fas fa-home"></i>
			</router-link>
			<router-link tag="a" class="nav-link pt-3" to="/admin/">
				<i class="fas fa-search-dollar"></i>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
	.sidebar{
		background-color: #28b0a6;
		box-shadow: 0px 5px 10px 3px rgba(158, 155, 155, .4);
		min-height: 100vh;
		width: auto;
	}
	.sidebar .nav-link{
		color: #227669;
		font-size: 1.3rem;
		border-bottom: 1px solid rgba(26, 152, 133, 0.5);
	}
	.sidebar .nav-link:focus,
	.sidebar .nav-link:hover{
		color: #f5f5f5;
	}
</style>