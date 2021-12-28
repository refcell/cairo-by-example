import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import { ThemeToggle } from "components/layout";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">cairo-by-example</Link>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
