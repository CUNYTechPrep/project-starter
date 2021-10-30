import React from "react";
import { ResponsiveContentContainer, Layout } from "../modules/layout";
import Hero from "../modules/hero";

const LandingPage = () => {
    return (
        <Layout>
            <ResponsiveContentContainer>
                <Hero />
            </ResponsiveContentContainer>
        </Layout>
    );
};

export default LandingPage;
