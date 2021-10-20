import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "../../../pages/about";
import Posts from "../../../pages/posts";
import Error from "../../../pages/error";
import PostIdPage from "../../../pages/post-id-page";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/posts">
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
            <Redirect to="/error" />
        </Switch>
    );
};

export default AppRouter;
