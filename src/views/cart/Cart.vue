<template>
	<div class="Cart">
		<nav-top class="cart-nav-top">
			<div slot='center'>{{catrTitle}}</div>
		</nav-top>
		<div class="wrap" ref='wrap'>
			<div class="content">
				<product></product>
			</div>
		</div>
		<summation v-show='$store.state.cart.length'></summation>
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll'
	import NavTop from '../../components/navbar/NavTop.vue'
	import Product from './child/Product.vue'
	import Summation from './child/Summation.vue'
	export default {
		name:'Cart',
		components:{NavTop,Product,Summation},
		data() {
			return {
				BScroll:null,
				catrTitle:'购物车'
			}
		},
		mounted() {
			this.BScroll = new BetterScroll('.wrap',{
				click:true,
				pullUpLoad:true
			})
		},
		created(){
			if(this.$store.state.cart.length > 0){
				this.catrTitle += '('+this.$store.state.cart.length+')'
			}
		}
	}
</script>

<style scoped="scoped">
	.cart-nav-top {
		height: 44px;
		background: #FF5777;
		color: white;
	}
	.wrap{
		height: calc(100vh - 94px - 40px);
		overflow: hidden;
	}
</style>
