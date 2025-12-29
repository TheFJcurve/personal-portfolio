import About from "@/components/About";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Divider } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import Academics from "../components/Academics";
import { Text } from "@chakra-ui/layout";

export default function Home() {
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
