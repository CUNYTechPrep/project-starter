import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../modules/layout";
import {
	Stack,
	Button,
	Heading,
	FormControl,
	Input,
	FormHelperText,
	FormLabel,
} from "@chakra-ui/react";
import superagent from "superagent";
import { useHistory } from "react-router";

const LoginPage = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// const resp = await superagent.post("/api/user/session");

		history.push("/dashboard");
	};

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
				<Heading>Welcome Back</Heading>
				<Form onSubmit={handleSubmit}>
					<FormControl id="email" isRequired>
						<FormLabel>Email address</FormLabel>
						<Input
							type="email"
							placeholder={"Hi@example.com"}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<FormHelperText>
							We'll never share your email.
						</FormHelperText>
					</FormControl>
					<FormControl id="password" isRequired>
						<FormLabel>Password</FormLabel>
						<Input
							type="password"
							placeholder={"*******"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>
					<Button
						bg={"#EC6EAD"}
						color={"white"}
						isLoading={isSubmitting}
						type="submit"
					>
						Submit
					</Button>
				</Form>
			</Stack>
		</Layout>
	);
};

export default LoginPage;

const Form = styled.form`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	row-gap: 1rem;
`;
