<template>
  <div>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" id="signup-style"
      :height="`${$vuetify.breakpoint.height}`">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="red">
                <v-toolbar-title>
                  <v-icon>assignment_ind</v-icon>
                  注册页面
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="用户名" type="text"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" label="邮箱" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="密码" type="password">
                  </v-text-field>
                  <v-text-field id="password-again" prepend-icon="lock_open" name="password" label="确认密码"
                    type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary--text" round block>注册账号</v-btn>
                <v-btn flat color="info" to="/login" title="如已有账号，请登录">已有账号</v-btn>

              </v-card-actions>
            </v-card>
            <br />
            <!-- <h1 class="display-1 font-weight text-xs-center yellow--text">正在维护中。。。</h1> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  #signup-style {
    height: 600px;
    width: 100%;
    top: 10%;
    position: relative;
  }
</style>