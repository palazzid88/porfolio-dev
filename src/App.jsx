import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MenuHamburguesa from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import Animania from './components/Animania'


function App() {


  return (
      <BrowserRouter>
        <MenuHamburguesa />
        <ItemListContainer />
      </BrowserRouter>
  )
}

export default App
