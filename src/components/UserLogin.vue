<template>
  <div class="info_container">
    <section ref="login_section" class="login-container">
      <h1 class="title_container">MVP</h1>
      <div>
        <v-text-field
          label="Email"
          :rules="rules"
          v-model="email"
          hide-details="auto"
        ></v-text-field>

        <v-text-field
          label="Password"
          v-model="password"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </div>
      <v-btn class="ma-2" @click="user_login" outlined color="black">
        <h2>Login</h2></v-btn
      >
    </section>
    <section class="sign_up_container">
      <nav>
        <h3>
          don't have an account? <router-link to="/SignUp">Sign Up</router-link>
        </h3>
      </nav>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  methods: {
    user_login() {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user-login`,
          method: "POST",
          data: {
            email: this.$refs["email"]["value"],
            password: this.$refs["password"]["value"],
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][0][`token`]);
          cookies.set(`user_id`, response[`data`][0][`user_id`]);
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },

  data: () => ({
    rules: [(value) => !!value || "Required."],
    email: undefined,
    password: undefined,
  }),
};
</script>

<style lang="scss" scoped>
.login-container {
  display: grid;
  align-self: center;
  box-shadow: 10px 10px rgb(240, 239, 239);
  background-color: #ffff;
  border: black;
}

.title_container {
  text-align: center;
  margin-bottom: 35px;
  font-size: xx-large;
}

.sign_up_container {
  padding: 20px;
  margin-top: 40px;
  display: grid;
  align-self: center;
  box-shadow: 10px 10px rgb(240, 239, 239);
  background-color: #ffff;
  border: black;
}
</style>