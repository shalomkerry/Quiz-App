import useSWR from "swr";
import quizStore from "../stores/getQuiz";
const fetcher = (...args)=> fetch(...args).then((res)=>res.json());
const Swr = ()=>{
const categories = quizStore((state)=>state.categories)
if(categories){
console.log(categories)
const category = categories.split(',')
    const {
        data:quiz,
        error,
        isValidating,
    }=useSWR(`https://the-trivia-api.com/v2/questions?categories=${category}`,fetcher);
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
        })
    ))
    
   return (questions)
}


}
export default Swr;
