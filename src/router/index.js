import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Cart = () => import('../views/cart/Cart')
const User = () => import('../views/user/User')
const Details = () => import('../views/details/Details')

const router = new VueRouter({
   mode:'history',
  routes:[
		{
			path:'/home',
			component:Home,
			name:'Home'
		},
		{
			path:'/classify',
			component:Classify,
			name:'Classify'
		},
		{
			path:'/cart',
			component:Cart,
			name:'Cart'
		},
		{
			path:'/user',
			component:User,
			name:'User'
		},
		{
			path:'/details',
			component:Details,
			name:'Details'
		},
		{
			path:'/',
			redirect:'/home'
		}
	]
})

export default router
