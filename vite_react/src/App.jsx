import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { click } from '@testing-library/user-event/dist/click';

function App() {
 const [counter , setCounter]= useState(15)
// let counter=13;
const addValue=()=>{
  
  // counter=counter+1;
  if(counter<20){
  setCounter(counter+1) 
  console.log('clicked', counter); 
  }
  else{
    alert('i cannot increase the value')
  }


}
const remoValue =()=>{
 
  if(counter>0){
     setCounter(counter-1)
   
  }
  else{
    alert('counter is zero')
     alert('you cant go below 0')
  }
}



  return (
    <>
    <h1>hello zafar!</h1>
      <div>welocome to darkworld</div>
      <div>counter value is {counter}</div>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={remoValue}>Remove value{counter}</button>
      <p >footer:{counter}</p>
    </>
  )
}

export default App
