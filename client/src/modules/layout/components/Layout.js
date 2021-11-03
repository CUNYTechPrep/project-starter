import React from "react";
import {ResponsiveContentContainer, ResponsiveParentContainer} from "./index";
import Nav from "./Nav";

const Layout = ({ children }) => (
    <ResponsiveParentContainer>
        <ResponsiveContentContainer>
            <Nav />
            <main>{children}</main>
        </ResponsiveContentContainer>
    </ResponsiveParentContainer>
);

export default Layout;
