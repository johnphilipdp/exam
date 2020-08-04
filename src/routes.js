import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("./views/Create-article.vue"),
  },
  {
    path: "/article-list",
    name: "Articles",
    component: () => import("./views/Article-list.vue"),
  },
  {
    path: "/article-show/:id",
    name: "show-article",
    component: () => import("./views/Article-show.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
