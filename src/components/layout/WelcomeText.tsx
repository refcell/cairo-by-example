import { Text, Heading, Box } from "@chakra-ui/react";

const WelcomeText = () => {
  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello, anon
      </Heading>

      <Box mt={2} display="flex" flexDirection="row">
        These examples are
        <Text mx={1} fontWeight="bold">
          Verbosely
        </Text>
        Documented,
        <Text mx={1} fontWeight="bold">
          Minimal
        </Text>
        Starknet Contracts.
      </Box>
      <Box mt={2} display="flex" flexDirection="row">
        ⚠️ Currently
        <Text mx={1} fontWeight="bold">
          NOT
        </Text>
        recommended for use in production ⚠️
      </Box>
    </>
  );
};

export default WelcomeText;
