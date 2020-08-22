import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Graph from '../views/Graph.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/graph",
    name: "graph",
    component: Graph
  },
  {
    path: "/users",
    name: "users",
    component: Users
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
