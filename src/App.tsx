import { Divider, SimpleGrid, Text } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Academics from "./components/Academics";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <SimpleGrid columns={1}>
      <NavBar />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Academics />
      <Divider marginTop={2} marginBottom={2} />
      <Text align={"center"} color="gray" fontSize={11}>
        Made by Sargun Singh Bhatti
      </Text>
    </SimpleGrid>
  );
}

export default App;
