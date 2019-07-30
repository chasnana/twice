import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		arr:[],
		arr1:[]
		
	},
	getters:{
		getArr(state){
			return state.arr
		}
	},
	mutations:{
		add(state,payload){
			console.log('pp',payload.num)
			state.arr.push(payload);
		},
		addid(state,keyload){
			state.arr.some((item, index) => {
                        if (item.id == keyload.id) {
							item.num==keyload.num;
							return
                        }
                        
                    })
		},
		delid(state,keyload){
			state.arr.some((item, index) => {
                        if (item.id == keyload.id) {
							item.num==keyload.num;
							return
                        }
                    })
		},
		del(state,payload){
			state.arr.some((item, index) => {
                        if (item.id == id) {
                            state.arr.splice(index, 1);
                        }
                    })
		}
	},
	plugins:[createPersistedState({
        storage:window.localStorage
    })]
});