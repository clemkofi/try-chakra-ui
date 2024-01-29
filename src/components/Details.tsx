import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  // another way to make object responsive values is to use the hook useBreakpointValue
  const colspan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      {/* to apply a different spacing to the text and heading we have to put them into their own VStack */}
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account click here to Sign In.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Widmanngasse 22 " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="City" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              <option value="uae">United Arab Emirates</option>
              <option value="ng">Nigeria</option>
              <option value="gh">Ghana</option>
              <option value="at">Austria</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>
            Shipping address is same as billing address
          </Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="brand" size="lg" w="full">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
