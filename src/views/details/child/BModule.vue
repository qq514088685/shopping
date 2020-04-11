<template>
	<div class="b-module">
		<div class="logo">
			<img :src="shop.logo" alt="">
			<span class="text">{{shop.name}}</span>
		</div>
		<div class="center">
			<div class="left">
				<div class="sells">
					<p>{{shop.sells | filtSells}}</p>
					<span>总销量</span>
				</div>
				<div class="goodsCount">
					<p>{{shop.goodsCount}}</p>
					<span>全部宝贝</span>
				</div>
			</div>
			<div class="right">
				<table class="score">
					<tr v-for="(item,index) in shop.score">
						<td>{{item.name}}</td>
						<td class="scoreColor" :class="{heightColor:item.isBetter}">{{item.score}}</td>
						<td class="scoreBack" :class="{heightBack:item.isBetter}">{{item.isBetter? '高' : '低'}}</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="shopUrl">
			<a :href="shop.shopUrl">进店逛逛</a>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'BModule',
		props:{
			shop:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			filtSells(val){
				if(val >= 10000){
					return (val/10000).toFixed(2) + 'w'
				}else{
					return val
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.b-module{
		width: 100vw;
	}
	.b-module .logo{
		margin: 10px 10px;
	}
	.b-module .logo img{
		width: 47px;
		height: 47px;
		border: 1px solid #666666;
		border-radius: 50%;
		vertical-align: middle;
	}
	.b-module .logo .text{
		padding-left: 10px;
		font-size: 14px;
		font-weight: bold;
		color: #333333;
	}
	.b-module .center{
		display: flex;
		margin: 20px 15px;
	}
	.b-module .center .left{
		flex: 1;
		display: flex;
		text-align: center;
		border-right: 1px solid #333333;
		box-sizing: border-box;
		margin: 10px 0;
	}
	.b-module .center .left div{
		flex: 1;
	}
	.b-module .center .left .sells p,.b-module .center .left .goodsCount p{
		font-size: 18px;
		color: #666666;
	}
	.b-module .center .left .sells span,.b-module .center .left .goodsCount span{
		font-size: 13px;
		color: #333333;
	}
	.b-module .center .right{
		flex: 1;
	}
	.b-module .center .right .score{
		font-size: 14px;
		text-align: center;
		color: #333333;
	}
	.b-module .center .right .score td{
		padding: 0 10px;
	}
	.scoreColor{
		color: #9acd23;
	}
	.scoreBack{
		background: #9ACD23;
		color: white;
		height: ;
	}
	.heightColor{
		color: red;
	}
	.heightBack{
		background: red;
	}
	.b-module .shopUrl{
		width: 100vw;
		height: 50px;
		border-bottom: 1px dashed #969799;
		text-align: center;
	}
	.b-module .shopUrl a{
		font-size: 16px;
		background: #f2f5f8;
		display: block;
		width: 150px;
		height: 35px;
		margin: auto;
		line-height: 35px;
		border-radius: 10px;
		
	}
</style>
