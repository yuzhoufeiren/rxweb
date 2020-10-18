<template>
  <div ref="page" class="join">
    <v-parallax dark src="/img/head/1.jpg" :height="`${$vuetify.breakpoint.height*2/3}`">
      <v-layout align-center column justify-center class="animated flipInX delay-0.8s">
        <span class="display-2 font-weight-thin mb-1">加入我们</span>
        <span class="font-weight-thin subheading">JOIN US</span>
      </v-layout>
    </v-parallax>

    <v-container>
      <v-card>
        <v-card-title class="font-weight-thin display-1 red--text animated fadeInDown delay-0.8s">ABOUT US
        </v-card-title>
        <h5 class="headline font-weight text-xs-center animated fadeInRight delay-0.8s">广东白云学院软件研发团队</h5>
        <br />
        <v-flex xs12 sm8 style="margin: 0 auto;" class="animated fadeInLeft delay-0.8s">
          <v-card-text class="font-weight subheading">
            <p>于2019年9月在广东白云学院正式成立</p>
            <p>
              ----团队走普及最新的编程知识和培养IT人才的发展道路，成立各学习小组、组成实践开发团队，参加全国竞赛活动，开展学术交流和技术指导，为广大师生学习及提高编程水平提供学习平台，同时为普及计算机知识，提高相关技术人员编程水平，促进软件编程热潮的形成做出了贡献。打造为一个技术成熟的程序员。
            </p>
            <p>----团队成立之初对全学院发起征召，分为两个方向加入：</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术成员方向：对 web开发、Python、Java、C#、C++、PHP等一种或多种语言 有了解或有兴趣热爱编程的同学 欢迎加入我们！</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文案成员方向：写作能力不错，对公众号运营及撰写推文有兴趣，想成为比赛团队的一份子写参赛文档，熟悉图片制做管理的同学 欢迎加入我们！</p>
 <p><a  target="_blank" href="/video/qd.mp4">什么是前端？</a></p>
   <p><a  target="_blank" href="https://baike.baidu.com/item/%E5%90%8E%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88">什么是后端？</a></p>  
    <v-flex xs9 sm9 style="text-align: center;margin: 0 auto;">
          <img src="/joinus_img/jg.png" width="110%" />
          <div><span>扫一扫或长按二维码关注我们</span></div>
        </v-flex>       
          </v-card-text>
        </v-flex>
        <u-animate-container>
          <u-animate name="fadeInUp" delay="0.2s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
            :begin="false">
            <v-flex xs12 sm8 style="margin: 0 auto;" class="mt-5">
              <v-card flat>
                <v-card-title>
                  <span class="headline">加入申请</span>
                </v-card-title>
                <v-card-text>
                  <v-form ref="form" v-model="valid" validation>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm4>
                          <v-text-field label="所在学院*" hint="请填写所在学院" placeholder="例：大数据与计算机学院" required
                            v-model="params.college" :rules="professionalRule"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm4>
                          <v-text-field label="所在班级*" hint="请填写所在班级" placeholder="例：B18软件工程1班" required
                            v-model="params.grade" :rules="professionalRule"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm4>
                          <v-text-field label="学号*" hint="请填写学号" placeholder="例：15230203XXX" required
                            v-model="params.student_number" :rules="professionalRule"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field label="姓名*" hint="请填写真实姓名" placeholder="例：黄XX" required v-model="params.name"
                            :rules="nameRules"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-select :items="['男','女']" label="性别*" hint="请选择性别" required v-model="params.sex"
                            :rules="sexRules"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field label="联系方式*" hint="建议填写本人手机号码" required v-model="params.number" :counter="11"
                            :rules="numRules"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm7>
                          <v-select :items="['前端', '后端', '全栈', 'UI设计', '图片制作管理','文档编辑','公众号运营']" label="请选择方向*"
                            hint="请选择比较感兴趣的方向" persistent-hint required v-model="params.direction"
                            :rules="professionalRules"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6>
                          <v-select
                            :items="['NO', 'HTML5', 'CSS3', 'jQuery','JavaScript', 'TypeScript', 'VUE', 'Angular', 'React', 'Other']"
                            label="接触或想学习的前端技术*" hint="暂无请选择“NO”" persistent-hint multiple required
                            v-model="params.technology" :rules="professionalRules"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 center>
                          <v-autocomplete :items="['NO', 'C', 'C#', 'C++', 'JAVA', 'PHP', 'Python', 'Other']"
                            label="接触或想学习的语言*" hint="暂无请选择“NO”" persistent-hint multiple required
                            v-model="params.htechnology" :rules="professionalRules"></v-autocomplete>
                        </v-flex>
                        <v-flex xs12 sm12 class="mt-3">
                          <v-textarea name="input-7-4" label="备注" hint="请发表畅所欲言" v-model="params.remark"></v-textarea>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
                  <v-card-actions style="width: 50%;margin: 0 auto;" class="pb-3" @click="validate">
                    <v-btn color="success" large ripple round block @click="submit" :disabled="!valid">加入我们</v-btn>
                  </v-card-actions>
                  <span>*关于更多请关注公众号：gh_410a5a28e749</span>
                </v-card-text>
                <v-layout justify-center class="pb-5">
                  <v-flex xs9 sm3 style="text-align: center;">
                    <div class="animated jackInTheBox delay-0.8s"><img src="/joinus_img/qrcode.jpg" /></div>
                    <span>扫一扫或长按二维码关注我们</span>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </u-animate>
        </u-animate-container>
      </v-card>

      
      
    </v-container>

    <v-dialog v-model="dialogloading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogsuccess" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{ params.name }} 同学你好</v-card-title>
        <v-card-text>敬请关注公众号，第一次面试时间通知将通过公众号推送！</v-card-text>
        <v-flex xs9 sm9 style="text-align: center;margin: 0 auto;">
          <img src="/joinus_img/qrcode.jpg" />
          <div><span>软件协会架构</span></div>
        </v-flex>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialogsuccess = false, reset()">明白</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-flex xs12 sm12 style="position: fixed;bottom: 0;right: 0;left: 0;margin:0 auto;">
      <v-alert :value="err" type="error" transition="slide-y-reverse-transition">
        网络出错，请重试！
      </v-alert>
    </v-flex>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
  export default {
    name: 'join',
    data() {
      return {
        err: false,
        dialogloading: false,
        dialogsuccess: false,
        params: {
          college: '',
          grade: '',
          student_number: '',
          sex: '',
          name: '',
          number: '',
          direction: '',
          technology: '',
          htechnology: '',
          remark: ''
        },
        nameRules: [
          v => !!v || '姓名必填',
        ],
        numRules: [
          v => !!v || '联系方式必填',
          v => (v && v.length <= 11) || '号码少于11个数字',
        ],
        professionalRule: [
          v => !!v || '必填',
        ],
        professionalRules: [
          v => !!v || '请至少选中一个',
        ],
        sexRules: [
          v => !!v || '性别必选',
        ],
        valid: true,
      };
    },
    methods: {
      //   onClick() {
      //   this.$axios.post('http://127.0.0.1:5000/', this.params)
      //  .then(function(data) {
      //                   console.log(data);
      //                   alert(JSON.stringify(data.data));
      //               })
      //               .catch(function(error){
      //                   console.log(error);
      //               })
      //   },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },

      reset() {
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
        this.$router.push({
          path: '/'
        })
        this.$vuetify.goTo(0, 600)
      },

      // 提交加入表单
      submit() {
        this.dialogloading = true
        const data = {
          methods: 'add',
          params: this.params
        }
        this.$axios.post('http://116.62.61.152:8086/sams/joinus/doJoinUs', this.params)
          .then((res) => {
            setTimeout(() => {
              this.dialogloading = false
              this.dialogsuccess = true
            }, 1000);
          })
          .catch((err) => {
            this.err = true;
            setTimeout(() => {
              this.err = false;
              this.dialogloading = false
            }, 3000);
          })
      }
    }
  };
</script>