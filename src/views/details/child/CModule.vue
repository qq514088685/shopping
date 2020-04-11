<template>
	<div class="c-module">
		<div class="text">图片展示</div>
		<div class="showImg" v-for="(item,index) in showImg" @load='showImgLoad'>
			<img :src="item" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:'CModule',
		props:{
			showImg:{
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
			showImgLoad(){
				this.BScroll.refresh()
			}
		}
	}
</script>

<style scoped="scoped">
	.c-module {
		width: 100vw;
		border-bottom: 1px dashed #969799;
	}
	.c-module .text {
		text-align: center;
		line-height: 50px;
		font-size: 18px;
		font-weight: bold;
		color: #333333;
	}
	.c-module .showImg{
		width: 100vw;
	}
	.c-module .showImg img{
		width: 100%;
	}
</style>
