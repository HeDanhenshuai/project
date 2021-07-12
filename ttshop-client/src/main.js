// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* 入口js*/

import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
//图片懒加载
import VueLazyload from 'vue-lazyload'

import loading from './common/lazyload.gif'

import './mock/mockServe'  //加载mockserve即可

import './filters'  //加载过滤器

//注册为全局组件标签
Vue.component(Button.name,Button)  //<mt-button>
// or with options
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  //内部自定义一个指令lazy
  loading: loading,
  // attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//使用上vue-router
  components: { App },
  template: '<App/>',
  render:h=>h(App),
  store,//使用上vuex
})
