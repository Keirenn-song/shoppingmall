<template>
  <div class="goods-detail-info" v-if="Object.keys(detailInfo).length !== 0" >
    <div class="desc">{{detailInfo.desc}}</div>
    <div v-for="(detailImg,index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{detailImg.key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in detailImg.list" :key="index" :src="item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props: {
    detailInfo: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  // data() {
  //   return {
  //     counter: 0,
  //     imagesLength:0
  //   }
  // },
  // methods: {
  //   imageLoad(){
  //     //所有图片都加载完了，进行一次回调就可以了
  //     if(++this.counter === this.imagesLength)
  //     this.$emit('imageLoad')
  //   }
  // },
  // watch: {
  //   detailInfo(){
  //     this.imagesLength = this.detailInfo.detailImage[0].list.length
  //   }
  // }
}
</script>

<style scoped>
  .goods-detail-info{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .desc{
    font-size: 14px;
    color: #333;
    padding: 10px;
  }
  .info-list img{
    width: 100%;
  }
</style>