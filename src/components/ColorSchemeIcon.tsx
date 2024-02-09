import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorSchemeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Change Theme"
      colorScheme="blackAlpha"
      icon={colorMode == "dark" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      color={colorMode == "dark" ? "white" : "yellow.100"}
      _hover={{
        transform: "scale(1.13)",
        transition: "transform .15s ease-in",
      }}
    />
  );
};

export default ColorSchemeIcon;
