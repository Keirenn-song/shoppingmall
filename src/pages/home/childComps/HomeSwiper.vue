<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  props: {
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false,
    }
  },
  components: {
    Swiper,
    SwiperItem   
  },
  methods: {
    imgLoad(){
      //轮播图有多张，如果每加载一张图片都要发送事件，会效率低下，
      //此事件是为了通知home获取offsetTop的时机，所以只要有一张图片加载完成，就无需再发送事件
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  },
  
}
</script>

<style>

</style>