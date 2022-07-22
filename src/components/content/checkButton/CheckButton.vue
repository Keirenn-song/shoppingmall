<template>
  <div class="check-button" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #c0bcbc;
    border-radius: 50%;
  }
  .check-button img{
    vertical-align: middle;
    width: 70%;
    margin-bottom: 3px;
  }
  .check-button.checked{
    background-color: var(--color-high-text);
    border-color: var(--color-high-text);
  }
</style>