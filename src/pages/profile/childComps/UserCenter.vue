<template>
  <div class="user-center">
    <div class="balance">
      <div class="first">
        <span class="num">0.00</span><span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div class="discount">
      <div class="first">
        <span class="num">0</span><span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="points">
      <div class="first">
        <span class="num">0</span><span>分</span>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenter'
}
</script>

<style scoped>
  .user-center{
    display: flex;

    background-color: #fff;
    color: #333;
    font-size: 16px;
  }
  .user-center>div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }
  .user-center>div:nth-child(-n+2){
    border-right: 1px solid #f0ebeb;
  }
  .first{
    margin-bottom: 5px;
  }
  .num{
    color: orange;
    font-size: 24px;
    font-weight: 500;
    margin-right: 3px;
  }
</style>