import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraBaseProvider } from "@chakra-ui/react"
import { themeChakra } from "./styles/theme"
import { Home } from "./page/home"
import { Header } from "./components/header"
import { InformationMovie } from "./page/informationMovie"

function App() {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/filme/online/:name/:page"
            element={<InformationMovie />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  )
}

export default App
