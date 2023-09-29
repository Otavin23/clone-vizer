import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraBaseProvider } from "@chakra-ui/react"
import { themeChakra } from "./styles/theme"
import { Home } from "./page/home"
import { InformationMovie } from "./page/informationMovie"
import { SearchMovie } from "./page/searchMovie"

function App() {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/online/:name" element={<InformationMovie />} />
          <Route path="/pesquisar" element={<SearchMovie />} />
        </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  )
}

export default App
