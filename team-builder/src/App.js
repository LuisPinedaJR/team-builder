import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import FormComp from './Components/FormComp'

function App() {
  return (
    <div className="mainSection">
      <FormComp />
      <Route />
    </div>
  )
}

export default App
