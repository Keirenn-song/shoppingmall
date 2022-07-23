<template>
  <div class="side-bar">
    <div class="side-item" :class="{'active': currentIndex===index}" v-for="(item,index) in titleList" :key="index" @click="getGoods(item,index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySideBar",
  props: {
    titleList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    getGoods(item,index){
      this.currentIndex = index
      this.$emit('getCategoryGoods',item.maitKey)
    }
  },
}
</script>

<style scoped>
  .side-bar{
    width: 100px;
    font-size: 16px;
    background-color: #f2f5f8;
  }
  .side-item{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .side-item.active{
    background-color: #fff;
    color: var(--color-high-text);
    /* box-shadow: -1px 0 5px rgba(0,0,0,.2); */

    position: relative;
    transform: scaleZ(1.1);
  }
  .side-item.active::before{
    content: "";
    width: 5px;
    height: 20px;
    background-color:var(--color-high-text);
    border-radius: 2px;

    position: absolute;
    top: 15px;
    left: 5px;
  }
</style>