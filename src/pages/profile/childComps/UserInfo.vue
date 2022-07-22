<template>
  <div class="user-info">
    <div class="user-img">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="user-login">
      <div class="login-text">登录/注册</div>
      <div class="login-info">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="more">
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: rgb(235, 137, 154);
    color: #fff;
  }
  .user-img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user-img img{
    width: 100%;
  }
  .user-login{
    flex: 1;
  }
  .user-login img{
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }
  .user-login .login-text{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .user-login .login-info{
    font-size: 14px;
  }
  .more i{
    font-size: 26px;
  }
</style>