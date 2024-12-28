import {create} from 'zustand';
const quizStore= create((set)=>{
    return {
        questions:[],
        correctAnswer:'',
        setQuestions:(question)=>set([...questions,question]),
        setCorrectAnswer:(correctAnswer)=>set(correctAnswer),
        
    }
})
export default quizStore;