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

import { FormatCairo } from "utils";

const Arrays = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/composition", "visited");
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
        Composition
      </Heading>
      <Text my={2} fontSize={textSize}>
        As of Cairo (and Starknet) version 0.6.2, there is no established
        pattern for contract inheritance. Instead, we can use composition,
        whereby a contract can import functionality from other contracts.
        Further, by specifying a contract owner, one contract can <i>own</i> an
        instance of another - the intent of composition.
      </Text>
      <Text my={2} fontSize={textSize}>
        For a Starknet project directory (e.g.{" "}
        <Link isExternal href="https://github.com/a5f9t4/cairostarter">
          cairostarter
        </Link>
        that looks like:
      </Text>
      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
        p={4}
        my={4}
        borderRadius={4}
      >
        <Text fontSize={textSize}>contracts</Text>
        <Text fontSize={textSize}>├─ parent.cairo</Text>
        <Text fontSize={textSize}>└─ child.cairo</Text>
      </Box>
      <Text my={2} fontSize={textSize}>
        We can import functionality from the <Code>child.cairo</Code> contract
        into <Code>parent.cairo</Code> as shown below.
      </Text>
      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
        p={4}
        mu={4}
        borderRadius={4}
      >
        <Text fontSize={textSize}>
          {`# parent.cairo

          %lang starknet
          %builtins pedersen range_check

          from starkware.cairo.common.cairo_builtins import HashBuiltin
          from contracts.child import add_five

          @storage_var
          func balance() -> (bal: felt):
          end

          @external
          func increment_balance{
            \tsyscall_ptr: felt*,
            \tpedersen_ptr: HashBuiltin*,
            \trange_check_ptr
          }():
            \tassert_not_zero(amount)
            \tlet (bal: felt) = balance.read()
            \tlet (new_bal: felt) = add_five(bal)
            \tbalance.write(new_bal)
            \treturn ()
          end`
            .split("\n")
            .map(FormatCairo)}
        </Text>
      </Box>
      <Box my={4}>
        <Text my={2} fontSize={textSize}>
          On line 7 of <Code>parent.cairo</Code>, we import the{" "}
          <Code>add_five</Code> function from <Code>child.cairo</Code> (defined
          below).
        </Text>
      </Box>
      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
        p={4}
        mu={4}
        borderRadius={4}
      >
        <Text fontSize={textSize}>
          {`# child.cairo

          %lang starknet

          @external
          func add_five(
            \tnum: felt
          ) -> (
            \tres: felt
          ):
            \tlet res: felt = num + 5
            \treturn (res)
          end`
            .split("\n")
            .map(FormatCairo)}
        </Text>
      </Box>
      <Box my={4}>
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
