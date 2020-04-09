<template>
	<div class="commodityList">
		<div v-for="(item,index) in commodityList" class="item">
			<img :src="item.show.img" alt="" @load='imgLoad'>
			<div class="item-text">
				<p class="title">{{item.title}}</p>
				<span class="price">&yen; {{item.price}} </span>
				<span class="cfav">{{item.cfav | formatcfav}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeCommodity',
		props:{
			commodityList:{
				type:Array,
				default(){
					return []
				}
			},
			BScroll:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imgLoad(){
				this.BScroll.refresh()
			}
		},
		filters:{
			formatcfav(val){
				if(val > 10000){
					return (val/10000).toFixed(2)+'w'
				}else{
					return val
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.commodityList{
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.commodityList .item{
		width: 44%;
		position: relative;
		box-shadow: 0px 0px 5px rgba(0,0,0,.2);
/* 		box-sizing: border-box; */
		padding: 5px;
		margin: 5px 0;
	}
	.commodityList .item img{
		width: 100%;
		margin-bottom: 40px;
	}
	.commodityList .item .item-text{
		width: 100%;
		position: absolute;
		bottom: 5px;
		text-align: center;
	}
	.commodityList .item .item-text .title{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px;
		color: #333;
	}
	.commodityList .item .item-text .price{
		font-size: 14px;
		color: #FF5777;
		padding-right: 5px;
	}
	.commodityList .item .item-text .cfav{
		font-size: 13px;
		color: #666;
	}
	.commodityList .item .item-text .cfav:before{
		content: '';
		display: inline-block;
		width: 14px;
		height: 15px;
		background-image: url(../../../assets/img/collect.svg);
		background-size: 100%;
		background-position: 0 1px;
	}
</style>
