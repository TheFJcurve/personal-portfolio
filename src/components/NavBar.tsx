import { HStack, Text } from "@chakra-ui/react";
import ColorSchemeIcon from "./ColorSchemeIcon";

const NavBar = () => {
  return (
    <HStack justifyContent={"center"}>
      <Text _hover={{ color: "red" }}> About Me </Text>
      <ColorSchemeIcon />
    </HStack>
  );
};

export default NavBar;
