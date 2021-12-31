import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Code,
  Heading,
  useBreakpointValue,
  useColorMode,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Variables = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    localStorage.setItem("pages/basics/variables", "visited");
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
        Variables
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

          # Constants defined in global file scope are available to all functions
          const global_variable = 10

          @external
          func accessGlobalVariables{
              syscall_ptr : felt*,
              pedersen_ptr : HashBuiltin*,
              range_check_ptr
            }() -> (
              global_variable: felt
            ):
              # Since we can access global constants from any function,
              # we can simply return it here
              return (global_variable)
          end

          # Since memory doesn't persist in vanilla cairo,
          # Starknet exposes the @storage_var decorator to create
          # persistent state variables
          @storage_var
          func storage() -> (res : felt):
          end

          @external
          func variables{
              syscall_ptr : felt*,
              pedersen_ptr : HashBuiltin*,
              range_check_ptr
            }():
              alloc_locals

            # Transient, revocable felt (reference).
            let reference = 50
            # Redefine reference.
            let reference = 51

            # Transient, revocable expression (temporary variable).
            tempvar my_tempvar = 2 * reference
            # Redefine tempvar.
            tempvar my_tempvar = 3 * reference

            # Transient, non-revocable felt (constant).
            const my_const = 60
            # Cannot redefine const (const my_const = 61)

            # Transient, non-revoacable expression (local). Requires alloc_locals.
            local my_local = 70
            # Cannot redefine local (local my_local = 71).

            # Persistent (@storage_var) storage, without a variable.
            persistent_state.write(80)
            # Redefine state.
            persistent_state.write(81)

            # A variable can be assigned to a function output:
            # let (my_var) = func().
            let (my_reference_2) = persistent_state.read()
            let (local my_local_2) = persistent_state.read()

            assert my_local_2 = 81

            return ()

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
          There are four main types of variables in Cairo.
        </Text>
        <UnorderedList mt={2} mb={2}>
          <ListItem>Constants</ListItem>
          <ListItem>References</ListItem>
          <ListItem>Local Variables</ListItem>
          <ListItem>Temporary Variables</ListItem>
        </UnorderedList>
        <Heading mt={2} as="h6" size="md">
          Constants
        </Heading>
        <Text my={2} fontSize={textSize}>
          Constants are expressions that aren&apos;t translated into
          instructions during compilation, but replace instances of the variable
          with it&apos;s value. For example:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={2}
          pl={4}
          marginTop={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>const x = 5;</Text>
          <Text fontSize={textSize}>let y = x;</Text>
        </Box>
        <Text my={2} fontSize={textSize}>
          is compiled into:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={2}
          pl={4}
          marginTop={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>let y = 5;</Text>
        </Box>
        <Heading mt={2} as="h6" size="md">
          Local Variables
        </Heading>
        <Heading mt={2} as="h6" size="md">
          Temporary Variables
        </Heading>
        <Heading mt={2} as="h6" size="md">
          References
        </Heading>
        <Text my={2} fontSize={textSize}>
          Technically, references aren&apos;t variables. They are definitions
          assigned to scopes (think: blocks of codes) through static analysis.
          References can be reassigned. So, the following code is valid:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={2}
          pl={4}
          marginTop={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>let x = 1;</Text>
          <Text fontSize={textSize}>let x = 2;</Text>
        </Box>
        <Text my={2} fontSize={textSize}>
          Side note from the Cairo docs:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          padding={4}
          marginTop={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>
            It is important to note that a short-string is simply a way to
            represent a field element, it not a real string. Cairo doesn&apos;t
            support strings at the moment, and when it does strings will be
            represented using <Code>&quot;</Code> rather than
            <Code>&apos;</Code> (similar to the distinction in C/C++).
          </Text>
        </Box>
        <Text my={2} fontSize={textSize}>
          To dive deeper into variables and memory, read{" "}
          <Link
            isExternal
            textDecoration="underline"
            outline="none !important"
            boxShadow="none !important"
            href="https://www.cairo-lang.org/docs/how_cairo_works/consts.html"
          >
            Cairo Variables Docs
          </Link>
        </Text>
        {/* <Box
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
        </Text> */}
      </Box>
    </>
  );
};

export default Variables;
