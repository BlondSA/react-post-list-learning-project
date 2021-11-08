import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../../../context/index.js";
import { privateRoutes, publicRoutes } from "../../../router/index.js";
import Loader from "../loader/loader.jsx";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />;
    }

    return isAuth ? (
        <Switch>
            {privateRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                );
            })}
            <Redirect to="/posts" />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                );
            })}
            <Redirect to="/login" />
        </Switch>
    );
};

export default AppRouter;
