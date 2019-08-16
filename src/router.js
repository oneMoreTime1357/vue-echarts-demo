import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "chart",
      component: () =>
      import(/* webpackChunkName: "about" */ "./views/chart.vue")
    },
    {
      path: "/china",
      name: "china",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/chinaMap/index.vue")
    }
  ]
});
