import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//蚂蚁UI
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import './assets/font/fonts.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.use(Antd)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
