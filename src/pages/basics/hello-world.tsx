import {
  Box,
  Text,
  Code,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";

const HelloWorld = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/hello-world", "visited");
  }, []);

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
          {`%lang starknet
          %builtins range_check

          # Alphabet substituation cipher for each letter.
          # a = 01, b = 02, etc.
          const hello = 10000805121215  # 08, 05, 12, 12, 15.
          const world = 10002315181204  # 23, 15, 18, 12, 04.

          @view
          func hello_world() -> (word1: felt, word2: felt):
            \treturn (hello, world)
          end`
            .split("\n")
            .map((item, index) => {
              if (item === "") {
                return (
                  <Box fontSize={textSize} display="flex" flexDirection="row">
                    <Text opacity={0.4} mr={4}>
                      {index + 1}
                    </Text>{" "}
                  </Box>
                );
              }
              return (
                <Box fontSize={textSize} display="flex" flexDirection="row">
                  <Text opacity={0.4} mr={4}>
                    {index + 1}
                  </Text>{" "}
                  <Text ml={4 * (item.split("\t").length - 1)}>{item}</Text>{" "}
                </Box>
              );
            })}
        </Text>
      </Box>
      <Box my={4}>
        <Text my={2} fontSize={textSize}>
          The first line of code <Code>%lang starknet</Code> instructs Cairo to
          interpret the file as a Starknet contract.
        </Text>
        <Text my={2} fontSize={textSize}>
          This is necessary for every <Code>.cairo</Code> file that should be
          interpreted as a Starknet contract.
        </Text>
        <Text my={2} fontSize={textSize}>
          Next, the directive <Code>%builtins range_check</Code> instructs the
          compiler that our program will use the &quot;range_check&quot;
          builtin. This builtin ensures numbers stay within the acceptable
          range.
        </Text>
        <Text my={2} fontSize={textSize}>
          Lines 4 and 5 are simply comments, denoted by the <Code>#</Code>{" "}
          prefix.
        </Text>
        <Text my={2} fontSize={textSize}>
          On lines 6 and 7, we declare &quot;Hello&quot; and &quot;World&quot;
          as constants using an alphabet substitution.
        </Text>
        <Text my={2} fontSize={textSize}>
          Lastly, from lines 9-12, we expose a function called{" "}
          <Code>hello_world</Code>. In order to allow external access, we have
          to add the <Code>@view</Code> decorator on line 9. We simply return
          our two constants, both with <Code>felt</Code> type.
        </Text>
      </Box>
    </>
  );
};

export default HelloWorld;
