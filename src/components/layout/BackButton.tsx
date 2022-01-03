import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const BackButton = () => {
  return (
    <Box
      mb={3}
      _hover={{
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      <Link passHref href="/">
        <Box display="flex" flexDirection="row">
          <ArrowBackIcon my="auto" mr={1} />
          <Text as="h6">Back</Text>
        </Box>
      </Link>
    </Box>
  );
};

export default BackButton;
