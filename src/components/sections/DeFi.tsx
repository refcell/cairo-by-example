import { Box, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

const DeFi = () => {
  // const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <Box my={4}>
      <Heading as="h3" fontSize="2xl">
        DeFi
      </Heading>
      <Box
        mt={2}
        _hover={{
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        <Link passHref href="/">
          <Text size={textSize}>Coming Soon...</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default DeFi;
