<template>
<!-- eslint-disable -->
	<div v-if="showError">
		<div class="alert alert-danger mb-2" role="alert">
			<strong>{{msgError}}</strong>
			<button type="button" class="close" @click="hiddenMsg">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	</div>
</template>
<script>		
/* eslint-disable */
export default {
	name: 'MsgError',
    computed: {
        showError() {
            return this.$store.state.messages.showError;
        },
        msgError() {
            return this.$store.state.messages.msgError;
        }
    },
    methods: {
    	hiddenMsg(){
    		this.$store.commit('setShowError', false);
    	}
    }
}
</script>
<style scoped>
	.alert{
	    opacity: 0.8;
	}
</style>