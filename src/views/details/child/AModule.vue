<template>
	<div class="a-module">
		<h3 class="title">{{productInfo.title}}</h3>
		<p class="price">
			<span>{{productInfo.price}}</span>
			<span>{{productInfo.oldPrice}}</span>
			<span>{{productInfo.discountDesc}}</span>
		</p>
		<p class="columns">
			<span v-for='(item,index) in productInfo.columns'>{{item}}</span>
		</p>
		<div class="services">
			<p v-for='(item,index) in productInfo.services'>
				<img :src="item.icon" alt="">
				<span >{{item.name}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AModule',
		props:{
			productInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.a-module{
		width: 100vw;
		margin-top: 10px;
	}
	.a-module .title{
		font-size: 18px;
		text-indent: 1em;
		font-weight: bold;
		color: #333333;
		margin: 0 5px;
	}
	.a-module .price{
		line-height: 50px;
		text-indent: 1em;
	}
	.a-module .price span:first-child{
		color: #FF5777;
		font-size: 16px;
	}
	.a-module .price span:nth-child(2){
		color: #999999;
		font-size: 14px;
		padding: 0 10px;
		text-decoration: line-through;
	}
	.a-module .price span:last-child{
		color: #FFFFFF;
		font-size: 14px;
		background: #FF5777;
		border-radius: 10%;
		padding: 1px;
	}
	.a-module .columns{
		display: flex;
		text-align: center;
		color: #999999;
		font-size: 13px;
		line-height: 30px;
		border-bottom: 1px dashed #969799;
		margin: 0 5px;
	}
	.a-module .columns span{
		flex: 1;
	}
	.a-module .services {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		line-height: 30px;
		font-size: 13px;
		color: #333333;
		border-bottom: 1px dashed #969799;
		margin: 0 5px;
	}
	.a-module .services p{
		 width: 33.33%;
	}
	.a-module .services p img{
		width: 14px;
		height: 14px;
	}
</style>
