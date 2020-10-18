<template>
  <v-footer height="auto" style="background-color: rgba(0, 0, 0, 0);">
    <v-layout justify-center row wrap>
      <v-flex black lighten-1 py-3 text-xs-center grey--text xs12>
        <v-container style="padding: 0 0 0 0;">
          <v-layout wrap>
            <v-flex xs12 sm3></v-flex>
            <v-flex xs12 sm6 style="margin-top: 3rem;;">
              <p>
                西校区地址：广东省广州市白云区江高镇学苑路1号
                <br />
                <br />北校区地址：广州市白云区钟落潭镇九佛西路280号
                <br />
                <br />邮政编码：510450
              </p>
            </v-flex>
            <v-flex xs12 sm3>
              <v-container grid-list-lg>
                <v-layout justify-center wrap>
                  <v-flex xs4 sm6 style="background-size: contain;">
                    <div><img src="/footer_img/qrcode.jpg" width="115px" height="115px"
                        style="margin: 0 auto;object-fit: cover;" /></div>
                    <span class="body-2">扫描关注我们</span>
                  </v-flex>
                  <v-flex xs4 sm6>
                    <div><img src="/footer_img/gzh.png" width="115px" height="115px" style="margin: 0 auto;" /></div>
                    <span class="body-2">扫描关注学院</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
        &copy; {{ new Date().getFullYear() }} —
        <strong>广东白云学院软件研发团队</strong><br>
        <a href="http://www.beian.miit.gov.cn" target="_blank"
          style="text-decoration: none; color: #909090;">粵ICP备19119945号-1</a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {

  };
</script>