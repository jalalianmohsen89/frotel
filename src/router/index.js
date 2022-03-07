import {createWebHistory, createRouter} from "vue-router";
import isAdmin from "../middleware/isAdmin";
import authentication from "../middleware/authentication";

const Home = () => import("../views/Home.vue");
const Login = () => import("../views/auth/login.vue");
const Admin = () => import("../views/Admin/index.vue");
const User = () => import("../views/user/index.vue");
const UserPanel = () => import("../views/user/dashboard.vue");
const AdminPanel = () => import("../views/admin/dashboard.vue");


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Auth",
        component: Login,
    },
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: Admin,
        meta: {
            middleware: [isAdmin],
        },
        children: [
            {
                path: "/admin/dashboard",
                name: "admin-dashboard",
                component: AdminPanel,
            }
        ]
    },
    {
        path: "/user",
        redirect: "/user/dashboard",
        component: User,
        meta: {
            middleware: [authentication],
        },
        children: [
            {
                path: "/user/dashboard",
                name: "user-dashboard",
                component: UserPanel,
            }
        ]
    },
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});

export default index;