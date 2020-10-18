<template>
  <v-btn slot="activator" color="blue" dark fab samll fixed style="top: 83%;right: 1%;" @click="$vuetify.goTo(0)"
    v-if="btnFlag">
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</template>

<script>
  export default {
    data() {
      return {
        btnFlag: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)
    },
    methods: {
      scrollToTop() {
        const that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 100) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      }
    }
  }
</script>