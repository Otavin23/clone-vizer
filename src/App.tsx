import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { themeChakra } from "./styles/theme";

function App() {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  );
}

export default App;
