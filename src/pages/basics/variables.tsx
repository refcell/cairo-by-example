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

import { BackButton } from "components/layout";

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
      <BackButton />
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
          func access_global_variables{
            \tsyscall_ptr: felt*,
            \tpedersen_ptr: HashBuiltin*,
            \trange_check_ptr
          }() -> (
            \tglobal_variable: felt
          ):
            \t# Since we can access global constants from any function,
            \t# we can simply return it here
            \treturn (global_variable)
          end

          # Since memory doesn't persist in vanilla cairo,
          # Starknet exposes the @storage_var decorator to create
          # persistent state variables
          @storage_var
          func persistent_state() -> (res : felt):
          end

          @external
          func variables{
            \tsyscall_ptr: felt*,
            \tpedersen_ptr: HashBuiltin*,
            \trange_check_ptr
          }():
            \talloc_locals  # allocates space for \`local\` variables to be used

            \tlet reference = 50  # Ephemeral, revocable felt
            \tlet reference = 51  # Redefine reference

            \ttempvar my_tempvar = 2 * reference  # Ephemeral, revocable expression
            \ttempvar my_tempvar = 3 * reference  # Redefine tempvar

            \tconst my_const = 60 # Ephemeral, non-revocable felt. cannot redefine

            \t# \`local\` variables require \`alloc_locals\` to appear at the start of the function.
            \tlocal my_local = 70  # Ephemeral, non-revoacable expression, cannot redefine

            \tpersistent_state.write(1)  # Persistent storage
            \tpersistent_state.write(2)  # Redefine storage (aka state)

            \tlet (state) = persistent_state.read()  # Assign reference to function output
            \tlet (local my_local_2) = persistent_state.read()  # Assign local variable

            \t# !! Important !! #
            \tassert state = 2  # *Assigns* the value 2 to the state reference
            \tassert my_local_2 = 2  # Asserts that my_local_2 holds the value 2

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
          There are four main types of variables in Cairo.
        </Text>
        <UnorderedList mt={2} mb={2}>
          <ListItem>Constants</ListItem>
          <ListItem>Temporary Variables</ListItem>
          <ListItem>Local Variables</ListItem>
          <ListItem>References</ListItem>
        </UnorderedList>
        <Heading mt={4} as="h6" size="md">
          Constants
        </Heading>
        <Text my={2} fontSize={textSize}>
          Constants are expressions that aren&apos;t translated into
          instructions during compilation, but replace instances of the variable
          with its value. For example:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={2}
          pl={4}
          marginTop={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>const x = 5</Text>
          <Text fontSize={textSize}>let y = x</Text>
        </Box>
        <Text my={2} fontSize={textSize}>
          is compiled into:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={2}
          pl={4}
          my={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>let y = 5</Text>
        </Box>
        <Heading mt={4} as="h6" size="md">
          Temporary Variables
        </Heading>
        <Text my={2} fontSize={textSize}>
          Temporary variables are available within the current scope, so long as
          they are not revoked. Declaring temporary variables follows this
          syntax: <Code>tempvar var_name = &lt;expr&gt;</Code> and may be
          redefined as shown on lines 40 & 41.
        </Text>
        <Text my={2} fontSize={textSize}>
          Since temporary variables internally rely on the memory register of
          the current scope <Code>ap</Code>, jumping to different scopes usually
          results in revoking the temporary variable. Jumping to different
          scopes occurs during label or call instructions (function calls). For
          example, the following won&apos;t compile since the temporary variable
          is revoked on the second line:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={2}
          pl={4}
          my={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>tempvar x = 1</Text>
          <Text fontSize={textSize}>randomFunction() # x is revoked here</Text>
          <Text fontSize={textSize}>let y = x</Text>
        </Box>
        <Heading mt={4} as="h6" size="md">
          Local Variables
        </Heading>
        <Text my={2} fontSize={textSize}>
          Unlike temporary variables which are revoked by changing scopes, local
          variables depend on a specific register called <Code>fp</Code>{" "}
          allowing them to persist across function calls and label instructions.
        </Text>
        <Text my={2} fontSize={textSize}>
          Locals are defined as shown on line 46, using the keyword{" "}
          <Code>local</Code>. The instruction <Code>alloc_locals</Code> must
          occur at the beginning of the function, as specified on line 35.
          Pedantically, the <Code>alloc_locals</Code> instruction compiles into{" "}
          <Code>ap += SIZEOF_LOCALS</Code>, creating &quot;space&quot; for
          locals to be stored before any other variables.
        </Text>
        <Text my={2} fontSize={textSize}>
          Currently, a local variable&apos;s type must be explicitly stated,
          otherwise defaulting to the <Code>felt</Code> type (as on line 46).
        </Text>
        <Heading mt={4} as="h6" size="md">
          References
        </Heading>
        <Text my={2} fontSize={textSize}>
          Technically, references aren&apos;t variables. They are definitions
          assigned to scopes (think: blocks of codes) through static analysis.
          Further, references can be reassigned, so the following code is valid:
        </Text>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.600"}
          p={2}
          pl={4}
          my={2}
          borderRadius={4}
        >
          <Text fontSize={textSize}>let x = 1</Text>
          <Text fontSize={textSize}>let x = 2</Text>
        </Box>
        <Text my={2} fontSize={textSize}>
          Similarly to constants, reference variables are substituted with their
          value at compile time.
        </Text>
        <Text my={2} fontSize={textSize}>
          Additionally, references may be revoked at the appearance of a label
          or call instruction, just like temporary variables. If the variable is
          required to persist across function calls, it&apos;s best to use a
          local variable.
        </Text>
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
      </Box>
    </>
  );
};

export default Variables;
