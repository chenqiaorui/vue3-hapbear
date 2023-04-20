import { createRouter, createWebHashHistory } from 'vue-router'

// 引入
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
        path: "/login",
        name: 'login',
        component: Login,
      }
  ]
})

export default router