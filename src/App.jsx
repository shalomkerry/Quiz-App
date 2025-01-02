import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Select from 'react-select'
import './App.css'
import quizStore from './stores/getQuiz'
import Check from './components/tryingOutStore'
import ShowQuestions from './components/ShowQuiz'
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
const difficulty = [
  {value:"easy", label:'Easy'},
  {value:"medium", label:'Medium'},
  {value:"hard", label:'Hard'},
  {value:'easy,medium,hard', label:'Random'}
]
function App() {
  const selectInputRef = useRef();
  //for the inputs

const [categoryChoices, setCategoryChoice] = useState([])
const [difficultyChoice,setDifficultyChoice] = useState()
const [number,setNumber] = useState(10);
//for state
  const categories = quizStore((state)=>  state.categories);
  const setCategories = quizStore((state)=> state.setCategory)
  const setLevel = quizStore((state)=>state.setDifficult)
 const setNo = quizStore((state)=>state.setNo) 
  const resetCategory = quizStore((state)=>state.resetCategory)
//functions to handle inputs


function handleSubmit(e){
  if(difficultyChoice == undefined || categoryChoices == undefined){

     alert('please choose at least one category')
     
  }
  e.preventDefault();
categoryChoices.map((item)=>{
  // selectInputRef.current.clearValue();
 setCategories(item.value);

})
setLevel(difficultyChoice.value)
setNo(number)

console.log(quizStore.getState().categories)
console.log(quizStore.getState().number)
console.log(quizStore.getState().difficulty)

}
  return (
    <>
    <h1 className='text-blue-800'>Quiz App</h1>
    <form className='w-9' onSubmit={handleSubmit}>
      <Select ref={selectInputRef} options={category} isMulti={true} onChange={setCategoryChoice} value={categoryChoices} makeAnimated/>
    <Select ref={selectInputRef} options={difficulty} value={difficultyChoice} onChange={setDifficultyChoice}/>
      <label htmlFor="number">Enter the number of questions you</label>
      <input type="number" name="number" id="" value={number} onChange={(e)=>{
          setNumber(e.target.value)
      }} min={10} max={25}/>
      <input type="submit" />
    </form>
    <ShowQuestions/>
    </>
  )
}

export default App
