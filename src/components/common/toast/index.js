import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.根据构造器创建组件对象
  const toast = new toastConstructor()

  //3.手动将组件对象挂载到一个元素上
  toast.$mount(document.createElement('div'))

  //4.将元素添加到body上(通过$el拿到dom)
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj