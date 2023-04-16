import { Text, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area={"nav"} bg={"orange.300"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"} bg={"green.300"}>
          Side
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"pink.300"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
