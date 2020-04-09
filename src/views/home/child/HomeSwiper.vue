<template>
	<div>
		<swiper ref="mySwiper" :options="swiperOptions" class="swiper">
			<swiper-slide v-for='(item,index) in bannerList' :key='index'>
				<a :href="item.link">
					<img :src="item.image" alt="" @load='showLoad'>
				</a>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	export default {
		name:'HomeSwiper',
		props:{
			bannerList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperSlide
		},
		data() {
			return{
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop : true,
					autoplay:{
						delay: 2000
					}
				}
			}
		},
		methods:{
			showLoad() {
				this.$emit('showLoad')
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper img{
		width: 100%;
	}
	.swiper-container {
		--swiper-theme-color: #fff;
	}
</style>
