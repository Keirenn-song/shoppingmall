<template>
  <div class="tab-bar-item" @click="tabclick">
    <div v-show="!isActive"><slot name="item-icon"></slot></div>
    <div v-show="isActive"><slot name="item-icon-active"></slot></div>
    <div class="tab-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'var(--color-high-text)'//base.css中定义的颜色
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabclick(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    font-size: 14px;
    text-align: center;
  }
  .tab-bar-item img{
    margin-top: 3px;
    margin-bottom: 2px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>