import React from 'react'
import { Navbar } from './components/Navbar'
import { UserDetails } from './components/UserDetails'

const App = () => {
  console.log("HII")
  return (
    <div>
      <Navbar />
      <UserDetails/>
    </div>
  )
}

export default App