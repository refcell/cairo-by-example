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
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

const Basics = () => {
  const [visitedHelloWorld, setVisitedHelloWorld] = useState(false);
  const [visitedStorage, setVisitedStorage] = useState(false);
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  useEffect(() => {
    setVisitedHelloWorld(
      localStorage.getItem("pages/basics/hello-world") === "visited"
    );
    setVisitedStorage(
      localStorage.getItem("pages/basics/storage") === "visited"
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
              as={
                visitedHelloWorld
                  ? MdRadioButtonChecked
                  : MdRadioButtonUnchecked
              }
            />
            Hello World!
          </ListItem>
        </Link>
        <Link
          outline="none !important"
          boxShadow="none !important"
          mt={2}
          size={textSize}
          href="/basics/storage"
        >
          <ListItem>
            <ListIcon
              as={
                visitedStorage ? MdRadioButtonChecked : MdRadioButtonUnchecked
              }
            />
            Storage
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Basics;
