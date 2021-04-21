import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import('../views/Cart.vue')
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/collection",
    name: "collection",
    component: () => import('../views/Collection.vue')
  },
  {
    path: "/new",
    name: "New",
    component: () => import('../views/New.vue')
  },
  {
    path: "/give",
    name: "Give",
    component: () => import('../views/Giveaway.vue')
  },
  {
    path: "/user",
    name: "User",
    component: () => import('../views/User.vue')
  },
  {
    path: "/sale",
    name: "Sale",
    component: () => import('../views/Sale.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
