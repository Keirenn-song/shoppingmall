<template>
  <div class="param-info" v-if="Object.keys(goodsParam).length !== 0">
    <table class="info-size" v-for="(sizelist,index) in goodsParam.sizes" :key="index">
      <tr v-for="(tr,index_tr) in sizelist" :key="index_tr">
        <td v-for="(td,index_td) in tr" :key="index_td">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in goodsParam.infos" :key="index">
        <td class="param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt="">
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailGoodsParam",
  props:{
    goodsParam:{
      type: Object,
    }
  }
}
</script>

<style scoped>
  .param-info{
    padding: 20px 10px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info table{
    width: 100%;
    border-collapse: collapse;
  }
  .param-info table tr{
    height: 42px;
  }
  .param-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-param .param-key{
    width: 95px;
  }
  .info-param .param-value{
    color: #eb4686;
  }
  img{
    width: 100%;
  }
</style>