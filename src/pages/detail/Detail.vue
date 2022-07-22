<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" :probe-type="3" ref="scroll" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-goods-param ref="param" :goodsParam="goodsParam"></detail-goods-param>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goodslist="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailGoodsParam from './childComps/DetailGoodsParam'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList.vue' 
import DetailBottomBar from './childComps/DetailBottomBar.vue' 

import Scroll from 'components/common/scroll/Scroll'

import {getDetail,getRecommend, Goods, Shop, GoodsParam} from '@/network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParam: {},
      commentInfo:{},
      recommends: [],
      topList:[],
      currentIndex: 0
    }
  },
  created(){
    this.iid = this.$route.params.iid
    // 请求商品详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result
      // 获取详情页上方图片
      this.topImages = data.itemInfo.topImages
      // 获取详情页商品基本信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      //获取商品详情数据
      this.detailInfo = data.detailInfo
      //获取详情页参数数据
      this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取评价信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
      console.log(data);
    })
    
    //请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommends = res.data.list
    })
  },
  methods: {
    titleClick(index){
      (!this.topList.length) && this.getOffsetTop();
      this.$refs.scroll.scrollTo(0,-this.topList[index])
    },
    getOffsetTop(){
      //获取对应组件的offsetTop值
      //需要注意获取的时机，必须等图片加载完，获取的高度才准确
      //mounted、获取数据的回调、$nextTrick都不行。
      this.topList = []
      this.topList.push(0)
      this.topList.push(this.$refs.param.$el.offsetTop)
      this.topList.push(this.$refs.comment.$el.offsetTop)
      this.topList.push(this.$refs.recommend.$el.offsetTop)
      this.topList.push(Number.MAX_VALUE)
      // console.log(this.topList);
    },
    contentScroll(position){
      (!this.topList.length) && this.getOffsetTop();
      const positionY = -position.y
      const length = this.topList.length
      for(let i = 0;i<length-1; i++){
        if(this.currentIndex !== i && positionY >= this.topList[i] && positionY < this.topList[i+1]){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      //初始写法
      //判断条件有些复杂，可以通过给数组添加一个最大值来优化
      // for(let i = 0;i<length; i++){
      //   if(this.currentIndex !== i && 
      //   ((i < length-1 && positionY >= this.topList[i] && positionY < this.topList[i+1]) || 
      //   (i === length-1 && positionY > this.topList[i]))){
      //     this.currentIndex = i
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }
    },
    // 点击加入购物车
    addToCart(){
      const product = {}
      product.iid = this.iid
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      this.$store.dispatch('addCart',product).then(res => {
        console.log(this.$toast);
        this.$toast.show(res)
      })
    }
  },
    
  
}
</script>

<style scoped>
  #detail{
    height: 100vh;
    background-color: #fff;
  }
  .detail-nav{
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
  .content{
    /* 获取offsetTop相对于定位父元素 */
    position: relative;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>