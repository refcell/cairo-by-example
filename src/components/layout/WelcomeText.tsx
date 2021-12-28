import { Heading, Box } from "@chakra-ui/react";

const WelcomeText = () => {
  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello, anon
      </Heading>

      <Box mt={2} wordWrap="break">
        These examples are
        <span
          style={{
            marginLeft: "0.25em",
            marginRight: "0.25em",
            fontWeight: "bold",
          }}
        >
          Verbosely
        </span>
        Documented,
        <span
          style={{
            marginLeft: "0.25em",
            marginRight: "0.25em",
            fontWeight: "bold",
          }}
        >
          Minimal
        </span>
        Starknet Contracts.
      </Box>
      <Box mt={2} wordWrap="break">
        ⚠️
        <span
          style={{
            marginLeft: "0.25em",
            marginRight: "0.25em",
            fontWeight: "bold",
          }}
        >
          NOT
        </span>
        recommended for production ⚠️
      </Box>
    </>
  );
};

export default WelcomeText;
