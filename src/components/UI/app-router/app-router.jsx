import React from "react";
import { Route, Switch } from "react-router-dom";
// import About from "../../../pages/about";
// import Posts from "../../../pages/posts";
// import Error from "../../../pages/error";
// import PostIdPage from "../../../pages/post-id-page";
import { routes } from "../../../router/index.js";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                );
            })}

            {/* <Route exact path="/posts">
                <Posts />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route exact path="/posts/:id">
                <PostIdPage />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Redirect to="/error" /> */}
        </Switch>
    );
};

export default AppRouter;
