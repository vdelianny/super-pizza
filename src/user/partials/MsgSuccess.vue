<template>
<!-- eslint-disable -->
	<div v-if="showSuccess">
		<div class="alert alert-success mb-2" role="alert">
			<strong>{{msgSuccess}}</strong>
			<button type="button" class="close" @click="hiddenMsg">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	</div>
</template>
<script>		
/* eslint-disable */
export default {
	name: 'MsgSuccess',
    computed: {
        showSuccess() {
            return this.$store.state.messages.showSuccess;
        },
        msgSuccess() {
            return this.$store.state.messages.msgSuccess;
        }
    },
    methods: {
    	hiddenMsg(){
    		this.$store.commit('setShowSuccess', false);
    	}
    }
}
</script>
<style scoped>
	.alert{
	    opacity: 0.9;
	}
</style>