import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PreviewQuestions from './components/ShowQuiz'
function App() {
function handleSubmit(){
  console.log('yeah its working')
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Welcome To The Quiz App</h1>
      <ul>
      <label htmlFor="category">Choose The Category of Quizes</label>
<li>
      <input type="checkbox" name="" id="" class='something'/>
</li>
<li>
      <input type="checkbox" name="" id="" />
</li>
<li>
      <input type="checkbox" name="" id="" />
</li>
      </ul>
    </form>
    {/* <PreviewQuestions/> */}
    </>
  )
}

export default App
