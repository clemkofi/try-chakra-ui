"use client";

import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "./Details";
import Cart from "./Cart";

const Checkout = () => {
  return (
    // the container.xl sets the width to 1280px so we do not need to use any padding
    <Container maxW="container.xl" p={0}>
      {/* for responsiveness, we can use the array method to provide a host of values for different responvsive break points just as used in the vertical padding 'py' */}
      {/* We can also use the object responsiveness method when we want to pass in fewer arguments for responsiveness as seen in the flex direction below*/}
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Checkout;
