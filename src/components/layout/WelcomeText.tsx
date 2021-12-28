import {
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const WelcomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello, anon
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        marginTop={4}
        borderRadius={4}
      >
        <Box fontSize={textSize}>Welcome to Cairo By Example!</Box>
      </Box>
    </>
  );
};

export default WelcomeText;
