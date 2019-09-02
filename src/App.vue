<template>
	<div id="app">
		<div class="position-fixed w-100 h-100 wait-message" v-if="wait">
			<img src="/assets/logo.png" alt="logo de superpizza" width="100rem" height="auto">
		</div>
		<Nav v-if="!adminRoute()"/>
		<NavAdmin v-if="adminRoute()"/>
		<SidebarAdmin v-if="adminRoute()"/>
		<div class="body">
			<div class="msg-box position-absolute my-3">
				<MsgError />
				<MsgSuccess />
			</div>
			<router-view />
			<router-link tag="div" class="btn btn-primary btn-store py-2" to="/orders" v-if="!adminRoute() && existProducts()">
				<a class="nav-link p-0 shop-cart" style="font-size: 1.5rem;">
					<i class="fas fa-shopping-cart"></i>
					<span class="cant">{{quantityProduct()}}</span>
				</a>
			</router-link>
		</div>
		<Footer v-if="!adminRoute()"/>
	</div>
</template>
<script>
/* eslint-disable */

import Nav from './user/partials/Nav.vue'
import NavAdmin from './admin/partials/Nav.vue'
import SidebarAdmin from './admin/partials/Sidebar.vue'
import Footer from './user/partials/Footer.vue'
import MsgError from './user/partials/MsgError.vue'
import MsgSuccess from './user/partials/MsgSuccess.vue'

export default {
	name: 'app',
	props: ['router'],
	components: {
		Nav,
		NavAdmin,
		SidebarAdmin,
		Footer,
		MsgError,
		MsgSuccess,
	},
	computed: {
        wait() {
            return this.$store.state.wait;
        },
        products() {
            return this.$store.state.productsStore;
        }
    },
    methods: {
        adminRoute() {
        	if (this.router.currentRoute.path.search('/admin') == 0){
    			return true;
        	}
        	return false;
        },
        existProducts(){
        	return this.products.length > 0;
        },
        quantityProduct(){
        	return this.products.length;
        }
    }
}
</script>

<style>
	#app {
		/*background-color: #f5f5f566;*/
		color: #474747;
		font-family: 'Roboto';
		overflow-x: hidden;
		text-align: center;
	}
	.shop-cart span{
		background: rgba(186, 8, 17, 0.8);
		border-radius: 50px;
		font-size: small;
		color: white;
		padding: 0 6px;
	}
	.shop-cart .cant{
		margin-top: -8px;
		position: absolute;
	}
	.wait-message{
        align-items: center;
	    background: rgba(255, 255, 255, 0.8);
    	display: grid;
    	justify-content: center;
	    z-index: 10000;
	}
	.wait-message img{
	    animation: rotateMsg 3s infinite linear;
	}
	.msg-box{
		left: 10%;
	    width: 80%;
	    z-index: 1;
	}
	.body{
		min-height: calc(100vh - 60px);
	}
	.form-control{
		font-weight: 300;
		border: none;
		border-bottom: 1px solid rgba(204, 204, 204, 0.6);
		border-radius: 0px;
	}
	.form-control:focus{
		box-shadow: none;
		border-color: #9c9a9a;
	}
	select{
		background-image: url(/assets/chevron-down.png);
		background-position: 95% center;
		background-repeat: no-repeat;
		background-size: 18px;
		text-indent: 1px;
		text-overflow: '';
		-moz-appearance: none;
		-webkit-appearance: none;
	}

	.carousel-indicators li{
		border-radius: 50px;
		border: none;
		height: 12px;
		width: 12px;
	}
	.btn{
		border-radius: 0;
		color: #FFF;
	}
	.btn:focus,
	button:focus,
	a:focus{
		box-shadow: none;
		outline: none;
	}
	a:hover{
		text-decoration: none;
	}
	label{
		font-size: .96rem;
		font-weight: 300;
	}
	.form-row>.col, .form-row>[class*=col-] {
		padding-right: 10px;
		padding-left: 10px;
	}
	.w-45{
		width: 45%;
	}
	.w-10{
		width: 10%;
	}
	.admin-page{
		background-color: #eee;
		color: #747474;
		min-height: calc(100vh - 60px);
		padding: 0 8%;
	}
	.admin-page .title{
		font-size: 1.5rem;
		font-weight: 300;
	}
	.admin-page .card-admin{
		background-color: #FFF;
		box-shadow: 0px 1px 10px 0px rgba(158, 155, 155, .6);
	}

	.admin-page .card-admin .card-title{
		background-color: #28b0a6;
		color: #f7f7f7;
		padding: .5rem 2rem;
		font-size: 1.2rem;
		font-weight: 300;
	}
	.admin-page .card-admin .card-body{
		max-height: 450px;
		overflow-y: auto;
	}
	.admin-page .btn-admin{
		background-color: #28b0a6;
		border-color: #28b0a6;
		color: #f7f7f7;
	}
	.modal-admin .modal-content{
		border-radius: 0px;
		border: none;
	}
	.modal-admin .modal-header{
		background-color: #28b0a6;
		border-radius: 0px;
		color: #f7f7f7;
		font-weight: 400;
	}
	.modal-admin .modal-footer{
		border-top: none;
	}
	.modal-admin .modal-footer .btn-primary{
		background-color: #28b0a6;
		border-color: #28b0a6;
	}

	.message-success{
		background-color: #e9f9df;
		border: 2px solid #8fcd90;
		border-radius: 10px;
		color: #8fcd90;
		font-weight: 500;
	}

	/*original red: #ba0811;*/
	/*original yellow: #ffc50c;*/

	.btn-primary,
	.btn-primary:hover,
	.btn-primary:focus,
	.btn-primary:active{
		background-color: #c12f36;
		border-color: #c12f36;
	}
	.btn-secundary,
	.btn-secundary:hover,
	.btn-secundary:focus,
	.btn-secundary:active{
		background-color: #f5be10;
		border-color: #f5be10;
		color: #FFF;
	}

	.btn-store{
		background: #fff;
		border: #fff;
		border-radius: 50px;
		box-shadow: 0px 0px 10px 0px rgba(155, 155, 155, .6);
		position: fixed;
		right: 2rem;
		top: 80vh;
	}
	.btn-store:hover{
		background: #fff;
		border: #fff;
	}
	.btn-store a,
	.btn-store a:hover,
	.btn-store a:active,
	.btn-store a:focus{
		color: #343a40;
	}

	@media (min-width: 768px) {
		.w-xs-50{
			width: 50%;
		}
		.w-md-75{
			width: 75% !important;
		}
		.w-md-90{
			width: 90% !important;
		}
	}
	@keyframes rotateMsg {
	    0% {transform: rotate(-0deg);}
	    100% {transform: rotate(360deg);}
	}
</style>
