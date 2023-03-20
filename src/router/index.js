import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/main/HomePage/HomeView.vue'
import LayoutView from '../views/LayoutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/LayoutView',
    component: LayoutView,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: {
          isLoginView: true
        }

      },
      {
        path: 'params',
        name: 'params',
        component: () => import('../views/main/Params'),
        meta: {
          isLoginView: true
        }
      },
      {

        path: 'ad',
        name: 'ADCategory',
        component: () => import('../views/main/ADCategory.vue'),
        meta: {
          isLoginView: true
        }
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/main/product'),
        meta: {
          isLoginView: true
        }
      },
      
        {
          path:"details",
          name:"Details",
          component:() => import("../views/main/HomePage/sub/Details.vue"),
          children:[
            {
              path:"xx",
              name:"xx",
              component:() =>import("../views/main/HomePage/sub/xx.vue")
            },
            {
              path:"zl",
              name:"zl",
              component:() =>import("../views/main/HomePage/sub/zl.vue")
            },
            {
              path:"zy",
              name:"zy",
              component:() =>import("../views/main/HomePage/sub/zy.vue")
            },
            {
              path:"nx",
              name:"nx",
              component:() =>import("../views/main/HomePage/sub/nx.vue")
            }
          ]
        }
      
    ]
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
