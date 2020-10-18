<template>
  <div id="all" style="margin-top: 80px;">
    <ul style="padding:0;">
      <table class="table" v-for="project in team" :key="project.id">
        <tbody>
          <tr>
            <td>
              <b>
                <v-icon>save_alt</v-icon>
              </b>
              <a :href="project.http" target="_blank"><b>{{project.id}}.{{project.name}}</b></a>
            </td>
          </tr>
          <tr>
            <td style="color: grey; font-size: 15px;">
              &nbsp; &nbsp; &nbsp; &nbsp;{{project.create_time}}&nbsp; &nbsp;<span
                style="color:darkred;">百度云提取码:{{project.anothername}}</span>
            </td>
          </tr>
          <tr>
            <td class="detail" style="display:block; margin-left:10px;">
              {{project.detail}}
            </td>
          </tr>
        </tbody>
      </table>
    </ul>
  </div>
</template>

<style>
  #all {
    margin: 0 auto;
    width: 80%;
    height: auto;
  }

  .table {
    border: 1px solid #000;
    width: 100%;
    height: 120px;
  }

  .table:hover {
    box-shadow: 10px 10px 5px #888888;
  }

  .table a {
    color: #000;
    text-decoration: none;
    font-size: 17px;
  }

  .table a:hover {
    text-decoration: underline;
  }

  .detail {
    color: #000;
    font-size: 1.111em;
  }
</style>

<script>
  export default {
    // methods: {
    //     jump () {
    //     this.$router.push( {path: '/resource'} )
    //     }
    // },
    data() {
      return {
        team: [{
          id: "",
          name: "",
          http: "",
          create_time: "",
          anothername: "",
          detail: ""
        }]
      }
    },
    mounted: function () {
      this.$axios.get('http://47.102.85.201:1920/query_adobe')
        .then(response => {
          console.log(response.data);
          this.team = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>