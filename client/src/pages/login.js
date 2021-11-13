import React from "react";
import { Layout } from "../modules/layout";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";

const LandingPage = () => {
	return (
		<Layout>
			<Stack
				as={Box}
				textAlign={"center"}
				justifyContent={"center"}
				alignItems={"center"}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 36 }}
			>
				<p>Login</p>
			</Stack>
		</Layout>
	);
};

export default LandingPage;
