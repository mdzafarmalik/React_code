import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
const [password, setPassword] = useState('')


const passgntr=()=>{
  let password = ''
 if(numberAllowed){
}

  return (
    <>
  <h1 className=' text-4xl text-centre  text-amber-500'>hello </h1>
    </>
  )
}

export default App;
