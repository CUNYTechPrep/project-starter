import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";

const Links = ["Features", "Events"];

const NavLink = ({ text, to }) => (
    <Link
        as={RouteLink}
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        to={to}
    >
        {text}
    </Link>
);

export default function Nav() {
    const user = useSelector((state) => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                as={"header"}
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                justifyContent={"center"}
            >
                <Box w={"100%"} maxWidth={"800px"}>
                    <Flex
                        h={16}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <IconButton
                            size={"md"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            display={{ md: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems={"center"}>
                            <Image
                                boxSize={8}
                                objectFit="cover"
                                src={"/images/logo.svg"}
                                alt="Compnay Logo"
                            />

                            <HStack
                                as={"nav"}
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                            >
                                {Links.map((link) => (
                                    <NavLink key={link} text={link} />
                                ))}
                            </HStack>
                        </HStack>
                        <Flex alignItems={"center"}>
                            <Menu>
                                {user ? (
                                    <MenuButton
                                        as={Button}
                                        rounded={"full"}
                                        variant={"link"}
                                        cursor={"pointer"}
                                        minW={0}
                                    >
                                        <Avatar size={"sm"} src={user.pfp} />
                                        <MenuList>
                                            <MenuItem>Dashboard</MenuItem>
                                            <MenuItem>Settings </MenuItem>
                                            <MenuDivider />
                                            <MenuItem>Log out</MenuItem>
                                        </MenuList>
                                    </MenuButton>
                                ) : (
                                    <NavLink text={"Login"} to={"/login"} />
                                )}
                            </Menu>
                        </Flex>
                    </Flex>

                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as={"nav"} spacing={4}>
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </Stack>
                        </Box>
                    ) : null}
                </Box>
            </Flex>
        </>
    );
}
