import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraBaseProvider } from "@chakra-ui/react"
import { themeChakra } from "./styles/theme"
import { Home } from "./page/home"
import { Header } from "./components/header"

function App() {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  )
}

export default App
