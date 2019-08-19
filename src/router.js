import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/content",
      name: "content",
      component: () => import("./views/Content.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/About.vue")
    },
    {
      path: "/user/:id",
      component: () => import("./views/User.vue"),
      children: [
        {
          path: "",
          name: "user",
          component: () => import("./views/user/UserProfile.vue")
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "profile",
          component: () => import("./views/user/UserProfile.vue")
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: "posts",
          component: () => import("./views/user/UserPosts.vue")
        }
      ]
    }
  ]
});
