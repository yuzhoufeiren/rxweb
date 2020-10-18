<template>
  <div>
    <v-parallax dark src="/img/head/1.jpg" :height="`${$vuetify.breakpoint.height*2/3}`">
      <v-layout align-center column justify-center class="animated flipInX delay-0.8s">
        <span class="display-2 font-weight-thin mb-1">动态</span>
        <span class="font-weight-thin subheading">DYNAMIC CONDITION</span>
      </v-layout>
    </v-parallax>
    <v-card style="max-width: 1180px; margin: auto;">
      <v-tabs color="blue lighten-1" dark slider-color="orange lighten-2">
        <v-tab v-for="tab in tabs" :key="tab.text">
          <v-icon left>{{ tab.icon }}</v-icon>{{ tab.text }}
        </v-tab>
        <v-spacer></v-spacer>
        <v-btn class="blue lighten-1" flat href="http://www.baiyunu.edu.cn/html/cn/baiyunxinwen/" target="_blank">
          <span>更多动态</span></v-btn>
        <!--校内热点-->
        <v-tab-item>
          <v-card flat>
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12 v-for="event in issue" :key="event.pic" class="pa-3">
                  <v-card color="cyan lighten-1" class="white--text">
                    <v-layout row wrap>
                      <v-flex xs12 md6>
                        <u-animate-container>
                          <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                            animateClass="animated" :begin="false">
                            <v-img :src="event.pic" contain></v-img>
                          </u-animate>
                        </u-animate-container>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-card-title primary-title>
                          <u-animate-container>
                            <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                              animateClass="animated" :begin="false">
                              <div>
                                <div class="headline">{{event.title}}
                                </div>
                                <br />
                                <!-- 分段 -->
                                <div>
                                  <p>&emsp;&emsp;{{event.text}}</p>
                                </div>
                              </div>
                            </u-animate>
                          </u-animate-container>
                        </v-card-title>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-tab-item>

        <!--协会发展-->
        <v-tab-item>
          <v-card flat>
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12 v-for="event in develop" :key="event.pic" class="pa-3">
                  <v-card color="green lighten-3" class="white--text">
                    <v-layout row wrap>
                      <v-flex xs12 md6>
                        <u-animate-container>
                          <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                            animateClass="animated" :begin="false">
                            <v-img :src="event.pic" contain></v-img>
                          </u-animate>
                        </u-animate-container>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-card-title primary-title>
                          <u-animate-container>
                            <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                              animateClass="animated" :begin="false">
                              <div>
                                <div class="headline" v-html="event.title">
                                </div>
                                <br />
                                <!-- 分段 -->
                                <div>
                                  <p v-html="event.text"></p>
                                </div>
                              </div>
                            </u-animate>
                          </u-animate-container>
                        </v-card-title>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabs: [{
            icon: 'mouse',
            text: '校园热点',
          },
          {
            icon: 'email',
            text: '团队发展',
          },
        ],
        // 校园热点
        issue: [{
          // card_color: '',
          title: "广东白云学院首届前端开发竞赛【一等奖】",
          text: "团队成员：谭立进",
          pic: "../resource_img/avater-1.jpg",
        },{
          // card_color: '',
          title: "广东白云学院首届网页设计训练【一等奖】",
          text: "团队成员：谭立进 汤臻婷",
          pic: "../resource_img/avater-1.jpg",
        },{
          // card_color: '',
          title: "2020中国大学生计算机设计大赛校内选拔赛【二等奖】",
          text:  "团队成员：谭立进 汤臻婷",
          pic: "../resource_img/avater-1.jpg",
        },{
          // card_color: '',
          title: "互联网+大学生创新创业大赛院级【一等奖】",
          text: "团队成员：谭立进 王思婷 吴国明 席淯岑 冯昊恩 蔡宝林",
          pic: "../resource_img/avater-1.jpg",
        },{
          // card_color: '',
          title: "2020中国计算机设计大赛国家级【三等奖】",
          text: "团队成员：谭立进 汤臻婷",
          pic: "../resource_img/2020jsj.jpg",
        },{
          // card_color: '',
          title: "广东省2020中国计算机设计大赛省级【三等奖】",
          text: "团队成员：谭立进 汤臻婷",
          pic: "../resource_img/2020jsj.jpg",
        },{
          // card_color: '',
          title: "2020高校小程序设计竞赛华南赛区【二等奖】",
          text: "团队成员：谭立进 ",
          pic: "../resource_img/2020xcx.jpg",
        } ],

        develop: [{
          title: "",
          text: "",
          pic: "",
        }, ],
      }
    },
    mounted: function () {
      this.$axios.get('http://47.102.85.201:1920/query_newevent')
        .then(response => {
          console.log(response.data);
          this.issue = response.data;
        })
        .catch(error => {
          console.log(error);
        })

      this.$axios.get('http://47.102.85.201:1920/query_teamevent')
        .then(response => {
          console.log(response.data);
          this.develop = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  };
</script>

<style lang="stylus" scoped>
  .hov {
    line-height: 35px;
    height: 20px;
  }

  .hov:hover {
    text-decoration: underline;
  }
</style>