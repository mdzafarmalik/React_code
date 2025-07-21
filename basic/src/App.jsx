import { useState } from 'react'

import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"zafar",
    age: 18

  };
  let myArr=[1,2,3]
;
  return (
    <>
  <h1 className='bg-amber-950 '>hello</h1>
  <Card usernames="zafar"></Card>
  
     
    </>
  )
}

export default App
