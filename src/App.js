import React from 'react'
import './App.css'
import './index.css'

import { About, Header, Skills, Contact } from './containers'

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
    </div>
  )
}

export default App
