<template>
	<div class="backTop">
		<img src="../../../assets/img/top.png" alt="">
	</div>
</template>

<script>
	export default {
		name:'BackTop',
	}
</script>

<style scoped="scoped">
	.backTop{
		position: fixed;
		bottom: 50px;
		right: 20px;
		z-index: 10;
	}
	.backTop img{
		width: 60px;
		height: 60px;
	}
</style>
