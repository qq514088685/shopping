<template>
	<div class="nav-bar-item" @click="itemClick">
		<div class="item-img" v-if="isActiveImg">
			<slot name="item-img"></slot>
		</div>
		<div class="item-img" v-else>
			<slot name="item-img-active"></slot>
		</div>
		<div class="item-text" :class="{active:isActive}">
			<slot name="item-text"></slot>
		</div>
	</div>

</template>

<script>
	export default {
		name:'NavBarItem',
		props:{
			path:{
				type:String
			}
		},
		methods:{
			itemClick () {
				if(this.$route.path===this.path){
					return
				}
				this.$router.push(this.path)
			}
		},
		computed:{
			isActive () {
				return this.$route.path===this.path
			},
			isActiveImg () {
				return this.$route.path!==this.path
			}
		}
	}
</script>

<style scoped="scoped">
	.active {
		color: #ff5777;
	}
	.nav-bar-item {
		flex: 1;
		text-align: center;
		line-height: 15px;
	}
	.item-text {
		font-size: 14px;
	}
	.nav-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 5px;
	}
</style>
