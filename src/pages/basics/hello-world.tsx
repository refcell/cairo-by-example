import {
  Box,
  Text,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const HelloWorld = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello World!
      </Heading>
      <Box
        backgroundColor={colorMode === "light" ? "gray.300" : "gray.600"}
        padding={4}
        marginTop={4}
        borderRadius={4}
      >
        <Text fontSize={textSize}>
          {`
          %lang starknet\n
          %builtins range_check\n
          \n
          # Alphabet substituation cipher for each letter.\n
          # a = 01, b = 02, etc.\n
          const hello = 10000805121215  # 08, 05, 12, 12, 15.\n
          const world = 10002315181204  # 23, 15, 18, 12, 04.\n
          \n
          @view\n
          func greeting() -> (number_1 : felt, number_2 : felt):\n
              return (hello, world)\n
          end\n
          `}
        </Text>
      </Box>
    </>
  );
};

export default HelloWorld;
