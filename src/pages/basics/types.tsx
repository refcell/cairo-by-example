import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Code,
  Heading,
  useBreakpointValue,
  useColorMode,
  Link,
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
      <Link outline="none !important" boxShadow="none !important" href="/">
        <Box mb={3} display="flex" flexDirection="row">
          <ArrowBackIcon my="auto" mr={1} />
          <Text as="h6">Back</Text>
        </Box>
      </Link>
      <Heading as="h3" fontSize="2xl">
        Data Types
      </Heading>
      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
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
          In the example above, data types are defined in the <Code>types</Code>
          function. Concretely, there is only one data type in cairo - the{" "}
          <Code>felt</Code> or <Code>field element</Code>.
        </Text>
        <Text my={2} fontSize={textSize}>
          From the{" "}
          <Link
            isExternal
            textDecoration="underline"
            outline="none !important"
            boxShadow="none !important"
            href="https://www.cairo-lang.org/docs/how_cairo_works/cairo_intro.html"
          >
            Cairo docs
          </Link>
          :
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
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
          Since felt is the only data type, cairo supports strings by using
          ASCII-encoded numbers. That is, each character is mapped to one byte.
          So, when we write a string literal like <Code>&apos;hello&apos;</Code>{" "}
          , it is parsed as an ascii hex code <Code>0x68656c6c6f</Code>, which
          cairo compiles into the felt <Code>448378203247</Code>.
        </Text>
        <Text my={2} fontSize={textSize}>
          Note: String literals can be a maximum of 31 ASCII characters long.
        </Text>
        <Text my={2} fontSize={textSize}>
          On lines 15-16 we show that concatenating to a string literal or short
          string fails because cairo compiles the strings to felts{" "}
          <i>and then</i> performs the arithmetic operation. So instead of
          having <Code>&apos;ac1&apos;</Code>, line 16 assigns the value{" "}
          <Code>&apos;ac&apos;</Code> to <Code>mangled_string</Code>.
        </Text>
      </Box>
    </>
  );
};

export default Types;
