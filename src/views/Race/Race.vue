<template>
  <div>
    <!-- 轮播 -->
    <v-carousel delimiter-icon="data_usage" interval="3000" :height="`${$vuetify.breakpoint.height*4/5}`" id="show"
      class="hidden-md-and-down">
      <v-carousel-item v-for="(carousels,i) in carousels" :key="i" :src="carousels.src"></v-carousel-item>
    </v-carousel>

    <!-- 比赛详情 -->
    <v-container style="padding-top: 0;">
      <v-layout row wrap>
        <v-flex xs12>
          <br /><br /><br />
          <!-- <v-card flat> -->
          <!-- <v-card-title>
                            <p class="display-1 success--text mt-3">比赛详情</p>
                            <v-btn @click="$vuetify.goTo(0)" to="/morerace" class="primary" style="position: absolute; right: 10px; top: 12px ;">查看更多比赛信息</v-btn>
                        </v-card-title> -->
          <!-- <v-layout row wrap>
                                <v-flex xs12 md6>
                                    <p class="headline red--text ml-4  mt-2">校级比赛</p>
                                    <v-timeline dense class="ml-2">
                                        <v-slide-x-reverse-transition
                                            group
                                            hide-on-leave
                                        >
                                            <v-timeline-item
                                                v-for="race in by_races"
                                                :key="race.title"
                                                :color="race.color"
                                                small
                                                fill-dot
                                            >
                                            <div>
                                                <u-animate-container>
                                                    <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                                        <v-card height=auto flat hover color='rgba(0, 0, 0, 0)' :href="race.to" class="hov">
                                                            <a>
                                                                {{ race.title }}
                                                            </a><br />
                                                        </v-card> 
                                                    </u-animate>
                                                </u-animate-container>
                                            </div>
                                            </v-timeline-item>
                                        </v-slide-x-reverse-transition>
                                    </v-timeline>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <p class="headline red--text ml-4 mt-2">国家级比赛</p>
                                    <v-timeline dense class="ml-2">
                                        <v-slide-x-reverse-transition
                                            group
                                            hide-on-leave
                                        >
                                            <v-timeline-item
                                                v-for="race in ctr_races"
                                                :key="race.title"
                                                :color="race.color"
                                                small
                                                fill-dot
                                            >
                                                <u-animate-container>
                                                    <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                                        <v-card height=auto flat hover color='rgba(0, 0, 0, 0)' :href="race.href" target="_blank" class="hov">
                                                            <a>
                                                                {{ race.title }}
                                                            </a><br />
                                                        </v-card> 
                                                    </u-animate>
                                                </u-animate-container>
                                            </v-timeline-item>
                                        </v-slide-x-reverse-transition>
                                    </v-timeline>
                                </v-flex>
                            </v-layout> -->
          <!-- </v-card> -->
          <!-- 最新赛事 -->
          <!-- <v-card flat> -->
          <br />
          <v-card-title>
            <span class="display-1 success--text">最新赛事</span>
          </v-card-title>
          <!-- <v-card flat> -->
          <v-layout row wrap>
            <v-flex xs12 md6 pa-3 v-for="card in cards" :key="card.head">
              <u-animate-container>
                <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
                  :begin="false">
                  <v-img :src="card.src" aspect-ratio="2.75" class="mb-3" style="border-radius: 10px;"></v-img>
                </u-animate>
              </u-animate-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <u-animate-container>
                    <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                      animateClass="animated" :begin="false">
                      <span class="headline">{{ card.head}}</span><br /><br />
                      <span>{{ card.text }}</span><br />
                    </u-animate>
                  </u-animate-container>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 md6>
                  <u-animate-container>
                    <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                      animateClass="animated" :begin="false">
                      <br />
                      <span class="red--text">{{ card.date }}</span>
                    </u-animate>
                  </u-animate-container>
                </v-flex>
                <v-flex xs12 md6>
                  <u-animate-container>
                    <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                      animateClass="animated" :begin="false">
                      <v-btn flat class="primary right" :href='card.to' target="_blank">点击查看详情
                      </v-btn>
                    </u-animate>
                  </u-animate-container>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <!-- </v-card> -->
          <!-- </v-card> -->
          <!-- 日历 -->
          <br /> <br />
          <u-animate-container>
            <u-animate name="fadeInLeft" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
              :begin="false">
              <p class="display-1 pl-3 animated bounce infinite">比赛日程</p>
            </u-animate>
          </u-animate-container>
          <v-app>
            <v-layout wrap>
              <v-flex xs12 class="mb-3">
                <u-animate-container>
                  <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0"
                    animateClass="animated" :begin="false">
                    <v-toolbar flat color="primary">
                      <span class="white--text headline">{{ new Date().getFullYear() }} 年
                        {{ new Date().getMonth() + 1 }} 月 {{ new Date().getDate() }} 日</span>
                    </v-toolbar>
                    <v-sheet height="500">
                      <v-calendar ref="calendar" :now="today" :value="today" v-model="start" :type="type" :end="end"
                        color="blue">
                        <template v-slot:day="{ date }">
                          <template v-for="event in eventsMap[date]">
                            <v-menu :key="event.title" v-model=flase full-width offset-x>
                              <template v-slot:activator="{ on }">
                                <div v-if="!event.time" v-ripple class="my-event" v-on="on" v-html="event.title"></div>
                              </template>

                              <v-card flat>
                                <v-toolbar color="primary" dark>
                                  <v-btn icon>
                                    <v-icon>favorite</v-icon>
                                  </v-btn>
                                  <v-toolbar-title v-html="event.id+event.title">
                                  </v-toolbar-title>
                                </v-toolbar>

                                <v-card-title primary-title>
                                  <span v-html="event.details"></span>
                                </v-card-title>

                                <v-card-actions>
                                  <v-btn flat class="primary">关闭</v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-menu>
                          </template>
                        </template>
                      </v-calendar>
                    </v-sheet>
                  </u-animate>
                </u-animate-container>
              </v-flex>

              <v-flex sm4 xs12 class="text-sm-left text-xs-center">
                <v-btn @click="$refs.calendar.prev()" class="primary animated pulse infinite">
                  <v-icon dark left>keyboard_arrow_left</v-icon>上一个月
                </v-btn>
              </v-flex>

              <v-menu ref="startMenu" v-model="startMenu" :close-on-content-click="false" :nudge-right="40"
                :return-value.sync="date" transition="scale-transition" min-width="290px" lazy offset-y full-width>
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="start" label="年月日" prepend-icon="event" readonly v-on="on">
                  </v-text-field>
                </template>
              </v-menu>

              <v-spacer></v-spacer>
              <v-flex sm4 xs12 class="text-sm-right text-xs-center">
                <v-btn @click="$refs.calendar.next()" class="primary animated pulse infinite">
                  下一个月
                  <v-icon right dark>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-app>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: false,
        startMenu: false,
        type: "month",
        selectedOpen: false,
        start: new Date().toISOString().substr(0, 10),
        end: null,
        today: new Date().toISOString().substr(0, 10),
        show: false,
        //   轮播图
        carousels: [{
            src: 'race_img/case4.jpg'
          },
          {
            src: '/race_img/english.png'
          },
          {
            src: '/race_img/internetplus.jpg'
          }
        ],
        /*by_races: [
            {
                title: '【广东白云学院2018年辅导员素质能力大赛】',
                color: 'orange',
                to: '/content1',
            },
            {
                title: '【广东白云学院五四运动100周年红歌比赛】',
                color: 'pink',
                to: '/content2',
            },
            {
                title: '【第三季《中国新歌声》全国校园海选广州赛区总决赛】',
                color: 'purple',
                to: '/content3',
            },
            {
                title: '【广东白云学院举行首届思维导图设计比赛】',
                color: 'indigo',
                to: '/content4',
            },
        ],
        ctr_races: [
            {
                title: '【2019程序设计赛】',
                color: 'blue',
                href: 'http://www.ncccu.org.cn/case4.html',
            },
            {
                title: '【2019人工智能算法赛】',
                color: 'cyan',
                href: 'http://www.ncccu.org.cn/case2.html',
            },
            {
                title: '【2019大数据算法赛】',
                color: 'teal',
                href: 'http://www.ncccu.org.cn/case1.html',
            },
            {
                title: '【2019全国高校创新英语挑战赛】',
                color: 'lime',
                href: 'http://www.nciecc.com/',
            },
        ],*/
        cards: [{
          src: '../race_img/c3_pic1.png',
          head: '大数据算法大赛',
          text: '大数据算法大赛',
          date: '2020/9/10',
          to: 'http://www.ncccu.org.cn/case1.html',
        }],
        events: [{
          id: '1',
          title: '软协官网测试',
          details: '软协官网比赛界面的赛程日历测试',
          date: '2020-09-10',
          open: '',
        }],
      }
    },
    mounted: function () {
      this.$axios.get('http://47.102.85.201:1920/query_race_date')
        .then(response => {
          console.log(response.data);
          this.events = response.data;
        })
        .catch(error => {
          console.log(error);
        })
      this.$axios.get('http://47.102.85.201:1920/query_race')
        .then(response => {
          console.log(response.data);
          this.cards = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap() {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    methods: {
      open(event) {
        alert(event.title)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .hov {
    line-height: 35px;
    height: 20px;
  }

  .hov:hover {
    text-decoration: underline;
  }

  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>