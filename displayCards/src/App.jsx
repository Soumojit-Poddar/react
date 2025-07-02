import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [cards, setcards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
      <div className="container flex flex-wrap justify-center">
        {cards.map((card)=>{
          return <div key={card.id} className="card border border-black rounded-md m-3 w-1/5">
            <h1 className='font-bold text-center'>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: {card.userId}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
