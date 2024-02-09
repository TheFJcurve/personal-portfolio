import { Text } from "@chakra-ui/react";
import "./App.css";
import ColorSchemeIcon from "./components/ColorSchemeIcon";

function App() {
  return (
    <>
      <ColorSchemeIcon />
      <Text align={"center"} color="gray" fontSize={11}>
        Made by Sargun Singh Bhatti
      </Text>
    </>
  );
}

export default App;
