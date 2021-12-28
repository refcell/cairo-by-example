import {
  Box,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  // useColorMode,
} from "@chakra-ui/react";
import { MdTripOrigin, MdRadioButtonChecked } from "react-icons/md";

const Basics = () => {
  // const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <Box my={4}>
      <Heading as="h2" fontSize="3xl">
        Basics
      </Heading>
      <List mt={3} mb={5} spacing={4}>
        <Link
          outline="none !important"
          boxShadow="none !important"
          mt={2}
          size={textSize}
          href="/basics/hello-world"
        >
          <ListItem>
            <ListIcon as={MdTripOrigin} />
            Hello World!
          </ListItem>
        </Link>
        <Link
          outline="none !important"
          boxShadow="none !important"
          mt={2}
          size={textSize}
          href="/basics/hello-world"
        >
          <ListItem>
            <ListIcon as={MdRadioButtonChecked} />
            Hello World!
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Basics;
