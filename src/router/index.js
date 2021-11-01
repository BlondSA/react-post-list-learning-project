import About from "../pages/about";
import Posts from "../pages/posts";
import PostIdPage from "../pages/post-id-page";
import Error from "../pages/error";
import Login from "../pages/login";

const privateRoutes = [
    {
        component: Posts,
        exact: true,
        path: "/posts",
    },
    {
        component: About,
        exact: true,
        path: "/about",
    },
    {
        component: PostIdPage,
        exact: true,
        path: "/posts/:id",
    },
    {
        component: Error,
        exact: false,
        path: "/error",
    },
];
const publicRoutes = [{ component: Login, path: "/login", exact: true }];

export { privateRoutes, publicRoutes };
