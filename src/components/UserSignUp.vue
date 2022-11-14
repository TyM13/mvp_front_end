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
    user_sign_up(response) {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
          method: "POST",
          data: {
            email: this.$refs["email"]["value"],
            name: this.$refs["name"]["value"],
            username: this.$refs["username"]["value"],
            password: this.$refs["password"]["value"],
          },
        })
        .then((then) => {
          cookies.set(`token`, then[`data`][0][`token`]);
          cookies.set(`user_id`, then[`data`][0][`user_id`]);
          response;
          this.$router.push(`/`);
        })
        .catch((error) => {
          error;
        });
    },
  },

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