<template>
	<div class="control">
		<div v-for="(item,index) in control" class="controlList" @click="controlselect(index)" :key='index'>
			<span :class="{active:index==activeIndex}">{{item}}</span>
		</div>
	</div>
</template>

<script>
	const O = {
		activeIndex:0
	}
	export default {
		name:'HomeControl',
		props:{
			control:{
				type:Array,
				default() {
					return []
				}
			}
		},
		methods:{
			controlselect(index){
				this.activeIndex=index
				this.$emit('controlClick',index)
			}
		},
		data(){
			return O
		}
		
	}
</script>

<style scoped="scoped">
	.control {
		width: 100vw;
		height: 40px;
		display: flex;
		text-align: center;
		line-height: 40px;
		background: white;
	}
	.control .controlList{
		flex: 1;
	}
	.control .controlList span{
		padding: 5px 7px;
	}
	.active{
		color: #FF5777;
		border-bottom: 3px solid #FF5777;
	}
</style>
