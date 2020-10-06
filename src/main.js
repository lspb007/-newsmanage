import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


Vue.config.productionTip = false

Vue.use(Antd);

Vue.use(VueRouter)

Vue.use(VueResource)




const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:'/',component:Customers},
    {path:'/about',component:About},
    {path:'/add',component:Add},
    {path:'/customer/:id',component:CustomerDetails},
    {path:'/edit/:id',component:Edit}
  ]
})

new Vue({
  router,
  render: h => h(App),
  
}).$mount("#app")
