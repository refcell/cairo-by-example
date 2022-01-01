import { Heading, Box } from "@chakra-ui/react";

import { version } from "../../../package.json";

const WelcomeText = () => {
  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello, anon
      </Heading>

      <Box mt={2} wordWrap="break">
        v {version}
      </Box>

      <Box mt={2} wordWrap="break">
        <span
          style={{
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
    </>
  );
};

export default WelcomeText;
