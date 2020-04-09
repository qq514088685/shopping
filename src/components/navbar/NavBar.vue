<template>
	<div class="nav-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:"NavBar",
		props:{
			
		}
	}
</script>

<style scoped="scoped">
	.nav-bar{
		width: 100vw;
		height: 50px;
		display: flex;
		background: #F2F2F2;
		box-shadow: 0 -2px 2px rgba(100,100,100,.2);
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
