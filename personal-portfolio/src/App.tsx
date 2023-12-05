import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`} padding={1} gap={1}>
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem gridArea="main" bg="tomato">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
