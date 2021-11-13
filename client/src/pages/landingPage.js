import React from "react";
import { Layout } from "../modules/layout";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const LandingPage = () => {
	const user = useSelector((state) => state.user);
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
				<Heading
					fontWeight={600}
					fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
					lineHeight={"110%"}
					w={"80%"}
				>
					Find events you want to be at{" "}
					<Text as={"span"} color={"#EC6EAD"}>
						with ease
					</Text>
				</Heading>
				<Text color={"gray.500"}>
					Discover the things you love to do and people to do it with
					both online and in person.
				</Text>
				{user ? (
					<Button>Dashboard</Button>
				) : (
					<Button>Sign up for free</Button>
				)}
			</Stack>
			<Stack></Stack>
		</Layout>
	);
};

export default LandingPage;
