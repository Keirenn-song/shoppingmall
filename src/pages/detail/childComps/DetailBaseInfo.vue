<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc" class="discount-desc">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index" class="item">
        <img :src="goods.services[index].icon">
        <span>{{goods.services[index].name}}</span>
      </span>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f2f2;
  }
  .info-title{
    color: #222;
  }
  .info-price{
    margin-top: 10px;
  }
  .info-price .new-price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .old-price{
    font-size: 12px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount-desc{
    margin-left: 5px;
    padding: 2px 5px;
    vertical-align: text-top;
    background-color: var(--color-high-text);
    color: #fff;
    font-size: 12px;  
    border-radius: 8px;
  }
  .info-other{
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f2f2f2;
  }
  .info-service{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    align-items: center;
    font-size: 12px;
    color: #333;
  }
  .info-service .item{
    margin-top: 5px;
  }
  .info-service img{
    width: 14px;
    vertical-align: top;
  }
</style>