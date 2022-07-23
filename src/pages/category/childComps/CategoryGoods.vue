<template>
  <div class="item-list">
    <div class="item" v-for="(item, index) in categoryGoods" :key="index">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryGoods",
  props: {
    categoryGoods: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .item-list{
    display: flex;
    flex-wrap: wrap;
  }
  .item{
    flex:50%;
    text-align: center;
    padding: 10px;
    font-size: 16px;
    color: #666;
  }
  .item img{
    width: 80%;
    margin-bottom: 10px;
  }
</style>