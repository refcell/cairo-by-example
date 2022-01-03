import {
  Box,
  Text,
  Code,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { BackButton } from "components/layout";

const Constructor = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/constructor", "visited");
  }, []);

  return (
    <>
      <BackButton />
      <Heading as="h3" fontSize="2xl">
        Constructor
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

          @storage_var
          func _owner() -> (res : felt):
          end

          @constructor
          func constructor{
            \tsyscall_ptr: felt*,
            \tpedersen_ptr: HashBuiltin*,
            \trange_check_ptr
          }(
            \towner: felt
          ):
            \t_owner.write(owner)
            \treturn ()
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
          The constructor is an optional function that is guaranteed to run once
          contract is deployed (aka created). To define a constructor for
          Starknet, the <Code>@constructor</Code> decorator must appear before
          its declaration and the function name must be <Code>constructor</Code>
          .
        </Text>
        <Text my={2} fontSize={textSize}>
          On line 18, we demonstrate writing a constructor input to state. A
          canonical pattern for saving the contract owner in a storage variable.
        </Text>
        <Text my={2} fontSize={textSize}>
          When deploying a contract to Starknet with a constructor, inputs must
          be passed into the deployment command that match arguments to the
          constructor. For example, in the constructor above, we have to pass in
          an input value of type <Code>felt</Code> since the constructor has an
          argument called <Code>owner</Code> that is of type <Code>felt</Code>.
          An example deployment command for this contract (if saved as{" "}
          <Code>constructor.cairo</Code>) would be:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={4}
          my={4}
          borderRadius={4}
        >
          <Text fontSize={textSize}># compile</Text>
          <Text mb={4} fontSize={textSize}>
            starknet-compile constructor.cairo --output constructor.json --abi
            constructor_abi.json
          </Text>
          <Text fontSize={textSize}># deploy</Text>
          <Text fontSize={textSize}>
            starknet deploy --contract constructor.json --inputs 100
          </Text>
        </Box>
        <Text my={2} fontSize={textSize}>
          In this case <Code>100</Code> is passed into the constructor on
          deployment as <Code>owner</Code> on line 16.
        </Text>
      </Box>
    </>
  );
};

export default Constructor;
