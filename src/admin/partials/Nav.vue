<template>
    <div class="navbar navbar-expand-lg w-100 py-0 px-5" v-if="isAuthenticatedAdmin">
        <div class="navbar-nav ml-auto">
            <li class="mx-2 my-auto nav-item">
                <div class="nav-link p-0">
                    <i class="far fa-user-circle"></i>
                </div>
            </li>
            <li class="mx-2 nav-item">
                <div class="nav-link p-0">
                    <p class="mb-0 title">SuperPizzas</p>
                    <span class="subtitle">Administrador</span>
                </div>
            </li>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
/*
"admin", "admin@sp.com", "0000"
*/
export default {
    name: 'NavAdmin',
    computed: {
        isAuthenticatedAdmin() {
            return this.$store.getters.isAuthenticatedAdmin;
        }
    }
}
</script>
<style scoped>
    .navbar{
        height: 60px;
        box-shadow: 0px 1px 10px 0px rgba(158, 155, 155, .3);
    }
    .navbar .title{
        color: #28b0a6;
        font-weight: 500;
    }
    .navbar .subtitle{
        color: #ccc;
        font-size: .95rem;
    }
    .navbar i{
        font-size: 2.3rem;
        color: #28b0a6;
    }
</style>