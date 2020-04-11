<template>
	<div class="summation">
		<div class="bottom">
			<span class="checkbox" :class="{active:$store.getters.isCheck}">
				<img src="../../../assets/img/tick.svg" alt="" @click="allCheck($store.getters.isCheck)">
			</span>
			<span>全选</span>
			<span>合计: &yen; {{totalPrice}}</span>
			<span>去结算({{totalCount}})</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Summation',
		data(){
			return {
				
			}
		},
		methods:{
			allCheck(boo) {
				this.$store.commit('allCheck',boo)
			}
		},
		created(){
			
		},
		computed:{
			totalPrice(){
				let total=0
				let count=0
				this.$store.state.cart.forEach(item =>{
					if(item.checked){
						total += item.lowNowPrice * item.count
					}
				})
				return total.toFixed(2)
			},
			totalCount(){
				let count=0
				this.$store.state.cart.forEach(item =>{
					if(item.checked){
						count++
					}
				})
				return count
			}
		},
		// comments:{
			
		// }
	}
</script>

<style scoped="scoped">
	.bottom {
		width: 100vw;
		height: 40px;
		background-color: #eeeeee;
		position: fixed;
		bottom: 50px;
		left: 0;
		right: 0;
		display: flex;
		text-align: center;
		line-height: 40px;
	}
	.bottom span:first-child{
		flex: 1;
	}
	.bottom span:first-child img{
		width: 20px;
		height: 20px;
		border: 1px solid #999999;
		border-radius: 50%;
		margin-top: 8px;
	}
	.bottom span:nth-child(2){
		flex: 1;
	}
	.bottom span:nth-child(3){
		flex:5;
	}
	.bottom span:last-child{
		flex: 3;
		background-color: #fe5200;
		color: white;
		display: inline-block;
	}
	.active img{
		background-color: #FF5777;
	}
</style>
