import React from "react";
import { ResponsiveParentContainer } from "./index";

const Layout = ({ children }) => (
    <ResponsiveParentContainer>
        <main>{children}</main>
    </ResponsiveParentContainer>
);

export default Layout;
