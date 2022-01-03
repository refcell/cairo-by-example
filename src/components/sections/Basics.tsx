import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  Text,
  // useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

const Basics = () => {
  // ** Basics Page Visit Logic ** //
  const [visitedHelloWorld, setVisitedHelloWorld] = useState(false);
  const [visitedStorage, setVisitedStorage] = useState(false);
  const [visitedTypes, setVisitedTypes] = useState(false);
  const [visitedVariables, setVisitedVariables] = useState(false);
  const [visitedTuples, setVisitedTuples] = useState(false);
  const [visitedArrays, setVisitedArrays] = useState(false);
  const [visitedConstructor, setVisitedConstructor] = useState(false);
  const [visitedComposition, setVisitedComposition] = useState(false);

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
    setVisitedConstructor(
      localStorage.getItem("pages/basics/constructor") === "visited"
    );
    setVisitedComposition(
      localStorage.getItem("pages/basics/composition") === "visited"
    );
  }, []);

  return (
    <Box my={4}>
      <Heading as="h3" fontSize="2xl">
        Basics
      </Heading>
      <List mt={3} mb={5} spacing={4}>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/hello-world">
            <Text>
              <ListIcon
                as={
                  visitedHelloWorld
                    ? MdRadioButtonChecked
                    : MdRadioButtonUnchecked
                }
              />
              Hello World
            </Text>
          </Link>
        </ListItem>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/storage">
            <Text m={0}>
              <ListIcon
                as={
                  visitedStorage ? MdRadioButtonChecked : MdRadioButtonUnchecked
                }
              />
              Storage
            </Text>
          </Link>
        </ListItem>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/types">
            <Text>
              <ListIcon
                as={
                  visitedTypes ? MdRadioButtonChecked : MdRadioButtonUnchecked
                }
              />
              Data Types
            </Text>
          </Link>
        </ListItem>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/variables">
            <Text>
              <ListIcon
                as={
                  visitedVariables
                    ? MdRadioButtonChecked
                    : MdRadioButtonUnchecked
                }
              />
              Variables
            </Text>
          </Link>
        </ListItem>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/tuples">
            <Text>
              <ListIcon
                as={
                  visitedTuples ? MdRadioButtonChecked : MdRadioButtonUnchecked
                }
              />
              Tuples
            </Text>
          </Link>
        </ListItem>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/arrays">
            <Text>
              <ListIcon
                as={
                  visitedArrays ? MdRadioButtonChecked : MdRadioButtonUnchecked
                }
              />
              Arrays
            </Text>
          </Link>
        </ListItem>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/constructor">
            <Text>
              <ListIcon
                as={
                  visitedConstructor
                    ? MdRadioButtonChecked
                    : MdRadioButtonUnchecked
                }
              />
              Constructor
            </Text>
          </Link>
        </ListItem>
        <ListItem
          outline="none !important"
          boxShadow="none !important"
          m="0 !important"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          size={textSize}
        >
          <Link passHref href="/basics/composition">
            <Text>
              <ListIcon
                as={
                  visitedComposition
                    ? MdRadioButtonChecked
                    : MdRadioButtonUnchecked
                }
              />
              Composition
            </Text>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Basics;
