import React from 'react'
import './App.css'
import './index.css'

import { Footer, Header } from './containers'

import { Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default App
