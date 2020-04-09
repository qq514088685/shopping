<template>
	<div>
		<nav-bar>
			<nav-bar-item path="/home">
				<img src="../../assets/img/tabbar/home.svg" slot="item-img">
				<img src="../../assets/img/tabbar/home_active.svg" slot="item-img-active">
				<div slot="item-text">首页</div>
			</nav-bar-item>
			<nav-bar-item path="/category">
				<img src="../../assets/img/tabbar/category.svg" slot="item-img">
				<img src="../../assets/img/tabbar/category_active.svg" slot="item-img-active">
				<div slot="item-text">分类</div>
			</nav-bar-item>
			<nav-bar-item path="/cart">
				<img src="../../assets/img/tabbar/cart.svg" slot="item-img">
				<img src="../../assets/img/tabbar/cart_active.svg" slot="item-img-active">
				<div slot="item-text">购物车</div>
			</nav-bar-item>
			<nav-bar-item path="/profile">
				<img src="../../assets/img/tabbar/profile.svg" slot="item-img">
				<img src="../../assets/img/tabbar/profile_active.svg" slot="item-img-active">
				<div slot="item-text">我的</div>
			</nav-bar-item>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from "./NavBar"
	import NavBarItem from "./NavBarItem"
	export default {
		name:'NavBarMenu',
		components:{NavBar,NavBarItem}
	}
</script>

<style>
</style>
