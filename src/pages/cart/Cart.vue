<template>
  <div class="cart ignore">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cartList :cartList="cartList"></cartList>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComp/CartList'
import CartBottomBar from './childComp/CartBottomBar'

import Scroll from '@/components/common/scroll/Scroll'
import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: { 
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  computed: {
    ...mapGetters(['cartList']),
    cartLength(){
      return this.cartList.reduce((pre,item) => pre += item.count, 0)
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
  /* 添加ignore 防止此处px转化为vw，影响响应式布局 */
  .cart.ignore{
    background-color: #f2f5f8;
    height: calc(100vh - 49px);
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 20px;
    font-weight: 700;

    z-index: 99;
  }
  .content{
    height: calc(100% - 44px - 40px);
    overflow: hidden;
  }
</style>