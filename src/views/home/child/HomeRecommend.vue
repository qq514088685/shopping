<template>
	<div class="recommend">
		<div v-for='(item,index) in recommendList' class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
			recommendList:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.recommend{
		width: 100vw;
		display: flex;
		border-bottom: 8px solid rgba(100,100,100,.1);
	}
	.recommend .recommend-item {
		width: 25%;
		flex: 1;
		text-align: center;
		
	}
	.recommend .recommend-item img{
		width: 90%;
		padding: 5px 5px;
	}
	.recommend .recommend-item div{
		font-size: 14px;
		color: #666666;
	}
	
</style>
