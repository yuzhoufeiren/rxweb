<template>
  <v-app>
    <!-- 头部 -->
    <Toolbar />
    <!-- 头部 -->

    <!-- 内容 -->
    <v-content style="margin-top: -80px;">
      <router-view style="background-image: url('/img/background/1.jpg');background-size: cover;"></router-view>
    </v-content>
    <!-- 内容 -->

    <!-- 回到顶部按钮 -->
    <Back />
    <!-- 回到顶部按钮 -->

    <!-- 底部 -->
    <Footer />
    <!-- 底部 -->
  </v-app>
</template>


<script>
  import Vue from 'vue'
  import VueWow from 'vue-wow'
  Vue.use(VueWow)
  import {
    UAnimateContainer,
    UAnimate
  } from 'vue-wow'

  export default {
    name: 'App',
    components: {
      Toolbar: () => import('@/components/core/Toolbar.vue'),
      Footer: () => import('@/components/core/Footer.vue'),
      Back: () => import('@/components/Back.vue'),
      UAnimateContainer,
      UAnimate,
    }
  }
</script>