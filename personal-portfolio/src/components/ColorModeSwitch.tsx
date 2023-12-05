import { IconButton, useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      variant={"outline"}
      colorScheme={"teal"}
      aria-label={"Change Mode"}
      icon={colorMode === "light" ? <BsSun /> : <BsMoonFill />}
      onClick={handleClick}
    />
  );
};

export default ColorModeSwitch;
