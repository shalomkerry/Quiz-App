import {create} from 'zustand';
const quizStore= create((set)=>{
    return {
        questions:[],
        correctAnswer:'',
        categories:[],
        setQuestions:(question)=>set((state)=>({questions:[...state.questions,question]})),
        setCorrectAnswer:(correctAnswer)=>set(correctAnswer),
        setCategory:(category)=>set((state)=>{
            if(!state.categories.includes(category)){
                return {category:[...state.categories,category]
            }
    }}),

        }
    
    }
)
export default quizStore;