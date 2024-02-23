import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ColorSchemeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.15 },
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.15 },
      }}
      onTap={toggleColorMode}
    >
      {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
    </motion.button>
  );
};

export default ColorSchemeIcon;
