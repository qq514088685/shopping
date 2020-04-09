<template>
  <div id="app">
	<keep-alive include="Home">
		<router-view/>
	</keep-alive>
	<nav-bar-menu></nav-bar-menu>
  </div>
</template>
<script>
import NavBarMenu from './components/navbar/NavBarMenu'
	export default{
		name:'App',
		components:{NavBarMenu}
	}
</script>
<style>
@import url("assets/css/public.css");
</style>
