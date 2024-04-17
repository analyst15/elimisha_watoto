import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/HomePage.vue") },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404Page.vue"),
  },
  { path: "/faq", name: "faq", component: () => import("../views/FAQ.vue") },

  {
    path: "/involved",
    name: "involved",
    component: () => import("../views/Involved.vue"),
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  { path: "/work", name: "work", component: () => import("../views/Work.vue") },
  {
    path: "/programmes",
    name: "programmes",
    component: () => import("../views/Programmes.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/News&Updates.vue"),
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import("../views/Friends.vue"),
  },
  {
    path: "/kcse",
    name: "kcse",
    component: () => import("../views/KcseAll.vue"),
  },
  {
    path: "/liaison",
    name: "liaison",
    component: () => import("../views/Liaison.vue"),
  },
  {
    path: "/financial",
    name: "financial",
    component: () => import("../views/Financial.vue")
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../views/Team.vue")
  },
  {
    path: "/liaison",
    name: "liaison",
    component: () => import("../views/Liaison.vue")
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import("../views/Friends.vue")
  },
  {
    path: "/Academic",
    name: "AS",
    component: () => import("../views/AcademicS.vue")
  },
  {
    path: "/student",
    name: "student",
    component: () => import("../views/Student.vue")
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
