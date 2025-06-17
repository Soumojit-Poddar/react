import { useState } from 'react'

import './App.css'

function App() {

  
  let [counter, setCounter] = useState(7)

  const addCounter = () =>{
    if(counter<10){
      setCounter(counter+1)
    }
  }
  const removeCounter = () =>{
    if(counter >0)
      setCounter(counter-1)
  }


  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      
      <button onClick={addCounter}>ADD</button>
      <br />
      <button onClick={removeCounter}>REMOVE</button>
    </>
  )
}

export default App
