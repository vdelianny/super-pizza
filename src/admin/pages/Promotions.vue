<template>
<!-- eslint-disable -->
	<div class="admin-page">
		<h2 class="title text-left py-3">Promociones</h2>
		<div class="row page-body justify-content-md-center mt-5">
			<div class="col-12 col-md-4">
				<div class="card-admin">
					<div class="card-title mb-0 text-left">Nueva promoción</div>
					<div class="px-4 card-body pt-2">
						<form @submit="addPromotion" enctype="multipart/form-data">
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									v-model="newPromotion.name"
									placeholder="Título">
							</div>
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									v-model="newPromotion.description"
									placeholder="Descripción">
							</div>
							<div class="form-group">
								<input type="file" ref="avatar" @change="uploadAvatar">
							</div>
							<div class="form-group">
								<input
									type="number"
									class="form-control"
									v-model="newPromotion.price"
									placeholder="Precio de la promoción">
							</div>
							<button type="submit" class="btn btn-admin mt-4 w-75">Enviar</button>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="card-admin">
					<div class="card-title mb-0 text-left">Promociones</div>
					<div class="px-4 card-body pt-2">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Nombre</th>
									<th scope="col">Descripción</th>
									<th scope="col">Precio</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="promotion in promotions">
									<td>{{promotion.name}}</td>
									<td>{{promotion.description}}</td>
									<td>{{promotion.price}}</td>
									<td>
										<button
											class="btn p-0"
											data-toggle="modal"
											data-target="#modalEdit"
											@click="selectPromotion(promotion)">
											<i class="fas fa-edit mx-1"></i>
										</button>
										<button
											class="btn p-0"
											data-toggle="modal"
											data-target="#modalDelete"
											@click="selectPromotion(promotion)">
											<i class="fas fa-trash mx-1"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade modal-admin" id="modalEdit" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Editar promoción</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body px-4">
						<form>
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									v-model="promotionCurrent.name"
									placeholder="Título">
							</div>
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									v-model="promotionCurrent.description"
									placeholder="Descripción">
							</div>							
							<div class="form-group">
								<input
									type="number"
									class="form-control"
									v-model="promotionCurrent.price"
									placeholder="Precio de la promoción">
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							class="btn btn-primary"
							data-dismiss="modal"
							@click="updatePromotion">
							Guardar
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade modal-admin" id="modalDelete" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Eliminar promoción</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						¿Desea eliminar la promoción: {{promotionCurrent.name}}?
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
						<button
							type="button"
							class="btn btn-primary"
							data-dismiss="modal"
							@click="deletePromotion">
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	name: 'Promotions',
	data () {
		return {
			newPromotion: {
				name: null,
				avatar: null,
				description: null,
				price: null
			},
			promotionCurrent: {
				id: null,
				name: null,
				description: null,
				price: null
			}
		}
	},
    computed: {
        promotions() {
            return this.$store.state.promotions;
        }
    },
    mounted () {
    	this.getPromotions();
    },
    methods: {
        getPromotions() {
            this.$store.dispatch('getPromotions');
        },
        selectPromotion(promotion) {
        	this.promotionCurrent.id = promotion.id;
        	this.promotionCurrent.name = promotion.name;
        	this.promotionCurrent.description = promotion.description;
        	this.promotionCurrent.price = promotion.price;
        },
        addPromotion(e) {
        	var formData = new FormData();
        	formData.append('name', this.newPromotion.name);
        	formData.append('avatar', this.newPromotion.avatar);
        	formData.append('description', this.newPromotion.description);
        	formData.append('price', this.newPromotion.price);

            this.$store.dispatch('addPromotion', formData);
            e.preventDefault();
        	this.newPromotion.name = null;
			this.newPromotion.avatar = null;
			this.newPromotion.description = "";
			this.newPromotion.price = null;
        },
        updatePromotion() {
            this.$store.dispatch('updatePromotion', this.promotionCurrent);
        },
        deletePromotion() {
            this.$store.dispatch('deletePromotion', this.promotionCurrent.id);
        },
        uploadAvatar() {
        	this.newPromotion.avatar = this.$refs.avatar.files[0];
        }
    }
}
</script>
<style scoped>
	.table{
		color: #747474;
	}
	.table thead th{
		border-top: none;
	}
	.table .btn{
		color: #28b0a6;
	}
	.table .btn:hover{
		color: #227669;
	}

</style>