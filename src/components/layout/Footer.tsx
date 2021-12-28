import {
  Flex,
  Link,
  Text,
  Image,
  Code,
  useBreakpointValue,
} from "@chakra-ui/react";
import styled from "styled-components";

const repoLink = "https://github.com/a5f9t4/cairo-by-example";

const DOT = styled(Text)`
  @media (max-width: 350px) {
    display: none;
  }
`;

const Footer = () => {
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <Flex
      as="footer"
      width="full"
      pb={8}
      align="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Text my={1} size={textSize}>
        {new Date().getFullYear()}
      </Text>
      <DOT my={1} ml={2} size={textSize}>
        {" • "}
      </DOT>
      <Text my={1} mx={2} size={textSize}>
        Send ❤️ to{" "}
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
      <DOT my={1} mr={2} size={textSize}>
        {" • "}
      </DOT>
      <Text my={1} size={textSize}>
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
      <Link my={1} href={repoLink} isExternal ml={2}>
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
