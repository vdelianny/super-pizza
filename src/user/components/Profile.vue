<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" id="points-tab" data-toggle="tab" href="#points" role="tab" aria-controls="points" aria-selected="true">
					Puntos
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="password-tab" data-toggle="tab" href="#password" role="tab" aria-controls="password" aria-selected="true">
					Cambio de contraseña
				</a>
			</li>
		</ul>
		<div class="tab-content mt-5" id="myTabContent">
  			<div class="tab-pane fade show active" id="points" role="tabpanel" aria-labelledby="points-tab">
  				<div class="row justify-content-md-center">
  					<div class="col-12 col-md-5">
						<CardPoints/>
  					</div>
  				</div>
  			</div>
  			<div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
  			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
import CardPoints from '../partials/CardPoints.vue'
export default {
	name: 'Profile',
	components: {
		CardPoints
	},
    methods: {
	    
    }
}
</script>
<style scoped>
	
</style>