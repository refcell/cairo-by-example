import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link
          textDecoration="none !important"
          outline="none !important"
          boxShadow="none !important"
          href="https://github.com/a5f9t4"
          isExternal
        >
          github.com/a5f9t4
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
