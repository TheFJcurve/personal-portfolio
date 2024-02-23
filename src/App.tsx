import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Academics from "./components/Academics";

function App() {
  return (
    <Box>
      <NavBar />
      <Introduction />
      <About />
      <Academics />
      <Text align={"center"} color="gray" fontSize={11}>
        Made by Sargun Singh Bhatti
      </Text>
    </Box>
  );
}

export default App;
