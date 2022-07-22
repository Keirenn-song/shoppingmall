//防抖函数
export function debounce(func,delay){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    }, delay);
  }
}

//转换时间戳函数
//一般使用common.js即可，这里仅作练习，项目中未使用
export function formatDate(date,fmt){
  // y+ 表示1个或多个y
  // y* 表示0个或多个y
  // y? 表示0个或一个y
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for(let k in o){
    if(new RegExp(`(${k}).test(fmt)`)){
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }

  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }
}


//瀑布流
export class WaterFall{
  constructor(options){
    this.$el = null //父容器
    this.count = 2 //列数
    this.gap = 10 //间隔
    Object.assign(this,options)
    this.width = 0 //列宽
    this.items = [] //子元素集合
    this.H = [] //每列高度的数值集合
    this.flag = null //虚拟节点集合
    this.init()
  }
  init() {
    this.items = Array.from(this.$el.children)
    this.reset()
    this.render()
  }
  reset(){
    this.flag = document.createDocumentFragment()
    this.width = this.$el.clientWidth / this.count
    this.H = new Array(this.count).fill(0)
    this.$el.innerHTML = ""
  }
  render(){
    const {width, items, flag, H, gap} = this
    items.forEach(item => {
      item.style.width = width + "px"
      item.style.position = "absolute"
      let img = item.querySelector('img')
      if(img.complete){
        let tag = H.indexOf(Math.min(...H)) //保存高度最小的索引值
        item.style.top = H[tag] + "px"
        item.style.left = tag * (gap + width) + "px"
        H[tag] += item.clientHeight + gap + "px"
        flag.appendChild(item)
      }else{
        img.addEventListener('load',()=>{
          let tag = H.indexOf(Math.min(...H)) //保存高度最小的索引值
          item.style.top = H[tag] + "px"
          item.style.left = tag * (gap + width) + "px"
          H[tag] += item.clientHeight + gap 
          flag.appendChild(item)
          this.$el.append(flag)
        })
      }
    })
    this.$el.append(flag)
  }
}