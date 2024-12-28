import Swr from "../services/triviaApi";

const PreviewQuestions = ()=>{
    let questions = Swr();
   return (
    <>
    
    {questions && questions.map((item,index)=>(
<>
<h5>{item.question}</h5>
{item.options.map((ele,ind)=>(
<ul>
    <li><input type="radio" name="so" id="" />{ele}</li>
</ul>

))}
</>
    ) 
    )}
    </>
) 
}
export default PreviewQuestions;