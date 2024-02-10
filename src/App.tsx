import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box>
      <NavBar />
      <About />
      <Text align={"center"} color="gray" fontSize={11}>
        Made by Sargun Singh Bhatti
      </Text>
    </Box>
  );
}

export default App;
