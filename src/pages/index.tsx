import { Box, Text } from "@chakra-ui/react";

import { CTASection, WelcomeText } from "components/layout";

const Home = () => {
  return (
    <Box mb={8} w="full" h="full" d="flex" flexDirection="column">
      <WelcomeText />
      <Box flex="1 1 auto">
        <Text>Insert components here</Text>
      </Box>
      <CTASection />
    </Box>
  );
};

export default Home;
