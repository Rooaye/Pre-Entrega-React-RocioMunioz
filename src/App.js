import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { NavBar } from "./components/NavBar"

import "./App.css"

export default function App() {
   return ( 
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route 
        path="/" 
        element={<ItemListContainer greeting="hola mundo" />} 
        />
        <Route 
        path="/category/:id" 
        element={<ItemListContainer greeting="productos" />} 
        />
        <Route 
        path="/Item/:id" 
        element={<ItemDetailContainer />} 
        />
      </Routes>
      
    </BrowserRouter> 
  )
}


