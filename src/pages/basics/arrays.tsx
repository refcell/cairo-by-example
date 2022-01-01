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

const Arrays = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/arrays", "visited");
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
        Arrays
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

          from starkware.cairo.common.cairo_builtins import HashBuiltin
          from starkware.cairo.common.math import assert_not_zero

          @external
          func swap_first_element(
            \ta_len: felt,
            \ta: felt*,
            \tb_len: felt,
            \tb : felt*
          ):
            \tassert_not_zero(a_len)
            \tassert_not_zero(b_len)
            \tassert (a[0], b[0]) = (b[0], a[0])
            \treturn (
              \t\ta_len=a_len,
              \t\ta=a,
              \t\tb_len=b_len,
              \t\tb=b
            \t)
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
          Arrays are defined by a pointer to the first element of the array. To
          initialize an array, the Cairo standard library exposes an{" "}
          <Code>alloc</Code> function. For example, we can allocate a local
          array with:{" "}
          <Code>let (local my_struct_array: MyStruct*) = alloc()</Code>.
        </Text>
        <Text my={2} fontSize={textSize}>
          To reference an item inside the array, we use brackets like so:{" "}
          <Code>my_struct_array[n]</Code> where <Code>n</Code> is the nth
          element in the array (n=0 is the first element).
        </Text>
        <Text my={2} fontSize={textSize}>
          Behind the scenes, the access instruction{" "}
          <Code>my_struct_array[n]</Code> is compiled into{" "}
          <Code>[my_struct_array + n * MyStruct.SIZE]</Code>.
        </Text>
        <Text my={2} fontSize={textSize}>
          In order to pass an array named <Code>a</Code> into an external
          function, two arguments must be present. The first being
          <Code>a_len</Code> with type <Code>felt</Code> and <Code>a</Code> of
          type <Code>felt*</Code>.
        </Text>
        <Text my={2} fontSize={textSize}>
          On line 8 & 9 (as well as 10 & 11), this pattern is followed to pass
          two arrays into the <Code>swap_first_element</Code> function. We also
          return two arrays on lines 18-19 and 20-21.
        </Text>
      </Box>
    </>
  );
};

export default Arrays;
