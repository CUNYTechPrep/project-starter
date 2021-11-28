import React from "react";
import { Layout } from "../modules/layout";
import { Stack } from "@chakra-ui/react";

const LoginPage = () => {
    return (
        <Layout>
            <Stack
                as={"main"}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
            >
                <h1>TEST</h1>
            </Stack>
        </Layout>
    );
};

export default LoginPage;
