import React from "react";

import { Button, useColorMode } from "@chakra-ui/react";

const Toggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button size="lg" onClick={() => toggleColorMode()}>
			Toggle Mode {colorMode === "dark" ? "Dark" : "Light"}
		</Button>
	);
};

export default Toggle;
