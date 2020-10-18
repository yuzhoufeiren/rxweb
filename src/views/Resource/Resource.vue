<template>
  <div class="green lighten-5">
    <v-parallax dark src="/img/head/1.jpg" :height="`${$vuetify.breakpoint.height*2/3}`">
      <v-layout align-center column justify-center class="animated flipInX delay-0.8s">
        <span class="display-2 font-weight-thin mb-1">资源</span>
        <span class="font-weight-thin subheading">RESOURCE</span>
      </v-layout>
    </v-parallax>

    <v-container>
      <v-layout>
        <h1 class="display-1 font-weight mb-2">
          <div class=" animated pulse infinite">
            <v-icon x-large color="orange darken-2">present_to_all</v-icon>获取资源
          </div>
        </h1>
      </v-layout>
      <v-layout row wrap class="white">
        <v-flex xs12 sm6 md6 lg6 v-for="person in team" :key="person.name" @click="$vuetify.goTo(0)">
          <v-card flat hover class="text-xs-center ma-4" color="grey lighten-3" :to="person.to">
            <v-responsive>
              <v-img height="auto" :src="person.avatar"></v-img>
            </v-responsive>

            <v-card-text class="pb-0">
              <h2 class="font-weight">{{ person.name }}</h2>
            </v-card-text>

            <v-card-actions class="pt-0">
              <div>
                <v-btn flat color="black" :to="person.to" @click="$vuetify.goTo(0)">
                  <v-icon small left>line_weight</v-icon>
                  <span style="color:black;">详情</span>
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: [{
            name: "开发环境",
            avatar: "/resource_img/avater-7.jpg",
            to: "/resource/DevelopmentTool"
          },
          {
            name: "技术视频",
            avatar: "/resource_img/avater-4.jpg",
            to: "/resource/Video"
          },
          {
            name: "系统维护",
            avatar: "/resource_img/avater-1.jpg",
            to: "/resource/Maintain"
          },
          {
            name: "数据开发",
            avatar: "/resource_img/avater-11.jpg",
            to: "/resource/Data"
          },
          {
            name: "Adobe全家桶",
            avatar: "/resource_img/avater-9.jpg",
            to: "/resource/Adobe"
          },
          {
            name: "其他软件",
            avatar: "/resource_img/avater-3.jpg",
            to: "/resource/OtherSoftware"
          }
        ]
      }
    }
  }
</script>