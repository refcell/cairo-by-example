import {
  Box,
  Heading,
  Link,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const DeFi = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <Box my={4}>
      <Heading as="h2" fontSize="3xl">
        DeFi
      </Heading>
      <Box
        backgroundColor={colorMode === "light" ? "gray.300" : "gray.600"}
        padding={4}
        marginTop={4}
        borderRadius={4}
      >
        <Link size={textSize} href="/">
          Coming Soon...
        </Link>
      </Box>
    </Box>
  );
};

export default DeFi;
