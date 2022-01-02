/* eslint-disable react/destructuring-assignment */
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const FormatCairo = (item: string, index: number) => {
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

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
};

export default FormatCairo;
