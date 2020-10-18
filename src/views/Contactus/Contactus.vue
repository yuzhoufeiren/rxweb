<template>
  <div id="big">
    <v-form ref="form" v-model="valid" lazy-validation>
      <div id="first">
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="姓名" required></v-text-field>

        <v-radio-group>
          <v-radio v-for="(colorValue, i) in ['男', '女']" :key="i" :color="colorValue" :label="colorValue"
            :value="colorValue" class="sex"></v-radio>
        </v-radio-group>
        <v-text-field v-model="num" :counter="11" :rules="numRules" label="联系方式" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="邮箱" required></v-text-field>

        <v-text-field v-model="professional" :rules="professionalRules" label="学院-专业-班级" required></v-text-field>

        <v-text-field v-model="room" label="公寓(选填)" required></v-text-field>
        <v-text-field v-model="l" label="楼栋（选填）" required></v-text-field>

        <v-container fluid grid-list-md>
          <v-textarea name="input-7-1" filled label="申请理由" auto-grow></v-textarea>

          <v-textarea name="input-7-2" filled label="电脑水平以及操作经验" auto-grow></v-textarea>
        </v-container>

        <v-checkbox v-model="checkbox" :rules="[v => !!v || '请继续填写!']" label="确定提交?" required auto-grow></v-checkbox>

        <v-btn :disabled="!valid" color="primary--text" class="mr-4" @click="validate">
          提交
        </v-btn>

        <v-btn color="primary--text" class="mr-4" @click="reset">
          清除
        </v-btn>

      </div>

    </v-form>
  </div>
</template>
<style>
  #big {
    width: auto;
    height: 1030px;
    border: 5px solid slategrey;
    margin: 0px auto;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: azure;
  }

  #first {
    background-color: azure;
    width: auto;
    height: 1010px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>

<script>
  export default {
    data: () => ({
      room: "",
      l: "",
      checkbox: "",
      professional: "",
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '姓名必填',
        v => (v && v.length <= 10) || '姓名少于10个字',
      ],
      email: '',
      emailRules: [
        v => !!v || '邮箱必填',
        v => /.+@.+\..+/.test(v) || '邮箱需要有用的',
      ],
      professionalRules: [
        v => !!v || '必填',

      ],
      sexlRules: [
        v => !!v || '性别必选',

      ],
      num: '',
      numRules: [
        v => !!v || '联系方式必填',
        v => (v && v.length <= 11) || '号码少于11个数字',
      ],
    }),

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>