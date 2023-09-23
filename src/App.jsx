import { useState } from 'react' 
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Foouter from './components/Foouter'

function App() { 

  return (
    <>
      <Header/> 
      <Banner/> 
      <Skills/>
      <Projects/>
      <Contact/> 
    </>
  )
}

export default App
