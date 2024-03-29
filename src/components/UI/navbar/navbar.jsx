import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/my-button";

const Navbar = () => {
    const { setIsAuth } = useContext(AuthContext);

    const logOut = (e) => {
        e.preventDefault();
        setIsAuth(false);
        localStorage.removeItem("auth");
    };

    return (
        <div className="navbar">
            <MyButton onClick={logOut}>Выйти</MyButton>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
