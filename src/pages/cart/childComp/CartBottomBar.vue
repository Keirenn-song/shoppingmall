<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="button" :isChecked="isAllChecked" @click.native="checkAll"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计：<span>¥</span><span>{{totalPrice}}</span>
    </div>
    <div class="calculate" @click="calculate" >
      去结算({{totalNum}})
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'
import { mapGetters} from 'vuex'

export default {
  name: 'CartBottomBar',
  components: { CheckButton },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice(){
      if(this.cartList){
        return this.cartList.filter(item => item.isChecked)
        .reduce((pre,item) => pre + item.price * item.count,0)
        .toFixed(2)
      }
    },
    totalNum(){
      if(this.cartList){
        return this.cartList.filter(item => item.isChecked)
        .reduce((pre,item) => pre += item.count,0)
      }
    },
    //全选状态判断
    isAllChecked(){
      return this.cartList.length > 0 ? this.cartList.every(item => item.isChecked) : false
    }
  },
  methods: {
    checkAll(){
      this.$store.commit('updateAllCheck',this.isAllChecked)
    },
    calculate(){
      // !this.cartList.find(item => item.isChecked
      if((!this.cartList) || (!this.cartList.find(item => item.isChecked))){
        this.$toast.show('请选择商品',2000)
      }
    }
  },
}
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    display: flex;
    align-items: center;

    height: 40px;
    font-size: 14px;
    background-color: #fff;
  }
  .bottom-bar>div{
    height: 40px;
    line-height: 40px;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin: 0 10px;
  } 
  .button{
    margin-right: 5px;
  }
  .price{
    flex: 1;
  }
  .price span {
    color: var(--color-high-text);
    font-size: 20px;
    vertical-align: top;
  }
  .calculate{
    padding: 0 10px;
    background-color: var(--color-high-text);
    color: #fff;
  }
</style>