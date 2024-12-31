import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Select from 'react-select'
import './App.css'
import quizStore from './stores/getQuiz'
//options
const category= [
  {value:"general_knowledge", label:'General Knowledge'},
  {value:"food_and_drink", label:'Food and Drink'},
  {value:"music", label:'Music'},
  {value:"sport_and_leisure", label:'Sport'},
  {value:"history", label:'History'},
  {value:"society_and_culture", label:'Society and Culture'},
  {value:"science", label:'Science'},
  {value:"film_and_tv", label:'Film and Tv'},
  {value:"geography", label:'geography'},
]
function App() {
  const selectInputRef = useRef();
  //for the inputs

const [categoryChoices, setCategoryChoice] = useState([])
const [difficultyChoice,setDifficultyChoice] = useState([])
const [number,setNumber] = useState();
//for state
  const categories = quizStore((state)=>  state.categories);
  const setCategories = quizStore((state)=> state.setCategory)
//functions to handle inputs

function handleChange(categoryChoice){
  setCategoryChoice(categoryChoice);
}
function handleSubmit(e){
  e.preventDefault();
  selectInputRef.current.clearValue();
  setCategories(categoryChoices)
console.log(categoryChoices)
console.log(categories)
}
useEffect(()=>{
  console.log(categories)
})
  return (
    <>
    <h1 className='text-blue-800'>Quiz App</h1>
    <form onSubmit={handleSubmit} className='w-9'>
      <Select ref={selectInputRef}options={category} isMulti={true} onChange={handleChange} value={categoryChoices} makeAnimated/>
      <input type="submit" value="Submit" />
    </form>
    {/* <PreviewQuestions/> */}
    </>
  )
}

export default App
