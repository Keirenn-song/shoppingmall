<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item,index) in titles" :key="index" 
             class="center-item" :class="{active:index===currentIndex}" 
             @click="itemClick(index)">
             {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit("titleClick",index)
    },
    backHome(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
  .center{
    display: flex;
    font-size: 14px;
  }
  .center-item{
    flex: 1
  }
  .center-item.active{
    color: var(--color-high-text)
  }
  .left img{
    vertical-align: middle;
  }
</style>