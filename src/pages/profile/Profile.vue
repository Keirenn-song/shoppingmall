<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info class="user-info"></user-info>
    <user-center></user-center>
    <user-nav></user-nav>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import UserCenter from './childComps/UserCenter'
import UserNav from './childComps/UserNav'

export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    UserCenter,
    UserNav
  }
}
</script>

<style scoped>
  .profile{
    background-color: #e6e6e6;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 20px;
  }
</style>