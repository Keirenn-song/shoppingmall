<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
     <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"  class="tabControl"></tab-control>
    <scroll class="content" 
            ref="scroll"
            :probe-type="3" 
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goodslist="goodslist"></goods-list>
    </scroll>
    <!-- 组件上使用原生dom方法要添加native后缀 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import {getHomeMultidata, getHomeGoods} from '@/network/home'
// import {debounce} from '@/common/utils'

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView.vue'

import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop.vue'

export default {
  name:'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      titles:['流行','新款','精选'],
      banners: [],
      recommends: [],
      goods: {
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      },
      currentType:'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY:0,//  保存页面滚动的y值
    }
  },
  computed: {
    goodslist(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    this.getHomeMultidata()
    // 获取商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // 监听gooditem中的图片加载
    
  },
  mounted(){
    // 此处暂时无用
    // const refresh = debounce(this.$refs.scroll.refresh,50)
    // this.$bus.$on('goodItemImageLoad',()=>{
    //   // console.log("-----------");
    //   // this.$refs.scroll.refresh()
    //   refresh()
      
    // })
    
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0.01)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    // 请求数据相关方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    },
    //接收tabcontrol传递的index
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 使复制的两个tabcontrol的index保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    //滚动相关
    contentScroll(position){
      this.isShowBackTop = (-position.y)>1000
      this.isTabFixed = (-position.y)>=this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    swiperImgLoad(){
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    }
  },
}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
    /* padding-top: 44px; */
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;

    /* 此样式是为了使用原生滚动时，让顶部条固定 */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabControl{
    position: relative;
    /* margin-top: 44px; */
    z-index: 9;
  }
</style>