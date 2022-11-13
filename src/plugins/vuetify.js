import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import LoginPage from "@/views/LoginPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
Vue.use(Vuetify);

export default new Vuetify({
    path: "/",
    component: LoginPage,
},
    {
        path: "/UserSignUp",
        component: SignUpPage,
    }
);
