import { create } from "zustand";
const getQuestions = create((set)=>{
    return{
     questions:[],
     setQuestions:(question)=>set((state)=>{
       return {questions:[...state.questions,question]} 
     }),   
    quizHistory:[],
    setAllQuiz:(quiz)=>set(()=>{
       return {quizHistory:[quiz]} 
})
}
})
export default getQuestions;