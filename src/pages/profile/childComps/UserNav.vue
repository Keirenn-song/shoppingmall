<template>
  <div class="user-nav">
    <div class="nav1">
      <div>
        <img src="~assets/img/profile/message.svg" alt="">
        <span class="nav-text">我的消息</span>
      </div>
      <div>
        <img src="~assets/img/profile/pointer.svg" alt="">
        <span class="nav-text">积分商城</span>
      </div>
      <div>
        <img src="~assets/img/profile/vip.svg" alt="">
        <span class="nav-text">会员卡</span>
      </div>
    </div>
    <div class="nav2">
      <div>
        <img src="~assets/img/profile/cart.svg" alt="">
        <span class="nav-text">我的购物车</span>
      </div>
      <div>
        <img src="~assets/img/profile/shopping.svg" alt="">
        <span class="nav-text">下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNav"
}
</script>

<style scoped>
  .user-nav{
    font-size: 18px;
    color: #333;
  }
  .user-nav img{
    width: 26px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .nav1, 
  .nav2{
    background-color: #fff;
    padding: 0 20px;
    margin-top: 15px;
  }
  .nav1>div, 
  .nav2>div{
    display: flex;
    align-items: center;
    height: 40px;
    line-height: 40px;
  }
  .nav-text{
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }
  .nav1>div:last-child .nav-text,
  .nav2>div:last-child .nav-text{
    border: none;
  }
</style>