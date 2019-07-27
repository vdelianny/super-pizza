<template>
<!-- eslint-disable -->
	<div class="container py-5">
		<div class="custom-pizza mt-0 mt-md-5">
			<div class="ingredients p-3 p-md-5 text-left">
				<div class="text-center mb-4">
					<img width="auto" height="auto" src="/assets/message.png">
				</div>
				<p class="title mb-3 text-center">Selecciona los ingredientes que desees añadir.</p>
				<form action="">
					<div class="form-row">
						<div v-for="ingredient in ingredients" class="col-6 col-md-3 p-2">
							<div class="form-check">
								<label class="form-check-label ml-1">
									<input class="form-check-input" type="radio" :value="ingredient.id">
									<span>{{ingredient.name}}</span>
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
/* eslint-disable */
export default {
	name: 'Custome',
	computed: {
        ingredients() {
            return this.$store.state.ingredients;
        }
    },
    mounted () {
    	this.getIngredients();
    },
    methods: {
        getIngredients() {
            this.$store.dispatch('getIngredients');
        }
    }
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
