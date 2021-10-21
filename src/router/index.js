import About from "../pages/about";
import Posts from "../pages/posts";
import Error from "../pages/error";
import PostIdPage from "../pages/post-id-page";

const routes = [
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

export { routes };
