<template>
  <div>
    <!-- 头部 -->
    <v-toolbar app height="80px" :style="`background-color: ${toolbar_color}`">
      <!-- 导航条左上角的按钮 -->
      <v-toolbar-side-icon @click="Drawer = ! Drawer" class="hidden-md-and-up blue--text"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-md-and-up headline blue--text font-weight"
        style="text-shadow: 2px 2px 4px #78909C;">
        <span class="hidden-md-and-up blue--text font-weight-thin headline font-italic animated fadeInUp"
          style="position: absolute; top:30%;left: 15%;text-shadow: 4px 4px 6px #78909C;">
          SOFTWARE
          <span class=" font-weight-thin font-italic">Team</span>
        </span></v-toolbar-title>
      <div class="text-center">
        <!-- src里放上logo的png图片 -->
        <v-avatar class="hidden-md-and-down animated fadeInDown" id="icon">
          <v-img src="/logo/rx_logo_副本.png" />
        </v-avatar>
        <h1 class="hidden-md-and-down blue--text font-weight-thin font-italic display-2 animated fadeInUp"
          style="position: absolute; top:20%;left: 15%;text-shadow: 4px 4px 6px #78909C;">
          SOFTWARE
          <span class="display-1 font-weight-thin font-italic">Team</span>
        </h1>
      </div>

      <!-- 让按钮居右 -->
      <v-spacer></v-spacer>
      <!-- 导航条按钮 -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(btn,i) in btns" :key="i" :to="btn.to" flat class="v-btn-pc animated fadeInDown"
          @click="$vuetify.goTo(0)">{{ btn.text }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- 头部 -->

    <!-- 手机端显示 -->
    <v-navigation-drawer app v-model="Drawer" temporary :width="`${$vuetify.breakpoint.width*2/3}`"
      style="background-color: rgba(255, 255, 255, 0.9);">
      <v-list style="background-color: rgba(255, 255, 255, 0);">
        <v-list-tile v-for="link in links" :key="link.text" ripple router :to="link.route" @click="$vuetify.goTo(0)">
          <v-list-tile-action>
            <v-icon class="blue--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="blue--text font-weight-thin">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Drawer: false,
        // route放链接，两个都要放对应的
        links: [
          //移动端导航栏设置
          {
            text: "主页",
            icon: "home",
            route: "/"
          },
          {
            text: "比赛",
            icon: "http",
            route: "/race"
          },
          {
            text: "动态",
            icon: "event",
            route: "/event"
          },
          {
            text: "资源",
            icon: "get_app",
            route: "/resource"
          },
          {
            text: "论坛",
            icon: "chrome_reader_mode",
            route: "/forum"
          },
          {
            text: "加入我们",
            icon: "supervisor_account",
            route: "/joinus"
          },
          // { text: "登录/注册", icon: "account_circle", route: "/login" }
        ],
        btns: [
          //PC端导航栏设置
          {
            text: "首页",
            to: "/"
          },
          {
            text: "比赛",
            to: "/race"
          },
          {
            text: "动态",
            to: "/event"
          },
          {
            text: "资源",
            to: "/resource"
          },
          {
            text: "论坛",
            to: "/forum"
          },
          {
            text: "加入我们",
            to: "/joinus"
          },
          // { text: "登录/注册", to: "/login" }
        ],
        toolbar_color: "rgba(255, 255, 255, 0.7)",
        scroll: ""
      };
    },
    mounted() {
      window.addEventListener("scroll", this.watchScroll);
    },
    methods: {
      // 监听页面滚动
      watchScroll() {
        this.scroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scroll < this.$vuetify.breakpoint.height / 2) {
          this.toolbar_color = "rgba(255, 255, 255, 0.7)";
        }
        if (this.scroll >= this.$vuetify.breakpoint.height / 2) {
          this.toolbar_color = "rgba(255, 255, 255, 1)";
        }
      }
    }
  };
</script>

<style>
  .v-btn-pc:hover {
    border-bottom: 4px solid #03a9f4;
  }

  #icon {
    position: absolute;
    top: 23%;
    left: 11%;
  }
</style>