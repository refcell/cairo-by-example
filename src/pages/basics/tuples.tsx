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

const Tuples = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/tuples", "visited");
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
        Tuples
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

          @view
          func deconstruct_tuple{
              syscall_ptr: felt*,
              pedersen_ptr: HashBuiltin*,
              range_check_ptr
            }(
              tuple: (felt, felt)
            ) -> (
              item1: felt,
              item2: felt
            ):
              return (item1=tuple[0], item2=tuple[1])
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
          Tuples are an ordered collection of any combination of valid types,
          including other tuples. Tuples are written as comma-separated lists of
          elements enclosed in parenthesis.
        </Text>
        <Text my={2} fontSize={textSize}>
          For example:
          {/* eslint-disable-next-line prettier/prettier */}
          <Code>let a = (7, 6, 5)</Code>
        </Text>
        <Text my={2} fontSize={textSize}>
          To reference an item inside the tuple, we use brackets like so:
          {/* eslint-disable-next-line prettier/prettier */}
          <Code>let a = (7, 6, 5)[2]  # let a = 5</Code>
        </Text>
      </Box>
    </>
  );
};

export default Tuples;
