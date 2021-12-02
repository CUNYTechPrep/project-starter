import React from "react";
import Nav from "./Nav";
import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Toggle from "../../../common/components/ThemeToggle";

const Layout = ({ children }) => (
	<Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
		<Box m={["20px", "0"]}>
			<Nav />
			<Box
				as={"main"}
				display={"flex"}
				justifyContent={"center"}
				flexDirection={"column"}
				alignItems={"center"}
			>
				{children}
			</Box>
			<Box
				as={"footer"}
				bg={useColorModeValue("gray.100", "gray.900")}
				px={4}
				p={5}
			>
				<Toggle />
			</Box>
		</Box>
	</Box>
);

export default Layout;
