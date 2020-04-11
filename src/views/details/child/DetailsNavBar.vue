<template>
	<div class="details-nav-bar">
		<div class="left">
			<div>
				<div class="service"></div>
				<span>客服</span>
			</div>
			<div>
				<div class="store"></div>
				<span>店铺</span>
			</div>
			<div @click="collect">
				<div class="collect" :class="{active:flag}"></div>
				<span>收藏</span>
			</div>
		</div>
		<div class="right">
			<div class="addCart" @click="addCart">加入购物车</div>
			<div class="buyNow">立即购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailsNavBar',
		data (){
			return {
				flag:false
			}
		},
		methods:{
			collect() {
				this.flag=!this.flag
			},
			addCart() {
				this.$emit("addCart")
			}
		}
	}
</script>

<style scoped="scoped">
	.details-nav-bar{
		width: 100vw;
		height: 50px;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		display: flex;
	}
	.details-nav-bar .left{
		flex: 3;
		display: flex;
	}
	.details-nav-bar .left>div{
		flex: 1;
		text-align: center;
		font-size: 14px;
	}
	.details-nav-bar .left .service{
		width: 22px;
		height: 22px;
		margin: auto;
		margin-top: 5px;
		background: url(../../../assets/img/detail_bottom.png);
		background-repeat: no-repeat;
		background-size: 22px 150px;
		background-position: 0 -53px;
		
	}
	.details-nav-bar .left .store{
		width: 22px;
		height: 22px;
		margin: auto;
		margin-top: 5px;
		background: url(../../../assets/img/detail_bottom.png);
		background-repeat: no-repeat;
		background-size: 22px 150px;
		background-position: 0 -98px;
	}
	.details-nav-bar .left .collect{
		width: 22px;
		height: 22px;
		margin: auto;
		margin-top: 5px;
		background: url(../../../assets/img/detail_bottom.png);
		background-repeat: no-repeat;
		background-size: 22px 150px;
		background-position: 0 1px;
	}
	.details-nav-bar .right{
		flex: 4;
		display: flex;
		font-size: 16px;
		text-align: center;
		color: white;
	}
	.details-nav-bar .right .addCart{
		flex: 1;
		height: 32px;
		background: #FF8A00;
		margin: 9px 0 0 10px;
		line-height: 32px;
		border-radius: 16px 0 0 16px;
	}
	.details-nav-bar .right .buyNow{
		flex: 1;
		height: 32px;
		background: #FF4400;
		margin: 9px 10px 0 0;
		line-height: 32px;
		border-radius: 0 16px 16px 0;
	}
	.active{
		background-position: 0 -27px !important;
	}
</style>
