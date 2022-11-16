<template>
  <div>
    <section ref="create_account" class="create_account_container">
      <h1 class="title_container">MVP</h1>
      <div>
        <v-text-field
          ref="email"
          label="Email"
          :rules="rules"
          v-model="email"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          ref="name"
          label="Name"
          :rules="rules"
          v-model="name"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          ref="username"
          label="Username"
          :rules="rules"
          v-model="username"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          ref="password"
          label="Password"
          :rules="rules"
          v-model="password"
          hide-details="auto"
        ></v-text-field>
      </div>

      <v-btn class="ma-2" @click="user_sign_up" outlined color="black">
        <h2>Create Account</h2></v-btn
      >
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  methods: {
    user_sign_up() {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
          method: "POST",
          data: {
            // gets the value of the input of the email name, username and password to send as data to the api
            email: this.email,
            name: this.name,
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          // sets the token and user_id as a cookie when the user logs in and sends them to their profile page
          cookies.set(`token`, response[`data`][0][`token`]);
          cookies.set(`user_id`, response[`data`][0][`user_id`]);
          response;
          this.$router.push(`/Profile-Page`);
        })
        .catch((error) => {
          error;
        });
    },
  },
  // rules: saying that it requires the input boxes to be filled in
  // created the variable email name, username and password and set the value to undefined
  data: () => ({
    rules: [(value) => !!value || "Required."],
    email: undefined,
    name: undefined,
    username: undefined,
    password: undefined,
  }),
};
</script>

<style lang="scss" scoped>
.create_account_container {
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

.create_account_button {
  padding: 20px;
  margin-top: 40px;
  display: grid;
  align-self: center;
  box-shadow: 10px 10px rgb(240, 239, 239);
  background-color: rgb(214, 0, 0);
  border: black;
}
</style>