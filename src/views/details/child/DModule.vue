<template>
	<div class="d-module">
		<table class="paramsRule">
			<tr v-for="(item,index) in params.rule">
				<td v-for="(item1,index) in item">{{item1}}</td>
			</tr>
		</table>
		<table class="paramsInfo">
			<tr v-for="(item,index) in params.info">
				<td >{{item.key}}:</td>
				<td class="val">{{item.value}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:'DModule',
		props:{
			params:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.d-module {
		padding: 10px 10px;
		border-bottom: 1px dashed #969799;
	}
	.d-module .paramsRule{
		width: 100%;
		line-height: 40px;
		font-size: 14px;
	}
	.d-module .paramsRule td{
		margin: 5px 5px;
		border-bottom: 1px solid #999999;
	}
	.d-module .paramsInfo{
		width: 100%;
		line-height: 40px;
		font-size: 14px;
	}
	.d-module .paramsInfo td{
		margin: 5px 5px;
		border-bottom: 1px solid #999999;
	}
	.d-module .paramsInfo .val{
		color: #FF5777;
		width: 80%;
	}
	
</style>
