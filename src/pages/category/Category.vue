<template>
<div>
  <nav-bar class="nav-bar">
    <template v-slot:center>
      <div>分类</div>
    </template>
  </nav-bar>
  <div class="main-content">
    <scroll class="content1" :probe-type="3">
      <category-side-bar :titleList="titleDataList" @getCategoryGoods="getCategoryGoods"></category-side-bar>
    </scroll>
    <scroll class="content2" :probe-type="3">
      <category-goods :categoryGoods="categoryGoods"></category-goods>
    </scroll>
  </div>
</div>
</template>

<script>
  import {getCategoryData, getCategoryGoods} from '@/network/category'

  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'
  import CategorySideBar from './childComps/CategorySideBar'
  import CategoryGoods from './childComps/CategoryGoods'
  export default {
    name:'Category',
    components: {
      Scroll,
      NavBar,
      CategorySideBar,
      CategoryGoods
    },
    data() {
      return {
        titleDataList:[],
        categoryGoods: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        this.getCategoryData()
        setTimeout(() => {
          this.getCategoryGoods(this.titleDataList[0].maitKey)
          
        }, 200);
      },
      getCategoryData(){
        getCategoryData().then(res => {
          this.titleDataList = res.data.category.list
          // console.log(this.titleDataList);
        })
      },
      getCategoryGoods(maitKey){
        getCategoryGoods(maitKey).then(res => {
          this.categoryGoods = res.data.list
          console.log(this.categoryGoods);
        })
      }
    },
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 20px;
  }
  .main-content{
    display: flex;
  }
  .content1{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    overflow: hidden;
  }
  .content2{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 100px;
    right: 0;
    overflow: hidden;
  }
</style>