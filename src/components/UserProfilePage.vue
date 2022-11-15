<template>
  <div>
    <!-- contains username and slide menu for post, and logout for now-->
    <header></header>
    <!--contains profile photo. maybe num of posts. followed-by, following, bio, edit profile button-->
    <section v-for="(usr_info, index) in user_info" :key="index">
      <h2>Bio</h2>
      <!-- <h4>{{ usr_info["bio"] }}</h4> -->
    </section>
    <!-- contains all the user's posts-->
    <section></section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data: () => ({
    user_info: [],
  }),

  mounted() {
    let user_id = cookies.get("user_id");
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
        params: {
          user_id: user_id,
        },
      })
      .then((response) => {
        this.user_info = response["data"];
        response;
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>