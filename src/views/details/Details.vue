<template>
	<div>
		<nav-top class="navtop">
			<div slot='left'>
				<img src="../../assets/img/back.svg" alt="" @click="back">
			</div>
			<div slot='center'>商品详情</div>
		</nav-top>
		<div class="wrap" ref="wrap">
			<div class="content">
				<detail-swiper :bannerList='bannerList' :BScroll='BScroll'></detail-swiper>
				<a-module :productInfo='productInfo'></a-module>
				<b-module :shop='shop'></b-module>
				<c-module :showImg='showImg' :BScroll='BScroll'></c-module>
				<d-module :params='params'></d-module>
			</div>
		</div>
		<details-nav-bar @addCart='addCart'></details-nav-bar>
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll'
	import NavTop from '../../components/navbar/NavTop.vue'
	import DetailSwiper from './child/DetailSwiper.vue'
	import AModule from './child/AModule.vue'
	import BModule from './child/BModule.vue'
	import CModule from './child/CModule.vue'
	import DModule from './child/DModule.vue'
	import DetailsNavBar from './child/DetailsNavBar.vue'
	export default {
		name:'Details',
		components:{
			NavTop,
			DetailSwiper,
			AModule,
			BModule,
			CModule,
			DModule,
			DetailsNavBar
		},
		props:{
			commodityClick:{
				type:String
			}
		},
		data(){
			return {
				productId:null,
				bannerList: [], //轮播图图片
				//商品的信息
				productInfo: {
					title:'',
					price:'',
					oldPrice:'',
					lowNowPrice:'',
					discountDesc:'',
					columns:'',
					services:'',
					desc:'',
				},
				//店铺
				shop: {
					name:'',
					logo:'',
					sells:'',
					score:'',
					goodsCount:'',
					shopUrl:''
				},		
				showImg: [],	//图片展示
				//商品参数
				params: {
					info:'',
					rule:''
				},
				BScroll:null,
			}
		},
		created(){
			this.productId = this.$route.query.iid
			this.getDetails()
		},
		mounted(){
			this.BScroll = new BetterScroll('.wrap',{
				click:true,
				pullUpLoad:true
			})
			// this.BScroll.on('pullingUp',() => {
			// 	this.getControl(this.controlType)
			// }),
			// this.BScroll.on('scroll',(o) => {
			// 	this.backTopIsShow = -o.y>1500
			// 	this.controlIsShow = -o.y >= this.controlOffsetTop - 44
			// })
		},
		methods:{
			back() {
				this.$router.back(-1)
			},
			getDetails() {
				this.request({
					url:this.url.detail,
					method:'get',
					params: {
						iid:this.productId
					}
				}).then(res => {
					console.log(res)
					//给轮播图数据数组
					this.bannerList =res.result.itemInfo.topImages
					//给商品信息赋值
					this.productInfo.title = res.result.itemInfo.title  //商品标题
					this.productInfo.price = res.result.itemInfo.price  //商品新价格
					this.productInfo.oldPrice = res.result.itemInfo.oldPrice //商品的旧价格
					this.productInfo.lowNowPrice = res.result.itemInfo.lowNowPrice//购买价格
					this.productInfo.discountDesc = res.result.itemInfo.discountDesc //商品折扣
					this.productInfo.columns = res.result.columns   //商品销量收藏 ...
					this.productInfo.services = res.result.shopInfo.services //商品的服务
					this.productInfo.desc = res.result.itemInfo.desc //商品描述
					// this.productInfo = JSON.parse(JSON.stringify(this.productInfo))//防止__ob__:Observer迭代出错
					//店铺
					this.shop.name = res.result.shopInfo.name;//店铺名
					this.shop.logo = res.result.shopInfo.shopLogo;//店铺logo
					this.shop.sells = res.result.shopInfo.cSells;//销量
					this.shop.score = res.result.shopInfo.score;//满意度
					this.shop.goodsCount = res.result.shopInfo.cGoods;//商品数量
					this.shop.shopUrl = res.result.shopInfo.shopUrl;//商品链接
					// this.shop = JSON.parse(JSON.stringify(this.shop))//防止__ob__:Observer迭代出错
					//商品图片展示
					this.showImg = res.result.detailInfo.detailImage[0].list
					//商品参数
					this.params.info = res.result.itemParams.info.set;//款式
					this.params.rule = res.result.itemParams.rule.tables[0];//尺寸
					// this.params = JSON.parse(JSON.stringify(this.params))//防止__ob__:Observer迭代出错
				})
			},
			addCart(){
				this.$toast('加入成功');
				let Obj={
					id:this.productId,
					cover:this.bannerList[0],
					title:this.productInfo.title,
					desc:this.productInfo.desc,
					lowNowPrice:this.productInfo.lowNowPrice,
					checked:true,
					count:1
				}
				this.$store.commit('addCartData',Obj)
			}
		}
	}
</script>

<style scoped="scoped">
	.navtop{
		height: 44px;
	}
	.navtop img{
		margin-top: 12px;
	}
	.wrap{
		height: calc(100vh - 94px);
		overflow: hidden;
	}
</style>
