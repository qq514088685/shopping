<template>
	<div>
		<div class="nav">
			<div class="left">
				<slot name="left"></slot>
			</div>
			<div class="center">
				<slot name="center"></slot>
			</div>
			<div class="right">
				<slot name="right"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'NavTop'
	}
</script>

<style scoped="scoped">
	.nav {
		width:100vw;
		height: 44px;
		text-align: center;
		line-height: 44px;
		font-size: 17px;
		background: #FF5777;
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		z-index: 999;
		box-shadow: 0 2px 3px rgba(100,100,100,.1);
	}
	.nav .left,.nav .right{
		flex: 1;
		height: 44px;
		font-size: 14px;
	}
	.nav .center{
		flex: 4;
	}
</style>
