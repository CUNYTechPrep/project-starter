import React from "react";
import Nav from "./Nav";
import { Box } from "@chakra-ui/react";

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
		</Box>
	</Box>
);

export default Layout;
