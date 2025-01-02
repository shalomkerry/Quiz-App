import useSWR from "swr";
import quizStore from "../stores/getQuiz";
import getQuestions from "../stores/getQuestions";
const fetcher = (...args)=> fetch(...args).then((res)=>res.json());
const Swr = ()=>{
const categories = quizStore.getState().categories;
const difficulty = quizStore.getState().difficulty;
const Statequestion = getQuestions.getState().questions;

const setQuestions = getQuestions.getState().setQuestions;
const number = quizStore.getState().number
    const {
        data:quiz,
        error,
        isValidating,
    }=useSWR(`https://the-trivia-api.com/v2/questions?categories=${categories}&limit=${number}&difficulties=${difficulty}`,fetcher);
    if(error) return<div>failed to load </div>;
    if(isValidating) return <div>Loading</div>;

    let questions =[];
    quiz.map((item,index)=>(
        questions.push({
            id:index,
            category:item.category,
            question:item.question.text,
            answer:item.correctAnswer,
            options:[...item.incorrectAnswers,item.correctAnswer],
            difficulty:item.difficulty
        })
    ))
    setQuestions(questions)

} 
const ShowQuestions = ()=>{

    let questions = getQuestions.getState().questions
    console.log(questions)
    return(
        <>
        <h1>Yooo hooo</h1>
       {questions && questions.map((item,index)=>(
        <div key={item.id}>
            <h3>{item.question}</h3>
            <ul>
            
            </ul>
        </div>
       ))} 
        </>
    )
}

export default ShowQuestions;