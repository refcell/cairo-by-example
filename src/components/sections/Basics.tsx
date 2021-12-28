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
import { useEffect, useState } from "react";
import { MdTripOrigin, MdRadioButtonChecked } from "react-icons/md";

const Basics = () => {
  const [visitedHelloWorld, setVisitedHelloWorld] = useState(false);
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    setVisitedHelloWorld(
      localStorage.getItem("pages/basics/hello-world") === "visited"
    );
  }, []);

  return (
    <Box my={4}>
      <Heading as="h3" fontSize="2xl">
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
            <ListIcon
              as={visitedHelloWorld ? MdRadioButtonChecked : MdTripOrigin}
            />
            Hello World!
          </ListItem>
        </Link>
        {/* <Link
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
        </Link> */}
      </List>
    </Box>
  );
};

export default Basics;
