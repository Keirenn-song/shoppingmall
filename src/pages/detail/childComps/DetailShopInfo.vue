<template>
  <div class="shop-info">
    <div class="shop-top">
      <img class="shop-logo" :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="count">5.2万</div>
          <div class="text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="count">{{shop.goodsCount}}</div>
          <span class="text">全部宝贝</span>
        </div>
      </div >
      <div class="shop-middle-item shop-middle-right">
        <div class="right-item" v-for="(item,index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span class="score" :class="{'score-better':item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{'more-better':item.isBetter}">{{item.isBetter?"高":"低"}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">
        进店逛逛
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DetailShopInfo',
  props:{
    shop:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .shop-info{
    margin: 20px 0;
    padding: 0 8px;
  }
  .shop-top{
    font-size: 18px;
    line-height: 40px;
  }
  .shop-logo{
    width: 40px;
    margin-right: 10px; 
    vertical-align: middle;  
  }
  .shop-middle{
    display: flex;
    align-items: center;
    height: 75px;
    color: #333;
    font-size: 14px;
    margin: 20px 0;
  }
  .shop-middle-item{
    flex: 50%;
    
  }
  .shop-middle .shop-middle-left{
    display: flex;
    border-right: 1px solid #f2f2f2;
  }
  .shop-middle-left .info-sells,
  .shop-middle-left .info-goods{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .count{
    flex: 1;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .text{
    flex: 1;
  }
  .shop-middle .shop-middle-right{
    margin-left: 15px;
  }
  .shop-middle-right .right-item{
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin: 10px 0;
  }
  .right-item .score{
    color: #5ea732;
    flex: 0.3;
  }
  .right-item .score-better{
    color: #f13e3a;
  }
  .right-item .better{
    color: #fff;
    background-color: #5ea732;
  }
  .right-item .more-better{
    background-color: #f13e3a;
  }
  .shop-bottom{
    margin: 10px auto;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
</style>