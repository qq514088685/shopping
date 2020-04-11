import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	cart:[]
  },
  mutations: {
	changeCheck(state,id){
		for(let i=0;i<state.cart.length;i++){
			if(state.cart[i].id === id){
				state.cart[i].checked = !state.cart[i].checked
			}
		}
	},
	addCartData(state,obj){
		if(state.cart.length <= 0){
			state.cart.push(obj)
			return
		}
		for(var i=0;i<state.cart.length;i++){
			if(state.cart[i].id === obj.id){
				state.cart[i].count++
				return
			}
		}
		state.cart.push(obj)
	},
	allCheck(state,boo){
		for(let i=0;i<state.cart.length;i++){
			state.cart[i].checked=!boo
		}
	}
  },
  getters:{
	isCheck(state){
		for(let i=0;i<state.cart.length;i++){
			if(state.cart[i].checked==false){
				return false
			}
		}
		return true
	}
  },
  actions: {
  },
  modules: {
  }
})
