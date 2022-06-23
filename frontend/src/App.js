import { Container } from "@mui/system";
import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Container maxWidth={"lg"}>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
