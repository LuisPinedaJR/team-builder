import React, { useState } from 'react'
import './App.css'
import FormComp from './Components/FormComp'
import ListComp from './Components/ListComp'

function App() {
  const [List, setList] = useState([
    {
      id: 1,
      name: 'Spongebob Squarepants',
      position: 'crabby patty grill master',
    },
  ])

  const addNameToList = newName => {
    setList([...List, newName])
  }
  return (
    <div className="App">
      <h1>Racing Team Sign up</h1>
      <h2>Location: Santa Clarita, CA</h2>
      <FormComp addName={addNameToList} />
      <ListComp list={List} />
    </div>
  )
}

export default App
