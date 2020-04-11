<template>
	<div>
		<div class="product" v-for="(item,index) in cart" :key='item.id'>
			<div class="checkbox" :class="{active:item.checked}">
				<img src="../../../assets/img/tick.svg" alt="" @click="isCheck(item.id)">
			</div>
			<div class="image">
				<img :src="item.cover" alt="">
			</div>
			<div class="message">
				<h4>{{item.title}}</h4>
				<p>{{item.desc}}</p>
				<div class="price">
					<span>&yen; {{item.lowNowPrice}}</span>
					<span>x{{item.count}}</span>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'Product',
		data() {
			return {
				cart:[],
			}
		},
		created(){
			this.cart = this.$store.state.cart
		},
		methods:{
			isCheck(id) {
				this.$store.commit('changeCheck',id)
			}
		}
	}
</script>

<style scoped="scoped">
	.product{
		height: 100px;
		display: flex;
		padding: 5px 5px;
		margin:5px 5px 5px 5px;
		border: 0.5px solid #999999;
		box-shadow: 1px 1px 5px #999999;
	}
	.product .checkbox{
		width: 29px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.product .checkbox img{
		width: 20px;
		height: 20px;
		border: 1px solid #999;
		border-radius: 50%;
	}
	.product .image {
		width: 90px;
	}
	.product .image img{
		width:100%;
		height: 100%;
		border-radius: 5px;
	}
	.product .message {
		width: 247px;
		padding-left: 10px;
		line-height: 35px;
	}
	.product .message h4{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		font-size: 20px;
		font-weight: normal;
	}
	.product .message p{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		font-size: 16px;
		color: #666666;
	}
	.product .message .price{
		display: flex;
		justify-content: space-between;
	}
	.product .message .price span:first-child{
		font-size: 16px;
		color: red;
	}
	.active img{
		background-color: #FF5777;
	}
</style>
