<template>
	<div>
		<swiper ref="mySwiper" :options="swiperOptions" class="swiper" v-if='showSwiper'>
			<swiper-slide v-for='(item,index) in bannerList' :key='index'>
					<img :src="item" alt="" @load='swiperLoad'>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	export default {
		name:'DetailSwiper',
		components:{Swiper,SwiperSlide},
		props:{
			bannerList:{
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
			swiperLoad(){
				this.BScroll.refresh()
			}
		},
		data(){
			return{
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop : true,
					autoplay:{
						delay: 2000,
						disableOnInteraction: false,
					}
				}
			}
		},
		computed:{
			showSwiper() {
				return this.bannerList.length
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper{
		width: 100vw;
		height: 60vh;
	}
	.swiper img{
		width: 100%;
		
	}
	.swiper-container {
		--swiper-theme-color: #fff;
	}
</style>
