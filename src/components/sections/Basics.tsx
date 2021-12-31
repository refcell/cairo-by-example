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
  // ** Page Visit Logic ** //
  const [visitedHelloWorld, setVisitedHelloWorld] = useState(false);
  const [visitedStorage, setVisitedStorage] = useState(false);
  const [visitedTypes, setVisitedTypes] = useState(false);
  const [visitedVariables, setVisitedVariables] = useState(false);
  const [visitedTuples, setVisitedTuples] = useState(false);
  const [visitedArrays, setVisitedArrays] = useState(false);

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
    setVisitedTypes(localStorage.getItem("pages/basics/types") === "visited");
    setVisitedVariables(
      localStorage.getItem("pages/basics/variables") === "visited"
    );
    setVisitedTuples(localStorage.getItem("pages/basics/tuples") === "visited");
    setVisitedArrays(localStorage.getItem("pages/basics/arrays") === "visited");
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
            Hello World
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
        <Link
          outline="none !important"
          boxShadow="none !important"
          mt={2}
          size={textSize}
          href="/basics/types"
        >
          <ListItem>
            <ListIcon
              as={visitedTypes ? MdRadioButtonChecked : MdRadioButtonUnchecked}
            />
            Data Types
          </ListItem>
        </Link>
        <Link
          outline="none !important"
          boxShadow="none !important"
          mt={2}
          size={textSize}
          href="/basics/variables"
        >
          <ListItem>
            <ListIcon
              as={
                visitedVariables ? MdRadioButtonChecked : MdRadioButtonUnchecked
              }
            />
            Variables
          </ListItem>
        </Link>
        <Link
          outline="none !important"
          boxShadow="none !important"
          mt={2}
          size={textSize}
          href="/basics/tuples"
        >
          <ListItem>
            <ListIcon
              as={visitedTuples ? MdRadioButtonChecked : MdRadioButtonUnchecked}
            />
            Tuples
          </ListItem>
        </Link>
        <Link
          outline="none !important"
          boxShadow="none !important"
          mt={2}
          size={textSize}
          href="/basics/arrays"
        >
          <ListItem>
            <ListIcon
              as={visitedArrays ? MdRadioButtonChecked : MdRadioButtonUnchecked}
            />
            Arrays
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Basics;
