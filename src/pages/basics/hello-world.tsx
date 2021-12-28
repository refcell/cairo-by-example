import {
  Box,
  Text,
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
          \n
          # Alphabet substituation cipher for each letter.
          # a = 01, b = 02, etc.
          const hello = 10000805121215  # 08, 05, 12, 12, 15.
          const world = 10002315181204  # 23, 15, 18, 12, 04.
          \n
          @view
          func greeting() -> (number_1 : felt, number_2 : felt):
            \treturn (hello, world)
          end
          `
            .split("\n")
            .map((item) => {
              if (item === "") {
                return <br key={item} />;
              }
              return (
                <Text
                  ml={4 * (item.split("\t").length - 1)}
                  fontSize={textSize}
                >
                  {item}{" "}
                </Text>
              );
            })}
        </Text>
      </Box>
    </>
  );
};

export default HelloWorld;
