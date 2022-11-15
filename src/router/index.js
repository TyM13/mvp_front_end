import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "@/views/LoginPage.vue"
import SignUpPage from "@/views/SignUpPage.vue"
import ProfilePage from "@/views/ProfilePage.vue"

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
  {
    path: "/Profile-Page",
    component: ProfilePage,
  },
]

const router = new VueRouter({
  routes
})

export default router
