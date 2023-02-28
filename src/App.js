import React from 'react'
import './App.css'
import './index.css'

import { About, Footer, Header, Skills, Contact } from './containers'

import { Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
