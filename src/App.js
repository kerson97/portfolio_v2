import React from 'react'
import './App.css'
import './index.css'

import { About, Header, Skills } from './containers'

import { Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
        <About />
        <Skills />
      </div>
    </div>
  )
}

export default App
