import {
  Box,
  Text,
  Code,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Storage = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/storage", "visited");
  }, []);

  return (
    <>
      <Heading as="h3" fontSize="2xl">
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
          %builtins pedersen range_check

          from starkware.cairo.common.cairo_builtins import HashBuiltin

          @storage_var
          func count() -> (res : felt):
          end

          # Function to get the current balance.
          @view
          func get{
                  \t\tsyscall_ptr : felt*,
                  \t\tpedersen_ptr : HashBuiltin*,
                  \t\trange_check_ptr
              \t}() -> (
                  \t\tvalue : felt
              \t):
              \tlet (value) = count.read()
              \treturn (value)
          end

          # Function to increase the count by 1.
          @external
          func increase{
                  \t\tsyscall_ptr : felt*,
                  \t\tpedersen_ptr : HashBuiltin*,
                  \t\trange_check_ptr
              \t}():
              \tlet (res) = count.read()
              \tcount.write(res + 1)
              \treturn ()
          end

          # Function to decrease the count by 1.
          @external
          func decrease{
                  \t\tsyscall_ptr : felt*,
                  \t\tpedersen_ptr : HashBuiltin*,
                  \t\trange_check_ptr
              \t}():
              \tlet (res) = count.read()
              \tcount.write(res - 1)
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
          The first line of code <Code>%lang starknet</Code> instructs Cairo to
          interpret the file as a Starknet contract.
        </Text>
        <Text my={2} fontSize={textSize}>
          This is necessary for every <Code>.cairo</Code> file that should be
          interpreted as a Starknet contract.
        </Text>
        <Text my={2} fontSize={textSize}>
          Next, the directive <Code>%builtins pedersen range_check</Code>
          instructs the compiler that our program will use the
          &quot;range_check&quot; builtin. As we saw in Hello World, this
          builtin ensures numbers stay within the acceptable range. Besides the
          range_check builtin, we added the &quot;pedersen&quot; builtin, which
          allows us to use the Pedersen Hash Function - required in many native
          operations (as we will see soon).
        </Text>
        <Text my={2} fontSize={textSize}>
          TODO: implicit parameters
        </Text>
      </Box>
    </>
  );
};

export default Storage;
