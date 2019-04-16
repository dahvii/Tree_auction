import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "LoginRegister",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/LoginRegister.vue")
    },
    {
      path: "/auction/:id",
      name: "AuctionDetailsView",
      component: () =>
          import("./views/AuctionDetailsView.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Add.vue")
    }
  ]
});