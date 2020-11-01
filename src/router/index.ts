import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { title: 'ヒカリとは'}
  },
  {
    path: "/videos",
    name: "Videos",
    component: () => import("../views/Videos.vue"),
    meta: { title: '動画一覧'}
  },
  {
    path: "/twitterTestSite",
    name: "TwitterTestSite",
    component: () => import("../views/TwitterTestSite.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
