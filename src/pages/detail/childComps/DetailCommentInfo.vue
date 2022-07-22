<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="nocomment" v-if="Object.keys(commentInfo).length == 0">
      暂无评价
    </div>
    <div v-if="Object.keys(commentInfo).length !== 0">
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="other">
          <span class="date">{{rateTime}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-img" v-if="commentInfo.images">
          <img :src="item" v-for="(item,index) in commentInfo.images" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name:'DetailCommentInfo',
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }    
  },
  computed:{
    rateTime(){
      return moment(this.commentInfo.created*1000).format("YYYY-MM-DD ")
    }
  },
}
</script>

<style scoped>
  .comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title{
    float: left;
    font-size: 15px;
  }
  .header-more{
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .info-user{
    padding: 10px 0 5px;
  }
  .info-user img{
    width: 42px;
    height: 42px;
    font-size: 13px;
  }
  .info-user span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .info-detail{
    padding: 0 5px 10px ;
  }
  .info-detail p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .other{
    font-size: 12px;
    color: #999;
    margin: 10px 0;
  }
  .other .date{
    margin-right: 8px;
  }
  .info-img img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
  .nocomment{
    height: 60px;
    line-height: 60px;
    color: #999;
    font-size: 16px;
    text-align: center;
  }
</style>
