import { Box } from "@chakra-ui/react";

import { WelcomeText } from "components/layout";
import { Basics, DeFi, Exploits } from "components/sections";

const Home = () => {
  return (
    <Box mb={8} w="full" h="full" d="flex" flexDirection="column">
      <WelcomeText />
      <Box flex="1 1 auto">
        <Basics />
        <DeFi />
        <Exploits />
      </Box>
    </Box>
  );
};

export default Home;
