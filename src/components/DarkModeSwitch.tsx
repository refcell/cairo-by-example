import { useColorMode, Switch, Box, Image } from '@chakra-ui/react'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box>
      {isDark ? (
        <Image
          src={"/mode-light.svg"}
          alt="light mode"
          position="fixed"
          top="1rem"
          right="1rem"
          color="green"
          w='30px'
          cursor='pointer'
          onClick={(e) => toggleColorMode()}
        />
      ) : (
        <Image
          src={"/mode-dark.svg"}
          alt="dark mode"
          position="fixed"
          top="1rem"
          right="1rem"
          color="green"
          w='30px'
          cursor='pointer'
          onClick={(e) => toggleColorMode()}
        />
      )}
    </Box>
  )
}

export default DarkModeSwitch;