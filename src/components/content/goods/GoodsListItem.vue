<template>
  <div class="list-item" @click="itemClick">
    <img :src="goodImage" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥ {{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    //为了组件能在首页和详情页推荐处复用
    goodImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    },
    iid(){
      return this.goodsItem.iid || this.goodsItem.item_id
    }
  },
  methods: {
    imageLoad(){
      if(this.$route.path.indexOf('/home') !== -1){
        this.$bus.$emit('goodItemImageLoad')
      }
    },
    itemClick(){
      // if(this.$route.path.indexOf('/detail') !== -1){
      //   this.$router.push('/detail/'+this.goodsItem.item_id)
      // }
      this.$router.push('/detail/'+this.iid)
    }
  },
}
</script>

<style scoped>
  .list-item{
    position: relative;
    width: 48%;
    margin-bottom: 10px;
    padding-bottom: 40px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.2)
  }
  .list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;

  }
  .goods-info p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>