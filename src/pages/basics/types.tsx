import {
  Box,
  Text,
  Code,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Types = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/types", "visited");
  }, []);

  return (
    <>
      <Heading as="h3" fontSize="2xl">
        Data Types
      </Heading>
      <Box
        backgroundColor={colorMode === "light" ? "gray.300" : "gray.600"}
        padding={4}
        marginTop={4}
        borderRadius={4}
      >
        <Text fontSize={textSize}>
          {`%lang starknet
          %builtins pedersen range_check

          @view
          func types(
                \t\tnumber: felt
              \t) -> (
                \t\tstring_literal: felt,
                \t\tmangled_string: felt,
              \t):
              \t# In ASCII, a = 0x61 and b = 0x62
              \t# 'ab' = 0x6162 = 24930
              \tlet string_literal = 'ab'

              \t# 24930 + 1 = 24931 = 0x6163 = a:61 c:63 = 'ac'
              \tlet mangled_string = string_literal + 1

              \treturn (string_literal, mangled_string)
          end`
            .split("\n")
            .map((item, index) => {
              if (item === "") {
                return (
                  <Box fontSize={textSize} display="flex" flexDirection="row">
                    <Text userSelect="none" opacity={0.4} mr={4}>
                      {index + 1}
                    </Text>{" "}
                  </Box>
                );
              }
              return (
                <Box fontSize={textSize} display="flex" flexDirection="row">
                  <Text userSelect="none" opacity={0.4} mr={4}>
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
          Here we define data types in an example <Code>types</Code> function.
          Concretely, there is only one data type in cairo: <Code>felt</Code> or
          &quot;field element&quot;.
        </Text>
        <Text my={2} fontSize={textSize}>
          From the Cairo-lang docs:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.300" : "gray.600"}
          padding={4}
          marginTop={4}
          borderRadius={4}
        >
          <Text fontSize={textSize}>
            In Cairo, the basic data type is an integer in the range 0 &lt;= x
            &lt; P where P is a prime number (for example, P = 2^251 + 17 *
            2^192 + 1 is a standard choice). All the computations are done
            modulo P.
          </Text>
        </Box>
        <Text my={2} fontSize={textSize}>
          Practically, it&apos;s best to think of a felt as a 252 bit unsigned
          integer.
        </Text>
        <Text my={2} fontSize={textSize}>
          Since felt is the only data type, representing strings is done using
          ASCII-encoded numbers. That is, each character is mapped to one byte.
          So, when we write a string literal like <Code>&apos;hello&apos;</Code>{" "}
          , it is compiled to the felt <Code>448378203247</Code> which is
          equivalent to <Code>0x68656c6c6f</Code>.
        </Text>
        <Text my={2} fontSize={textSize}>
          Note: String literals can only be 31 ASCII characters long.
        </Text>
        <Text my={2} fontSize={textSize}>
          On lines 16-17 we show that concatenating to a string literal or short
          string fails because cairo compiles the strings to felts
          <i>and then</i> performs the arithmetic operation. So instead of
          having <Code>&apos;ac1&apos;</Code>, line 17 stores{" "}
          <Code>&apos;ac&apos;</Code> in <Code>mangled_string</Code>.
        </Text>
      </Box>
    </>
  );
};

export default Types;
