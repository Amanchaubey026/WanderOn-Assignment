import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import {About} from "./pages/About"
import './App.css'
import Authentication from "./pages/Authentication"
import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
const App = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Homepage/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/products"  element={<Products/>}/>
        <Route path="/auth"  element={<Authentication/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App