import Vue from "vue";
import VueRouter from "vue-router";
import sign from "../views/sign.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "sign",
    component:sign,
  },
  {
    path: "nn",
    name: "nn",
    component:()=>
      import("../views/nn.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
