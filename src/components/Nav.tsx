"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import logo from "../assets/logo.png";

const Nav = () => {
  const [state, setState] = useState(<ChevronDownIcon />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlein = (e) => {
    setState(<ChevronUpIcon />);
  };
  const handleout = () => {
    setState(<ChevronDownIcon />);
  };

  // console.log(loginauth);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #D3D3D3"
      maxWidth="98%"
      margin="auto"
      paddingY="0.8%"
    >
      <Box display="flex" alignItems="center">
        <Box maxWidth={{ base: "8%", md: "12", lg: "15%" }}>
          <Link href="/">
            <Image src={logo.src} />
          </Link>
        </Box>
      </Box>
      <Box
        width={{ lg: "90%", xl: "70%" }}
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Link href="/support">
          <Text fontSize="xl" fontWeight="600">
            Support
          </Text>
        </Link>
        <Link href="/blog">
          <Text fontSize="xl" fontWeight="600">
            Blog
          </Text>
        </Link>
        <Link href="/forms">
          <Text fontSize="xl" fontWeight="600">
            Forums
          </Text>
        </Link>
        <Link href="/about">
          <Text fontSize="xl" fontWeight="600">
            About
          </Text>
        </Link>
        <Link href="/login">
          <Button bg="none" border="1px solid">
            LOGIN
          </Button>
        </Link>
      </Box>
      <Box display={{ base: "block", lg: "none" }}>
        <HamburgerIcon marginLeft="-100%" onClick={onOpen} />
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <Box display="flex" alignItems="center">
                <Box maxWidth={{ base: "8%", md: "12", lg: "15%" }}>
                  <Image src={logo} />
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
                    fontWeight="700"
                  >
                    Fitnesshub
                  </Text>
                </Box>
              </Box>
            </DrawerHeader>
            <DrawerBody display="flex" flexDirection="column" gap={3}>
              <Box>
                <Link href="/blog">
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    Blog
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link href="/forms">
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    Forums
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link href="/about">
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    About
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link href="/support">
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    Support
                  </Text>
                </Link>
              </Box>

              <Button bg="none" border="1px solid" maxWidth="25%">
                <Text fontSize={{ base: "md", md: "lg" }}>LOG IN</Text>
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
