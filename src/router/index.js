import Vue from 'vue'
import VueRouter from 'vue-router'
import Questions from '../views/questions.vue'
import Result from '../views/result.vue'
import Layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/question/:id?",
    children: [
      {
        path: '/question/:id?',
        name: "Question",
        component: Questions ,
      },
      {
        path: '/result',
        name: "Result",
        component: Result,
      },
     
    ],
  },
];
const router = new VueRouter({


  routes
})

export default router
