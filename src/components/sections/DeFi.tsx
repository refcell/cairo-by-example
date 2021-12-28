import {
  Box,
  Heading,
  Link,
  useBreakpointValue,
  // useColorMode,
} from "@chakra-ui/react";

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
      <Link size={textSize} href="/">
        Coming Soon...
      </Link>
    </Box>
  );
};

export default DeFi;
