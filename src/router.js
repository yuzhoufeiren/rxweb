import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: resolve => require(['@/views/Home.vue'], resolve)
    },
    {
      path: '/forum',
      name: 'Forum',
      component: resolve => require(['@/views/Forum/Forum.vue'], resolve)
    },
    {
      path: '/resource',
      name: 'Resource',
      component: resolve => require(['@/views/Resource/Resource.vue'], resolve)
    },
    {
      path: '/resource/Maintain',
      name: 'Maintain',
      component: resolve => require(['@/views/Resource/Resource_pool/Maintain.vue'], resolve)
    },
    {
      path: '/resource/OtherSoftware',
      name: 'OtherSoftware',
      component: resolve => require(['@/views/Resource/Resource_pool/OtherSoftware.vue'], resolve)
    },
    {
      path: '/resource/Video',
      name: 'Video',
      component: resolve => require(['@/views/Resource/Resource_pool/Video.vue'], resolve)
    },
    {
      path: '/resource/DevelopmentTool',
      name: 'DevelopmentTool',
      component: resolve => require(['@/views/Resource/Resource_pool/DevelopmentTool.vue'], resolve)
    },
    {
      path: '/resource/Adobe',
      name: 'Adobe',
      component: resolve => require(['@/views/Resource/Resource_pool/Adobe.vue'], resolve)
    },
    {
      path: '/resource/Data',
      name: 'Data',
      component: resolve => require(['@/views/Resource/Resource_pool/Data.vue'], resolve)
    },
    // {
    //   path:'/login',
    //   name:'login',
    //   component: ()=>import('./views/Login.vue')
    // },
    // {
    //   path:'/signup',
    //   name:'signup',
    //   component: ()=>import('./views/Signup.vue')
    // },
    {
      path: '/joinus',
      name: 'Joinus',
      component: resolve => require(['@/views/Joinus/Joinus.vue'], resolve)
    },
    // {
    //   path:'/contactus',
    //   name:'contactus',
    //   component: ()=>import('./views/Contactus.vue')
    // },
    {
      path: '/event',
      name: 'Event',
      component: resolve => require(['@/views/Event/Event.vue'], resolve)
    },
    {
      path: '/race',
      name: 'Race',
      component: resolve => require(['@/views/Race/Race.vue'], resolve)
    },





    // {
    //   path: '/content1',
    //   name: 'content1',
    //   component: resolve => require(['@/views/race_article/content1.vue'], resolve)
    // },
    // {
    //   path:'/content2',
    //   name:'content2',
    //   component: resolve => require(['@/views/race_article/content2.vue'], resolve)
    // },
    // {
    //   path:'/content3',
    //   name:'content3',
    //   component: resolve => require(['@/views/race_article/content3.vue'], resolve)
    // },
    // {
    //   path:'/content4',
    //   name:'content4',
    //   component: resolve => require(['@/views/race_article/content4.vue'], resolve)
    // }
  ]
})