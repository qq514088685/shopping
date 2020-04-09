<template>
	<div>
		<!-- 头部 -->
		<nav-top>
			<div slot='center'>购物街</div>
		</nav-top>
		<!-- 吸顶栏 -->
		<home-control :control='control' @controlClick='controlClick' class='control1' v-show='controlIsShow'></home-control>
		<!-- 内容块 -->
		<div class="wrap" ref='wrap'>
			<div class="content">
				<!-- 轮播图 -->
				<home-swiper :bannerList='bannerList' @showLoad='showLoad'></home-swiper>
				<!-- 推荐栏 -->
				<home-recommend :recommendList='recommendList'></home-recommend>
				<!-- 流行栏 -->
				<home-pop></home-pop>
				<!-- 操纵栏 -->
				<home-control :control='control' @controlClick='controlClick' ref='control'></home-control>
				<!-- 商品栏 -->
				<home-commodity :commodityList='commodityList[controlType].List' :BScroll='BScroll'></home-commodity>
			</div>
		</div>
		<!-- 回顶部 -->
		<back-top @click.native='backTop' v-show='backTopIsShow'></back-top>

	</div>
</template>

<script>
	import BetterScroll from 'better-scroll'
	import NavTop from '../../components/navbar/NavTop.vue'
	import HomeSwiper from './child/HomeSwiper.vue'
	import HomeRecommend from './child/HomeRecommend.vue'
	import HomePop from './child/HomePop.vue'
	import HomeControl from './child/HomeControl.vue'
	import HomeCommodity from './child/HomeCommodity.vue'
	import BackTop from './child/BackTop.vue'
	export default {
		name:'Home',
		data() {
			return {
				bannerList:[],
				recommendList:[],
				control:['流行','新款','精选'],
				commodityList:{
					pop:{page:0,List:[]},
					new:{page:0,List:[]},
					sell:{page:0,List:[]}
				},
				controlType:'pop',
				BScroll:null,
				backTopIsShow:false,
				controlOffsetTop:0,
				controlIsShow:false
			}
		},
		components:{
			NavTop,
			HomeSwiper,
			HomeRecommend,
			HomePop,
			HomeControl,
			HomeCommodity,
			BackTop
		},
		created(){
			this.getBannerAndRecom()
			this.getControl('pop')
			this.getControl('new')
			this.getControl('sell')
		},
		mounted(){
			this.BScroll = new BetterScroll('.wrap',{
				click:true,
				pullUpLoad:true
			}),
			this.BScroll.on('pullingUp',() => {
				this.getControl(this.controlType)
			}),
			this.BScroll.on('scroll',(o) => {
				this.backTopIsShow = -o.y>1500
				this.controlIsShow = -o.y >= this.controlOffsetTop - 44
			})
		},
		methods:{
			getBannerAndRecom() {
				this.request({
					url:this.url.multidata,
					methods:'get',
				}).then(res => {
					this.bannerList = res.data.banner.list,
					this.recommendList = res.data.recommend.list
				})
			},
			getControl(type) {
				let page = ++this.commodityList[type].page
				this.request({
					url:this.url.controldata,
					methods:'get',
					params:{
						type:type,
						page:page
					}
				}).then(res => {
					let data = res.data.list
					data.forEach(item =>{
						this.commodityList[type].List.push(item)
					})
					this.BScroll.finishPullUp()
				})
			},
			controlClick(index){
				switch (index){
					case 0:
					this.controlType='pop'
						break;
					case 1:
					this.controlType='new'
						break;
					case 2:
					this.controlType='sell'
						break;
				}
			},
			backTop() {
				this.BScroll.scrollTo(0,0,500)
			},
			showLoad (){
				this.controlOffsetTop = this.$refs.control.$el.offsetTop
				
			}
		},
	}
</script>

<style scoped="scoped">
	.wrap{
		height: calc(100vh - 94px);
		overflow: hidden;
		margin-top: 44px;
	}
	.control1{
		position: fixed;
		top:44px;
		left: 0;
		right: 0;
		background: white;
		z-index: 99;
	}
</style>
