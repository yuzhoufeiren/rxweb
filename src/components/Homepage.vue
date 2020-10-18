<template>
  <v-app>
    <div class="lighten-5">
      <!-- 轮播图 -->
      <v-carousel delimiter-icon="data_usage" style="position: relative;margin-top: 0;" interval="4500"
        :height="`${$vuetify.breakpoint.height}`" class="animated slideIn">
        <!-- <div class="hidden-md-and-down"><span style="font-size: 1.6em ; color: white ; position: absolute; top: 81%; left: 20px; z-index: 2 ; text-shadow: 4px 4px 6px #f00;">灵感源于生活，技术改变未来<br />Inspiration comes from life, technology changes the future</span></div> -->
        <v-carousel-item transition="banner-fade" reverse-transition="banner-fade" v-for="(item,i) in items" :key="i"
          :width="$vuetify.breakpoint.width" :src="item.src" style="position: absolute;"
          gradient="to right top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)">
        </v-carousel-item>
      </v-carousel>
      <!-- 轮播图 -->
      <div style="background:black;text-align:center">
<iframe src="http://qgmqfu74x.hn-bkt.clouddn.com/rx.mp4"  width="600" height="300" style="margin:0;border:none" ></iframe>
</div>
      <!-- 小标题 -->
      <v-layout class="distance" align-center justify-center column fill height
        :style="`position: absolute;top: ${($vuetify.breakpoint.height*3.9/5)}px;left: 0;right: 0;margin: 0 auto;`">
        <v-flex xs12 sm5 style="text-align: center;" class="animated flipInX delay-1s">
          <span style="color: white;" class="display-2 font-weight-thin">BAIYUN</span>
          <v-sheet color="white" height="1" width="10rem" class="mt-1 mb-1" style="margin: 0 auto;"></v-sheet>
          <span style="color:white" class="headline font-weight-thin">软件研发团</span>
        </v-flex>
      </v-layout>
      <!-- 小标题 -->

      <v-container style="background-color: rgba(0, 0, 0, 0);margin-top: 1rem;">
        <v-layout row wrap class="lighten-3" align-center justify-center>
          <v-flex order-sm1 order-xs1 xs12 sm6 dm6 lg6 style="text-align: center;" class="pt-5 pb-5">
            <u-animate-container>
              <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                :begin="false">
                <h1 class="display-1 mb-3">
                  <v-icon x-large dark color="green darken-2">home</v-icon>
                  BaiyunU软件研发团
                </h1>
                <h1 class="display-1 mb-3">官方网站</h1>
                <span class="font-wight-thin headline">
                  <v-icon class="animated jello infinite">navigate_next</v-icon>
                  技术项目展示
                  <v-icon class="animated jello infinite">navigate_next</v-icon>
                </span>
              </u-animate>
            </u-animate-container>
          </v-flex>

          <v-flex order-sm2 order-xs2 xs12 sm6 md6 lg6 v-for="person in team" :key="person.text">
            <u-animate-container>
              <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                :begin="false">
                <v-card style="background-color: rgba(0,0,0,0)" flat class="text-xs-center ma-4">
                  <v-responsive>
                    <v-img :src="person.avatar" style="height:auto;width:auto"></v-img>
                  </v-responsive>
                </v-card>
              </u-animate>
            </u-animate-container>
            <v-layout row justify-center>
              <u-animate-container>
                <u-animate name="fadeInRight" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                  animateClass="animated" :begin="false">
                  <v-dialog height="auto">
                    <template v-slot:activator="{ on }">
                      <v-btn :color="person.color" dark v-on="on" round style="width:300px;"
                        class="font-weight animated pulse infinite">详细介绍</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{person.text_tittle}}</span>
                      </v-card-title>
                      <v-card-text class="font-weight">
                        {{ person.text1 }}
                        <br />
                        <br />
                        {{person.text2}}
                        <br />
                        <br />
                        {{person.text3}}
                        <br />
                        <br />
                        {{person.text4}}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text class="text-xs-right">
                          <br />点击弹框外返回
                          <v-icon>mouse</v-icon>
                        </v-card-text>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </u-animate>
              </u-animate-container>
            </v-layout>
          </v-flex>
          <v-flex order-sm4 order-xs3 xs12 sm6 md6 lg6 style="text-align: center;" class="pt-5 pb-5">
            <u-animate-container>
              <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                :begin="false">
                <h1 class="display-1 mb-3">
                  <v-icon x-large dark color="green darken-2">event</v-icon>
                  遇音-定制专属您的声音
                </h1>
                <h1 class="display-1 mb-3">定制平台</h1>
                <br>
                <span class="headline font-wight-thin mb-3">荣获2020大学生计算机设计大赛国家三等奖</span>
                <br>
                <span class="headline font-wight-thin">
                  <v-icon class="animated jello infinite">navigate_before</v-icon>
                  技术项目展示
                  <v-icon class="animated jello infinite">navigate_before</v-icon>
                </span>
              </u-animate>
            </u-animate-container>
          </v-flex>
           <v-flex order-sm3 order-xs4 xs12 sm6 md6 lg6 v-for="person in team1" :key="person.text">
            <u-animate-container>
              <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                :begin="false">
                <v-card style="background-color: rgba(0,0,0,0)" flat class="text-xs-center">
                  <v-responsive>
                    <v-img :src="person.avatar" style="height:auto;width:auto"></v-img>
                  </v-responsive>
                </v-card>
              </u-animate>
            </u-animate-container>
            <u-animate-container>
              <u-animate name="fadeInLeft" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                :begin="false">
                <v-layout row justify-center>
                  <v-dialog height="auto">
                    <template v-slot:activator="{ on }">
                      <v-btn :color="person.color" dark v-on="on" round style="width:300px;"
                        class="font-weight animated pulse infinite">详细介绍</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{person.text_tittle}}</span>
                      </v-card-title>
                      <v-card-text class="font-weight">
                        {{ person.text1 }}
                        <br />
                        <br />
                        {{person.text2}}
                        <br />
                        <br />
                        {{person.text3}}
                        <br />
                        <br />
                        {{person.text4}}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text class="text-xs-right">
                          <br />点击弹框外返回
                          <v-icon>mouse</v-icon>
                        </v-card-text>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-layout>
              </u-animate>
            </u-animate-container>
          </v-flex> 
           <v-flex order-sm4 order-xs3 xs12 sm6 md6 lg6 style="text-align: center;" class="pt-5 pb-5">
            <u-animate-container>
              <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                :begin="false">
                <h1 class="display-1 mb-3">
                  <v-icon x-large dark color="green darken-2">event</v-icon>
                  嬴证-你身边的考证助手
                </h1>
                <h1 class="display-1 mb-3">考证助手</h1>
                <br>
                <span class="headline font-wight-thin mb-3">荣获2020高校微信小程序开发大赛华南赛区二等奖</span>
                <br>
                <span class="headline font-wight-thin">
                  <v-icon class="animated jello infinite">navigate_before</v-icon>
                  技术项目展示
                  <v-icon class="animated jello infinite">navigate_before</v-icon>
                </span>
              </u-animate>
            </u-animate-container>
          </v-flex> 
    <v-flex order-sm6 order-xs6 xs12 sm6 md6 lg6 v-for="person in team2" :key="person.text">
            <u-animate-container>
              <u-animate name="fadeInRight" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                animateClass="animated" :begin="false">
                <v-card style="background-color: rgba(0,0,0,0)" flat class="text-xs-center">
                  <v-responsive>
                    <v-img :src="person.avatar" style="height:auto;width:auto"></v-img>
                  </v-responsive>
                </v-card>
              </u-animate>
            </u-animate-container>
             <v-layout row justify-center>
              <v-dialog height="auto">
                <template v-slot:activator="{ on }">
                  <v-btn
                    :color="person.color"
                    dark
                    v-on="on"
                    round
                    style="width:300px;"
                    class="font-weight"
                  >详细介绍</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{person.text_tittle}}</span>
                  </v-card-title>
                  <v-card-text class="font-weight">
                    {{ person.text1 }}
                    <br />
                    <br />
                    {{person.text2}}
                    <br />
                    <br />
                     {{person.text3}}
                    <br />
                    <br />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-card-text class="text-xs-right">
                      <br />点击弹框外返回
                      <v-icon>mouse</v-icon>
                    </v-card-text>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout> 
          </v-flex>
 
         
          
          <!-- 新增 -->

          <!-- <v-flex order-sm5 order-xs5 xs12 sm6 md6 lg6 style="text-align: center;" class="pb-5 pt-5">
            <u-animate-container>
              <u-animate name="fadeInLeft" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                :begin="false">
                <h1 class="display-1 mb-3">
                  <v-icon x-large dark color="green darken-2">gavel</v-icon>
                  未开发项目
                </h1>
                <h1 class="display-1 mb-3"> 等待你来开发建设</h1>
              </u-animate>
            </u-animate-container>
          </v-flex> -->

  
        </v-layout>

       

        <v-layout row wrap justify-end>
          <v-flex xs12 md6>
            <v-dialog height="auto">
              <v-card>

              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
        <!-- <br>
        <br>
        <h1 class="black--text font-weight text-xs-right display-1">
          <v-icon large color="green darken-2">business</v-icon>团 队 介 绍
        </h1> -->


        <v-card flat class="black--text mt-5" style="background-color: rgba(0, 0, 0, 0);">
          <u-animate-container>
            <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
              :begin="false">
              <v-card-title class="font-weight-thin display-1 red--text">
                <v-icon large color="green darken-2">business</v-icon>
                团队介绍
              </v-card-title>
              <v-divider light></v-divider>
            </u-animate>
          </u-animate-container>
          <v-flex xs12 sm12 md12 lg12>
            <v-container grid-list-lg>
              <v-layout justify-center wrap>
                <v-flex xs12 sm6 md6 lg6>
                  <u-animate-container>
                    <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                      animateClass="animated" :begin="false">
                      <div>
                        <br />
                        <div class="font-wight-thin display-1 text-xs-center">软件研发团队成员</div>
                        <br />
                        <p>软件研发团队由广东白云学院大数据与计算机学院18、19级学生组成一支团队，团队的背后有着深圳锐腾科技有限公司的技术。</p>
                        <p>我们的团队是由该二级学院的各个专业的学生所组成。不同专业的学生发挥不同的技术水平，实现更多的有趣功能呈现给大家。</p>
                        <p>前端前台开发成员：张洁 李凯诚 杨彦辉;</p>
                        <p>前端后台开发成员：杨彦辉 李凯诚 郭子乐 周梓铭;</p>
                        <p>Java Spring Boot后端开发成员:谭立进 唐海峰 沈灵威;</p>
                        <p>全新、较流行的开发知识，代码的每一行每一步都为自己学习自己实践，目前还有一些功能尚未开发，仍在继续努力开发中！</p>
                      </div>
                      <br />
                      <div class="text-xs-right">
                        <span class="black--text headline">
                          {{ new Date().getFullYear() }}/{{ new Date().getMonth() + 1 }}/{{ new Date().getDate() }}
                        </span>
                      </div>
                    </u-animate>
                  </u-animate-container>
                </v-flex>
                <v-flex xs12 sm6 md6 lg6>
                  <u-animate-container>
                    <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                      animateClass="animated" :begin="false">
                      <v-img src="/index_img/baiyun.jpg" height="auto" width="auto" contain></v-img>
                    </u-animate>
                  </u-animate-container>
                </v-flex>
              </v-layout>
              <!-- <v-divider light></v-divider> -->
            </v-container>
          </v-flex>
        </v-card>

        <u-animate-container>
          <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
            :begin="false">
            <p class="black--text text-xs-center mt-5">
              <v-icon large color="blue darken-2">backup</v-icon>
              <span class="font-wight-thin display-1">程序猿的得力助手</span>
            </p>
            <v-divider light></v-divider>
          </u-animate>
        </u-animate-container>

        <v-flex xs12 sm12 md12 lg12>
          <u-animate-container>
            <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
              :begin="false">
              <v-card flat v-model="active" style="max-width: auto; margin: auto;background-color: rgba(0, 0, 0, 0);"
                class="text-xs-center">
                <v-layout wrap justify-center>
                  <v-flex xs12 sm2>
                    <v-btn color="light" large flat href="http://www.baidu.com">
                      <v-img width="8rem" src="/jpg/logo_top_86d58ae1.png.jpg"></v-img>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm2>
                    <v-btn color="light" large flat href="https://www.githubs.cn/">
                      <v-img width="4.5rem" src="/jpg/300.png"></v-img>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm2>
                    <v-btn color="light" large flat href="https://www.csdn.net">
                      <v-img width="8rem" src="/jpg/8e9410faedeefdf258b9acc6140fed0f.jpg"></v-img>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm2>
                    <v-btn color="light" large flat href="https://www.cnblogs.com/">
                      <v-img width="8rem" src="/jpg/logo_small.gif.jpg"></v-img>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm2>
                    <v-btn color="light" large flat href="https://www.imooc.com/">
                      <v-img width="8rem" src="/jpg/logo.jpg"></v-img>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm2>
                    <v-btn color="light" large flat href="https://docs.gitlab.com/">
                      <v-img width="4.5rem" src="/jpg/3b5364abfce2819887f589ec45a0cc2.png"></v-img>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm2>
                    <v-btn color="light" large flat href="https://www.runoob.com/">
                      <v-img width="8rem" src="/jpg/d20092ed47c05893be6123cf9680fff.png"></v-img>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card>
            </u-animate>
          </u-animate-container>
        </v-flex>
      </v-container>
    </div>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        active: false,
        items: [{
            src: "/img/banner/1.jpg"
          },
          {
            src: "/img/banner/4.jpg"
          },
          {
            src: "/img/banner/3.jpg"
          },
          {
            src: "/img/banner/5.jpg"
          },
          {
            src: "/img/banner/2.jpg"
          }
        ],
        team: [{
          tittle: "软件研发团队官网",
          text_tittle: "白云学院软件研发团队官方网站项目",
          text1: "该项目完成时间为2个月，是为团队的成立奠定基础，开发者们边学边实战，不断修复更新",
          text2: "*前端前台由 Vuetify UI 框架1.5版本 编写开发。相关了解资源网站：https://next.vuetifyjs.com/zh-Hans",
          text3: "*前端后台由 Element UI 框架 编写开发。相关了解资源网站：https://element.eleme.cn/#/zh-CN",
          text4: "*后端开发语言由 Python编写开发",
          color: "red lighten-2",
          avatar: "/index_img/rx.png"
        }, ],
        team1: [{
          tittle: "“遇音-定制专属您的声音”平台",
          text_tittle: "遇音-定制专属您的声音",
          text1: "使用原生web技术进行搭建，自研前端样式框架，后端采用PHP开发语言，项目地址：http://101.37.23.173/music/",
          text2: "·2020年荣获广东省大学生计算机设计大赛三等奖",
          text3: "·2020年荣获2020（第13届）中国大学生计算机设计大赛国家三等奖",
          text4: "·开发成员：谭立进 汤臻婷",
          color: "blue lighten-2",
          avatar: "/index_img/music.jpg"
        }, ],
        team2: [{
          tittle: "嬴证-你身边的考证助手",
          text_tittle: "嬴证-你身边的考证助手",
        color: "blue lighten-2",
          text1: "使用微信小程序开发工具，项目前端已经开源，具体请添加wx:biu985037983进行体验或学习",
          text2: "·2020年荣获高校微信小程序开发大赛华南赛区二等奖",
          text3: "·开发成员：谭立进",
          avatar: "/index_img/yz.jpg"
        }, ]
      };
    },
    methods: {
      more_info() {
        this.$router.push({
          path: "/joinus"
        });
      }
    }
  };
</script>

<style scoped>
  /* 自定义轮播图轮播样式 */
  .banner-fade-enter-active,
  .banner-fade-leave-active {
    transition: all 2s cubic-bezier(0.2, 0.6, 0.1, 1);
  }

  .banner-fade-enter,
  .banner-fade-leave-to {
    transform: scale(1.5);
    opacity: 0;
  }
</style>