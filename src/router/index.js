import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "@/views/LoginPage.vue"
import SignUpPage from "@/views/SignUpPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/SignUp",
    component: SignUpPage,
  },

]

const router = new VueRouter({
  routes
})

export default router
