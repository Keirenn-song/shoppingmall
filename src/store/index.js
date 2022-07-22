import Vue from 'vue'
import Vuex from 'vuex'

//引入常量
import {ADD_COUNTER, ADD_TO_CART,} from './mutation-types'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    [ADD_COUNTER](state,oldProduct){
      oldProduct.count++
    },
    [ADD_TO_CART](state,product){
      product.isChecked = true
      state.cartList.push(product)
    },
    changeCheck(state,index){
      state.cartList[index].isChecked = !state.cartList[index].isChecked
    },
    updateAllCheck(state,isAllChecked){
      state.cartList.forEach(item => item.isChecked = !isAllChecked)
    }
  },
  actions: {
    addCart({state, commit},product){
      return new Promise((resolve,reject) => {
        // 1.添加之前，查找数组中是否有相同商品
        let oldProduct = state.cartList.find(item => item.iid === product.iid)
        // 2.如果相同，增加计数
        if(oldProduct){
          commit(ADD_COUNTER,oldProduct)
          resolve('当前商品数量+1')
        }else{
          //如果不同，再添加
          product.count = 1
          commit(ADD_TO_CART,product)
          resolve('已成功加入购物车')
        }
      })
    }
  },
  getters: {
    cartList(state){
      return state.cartList || []
    }
  }

})

export default store