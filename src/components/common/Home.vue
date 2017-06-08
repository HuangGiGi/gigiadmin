<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-slidebar></v-slidebar>
		<div class="content">
			<transition name="move" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import vHeader from './header.vue'
	import vSlidebar from './slidebar.vue'
	export default {
		components:{
			vHeader,vSlidebar
		}
	}
</script>

<style scoped>
	
</style>
