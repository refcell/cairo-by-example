import { Flex, Link, Text, Image, Code } from "@chakra-ui/react";

const repoLink = "https://github.com/a5f9t4/cairo-by-example";

const Footer = () => {
  return (
    <Flex as="footer" width="full" pb={8} align="center">
      <Text>{new Date().getFullYear()}</Text>
      <Text mx={2}>{" • "}</Text>
      <Text>
        Send ETH ❤️ to{" "}
        <Link
          textDecoration="none !important"
          outline="none !important"
          boxShadow="none !important"
          href="https://etherscan.io/address/velleity.eth"
          isExternal
        >
          velleity.eth
        </Link>{" "}
      </Text>
      <Text mx={2}>{" • "}</Text>
      <Text>
        <Link
          textDecoration="none !important"
          outline="none !important"
          boxShadow="none !important"
          href="https://github.com/a5f9t4/cairo-by-example"
          isExternal
        >
          <Code>github.com/a5f9t4/cairo-by-example</Code>
        </Link>
      </Text>
      <Link href={repoLink} isExternal ml={2} my="auto">
        <Image
          // align="center"
          src="https://img.shields.io/github/stars/a5f9t4/cairo-by-example?style=social"
          alt="github stars"
        />
      </Link>
    </Flex>
  );
};

export default Footer;
