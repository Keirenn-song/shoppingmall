<template>
  <div class="cart-list">
    <div class="list-item" v-for="(item,index) in cartList" :key="index">
      <div class="check">
        <check-button :isChecked="item.isChecked" @click.native="itemCheck(index)"></check-button>
      </div>
      <div class="item-left">
        <img :src="item.image">
      </div>
      <div class="item-right">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="info-bottom">
          <span class="price">¥{{item.price}}</span>
          <span class="count">x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartList',
  components:{
    CheckButton
  },
  props: {
    cartList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    itemCheck(index){
      this.$store.commit('changeCheck',index)
    }
  },
}
</script>

<style scoped>
  .cart-list{
    padding: 5px;
  }
  .list-item{
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 10px;

    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 10px rgba(0,0,0,.1);
  }
  .check{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-left{
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;

    margin: 0 10px;
  }
  .item-left img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item-right{
    flex: 1;
    font-size: 16px;
    color: #333;
    overflow: hidden;
  }
  .item-right .title,
  .item-right .desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-right .desc{
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
  .info-bottom{
    margin-top: 10px; 

    display: flex;
    justify-content: space-between;
  }
  .info-bottom .price{
    font-size: 18px;
    color: orangered;
  }
  .info-bottom .count{
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    padding: 2px;
  }
</style>