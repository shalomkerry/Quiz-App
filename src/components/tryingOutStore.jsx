import getQuestions from "../stores/getQuestions";
function Check(){
    // const questions = getQuestions((state)=>state.questions)
    // const setQuestions = getQuestions((state)=>state.setQuestions)

    let apiExample = [
        {
            id:1,
            category:'spiritual',
            question:'Where was Jesus Christ crucified?',
            answer:'Golgotha',
            options:['Bethlehem','Samaria','Golgotha','Jericho'],
        },
        {
            id:2,
            category:'spiritual',
            question:'Who was Jesus Christ Baptized By?',
            answer:'John the Baptist',
            options:['Bethlehem','Samaria','Zecharia','John the Baptist'],
        },

    ]
    // setQuestions(apiExample)
    // console.log(questions)
    function checkAnswer(answer){
        console.log(answer)
    }
    return(
        <>
        <h2 >Quiz Questions</h2>
        {apiExample && apiExample.map((items,ind)=>(
<>
       <h3>{items.question}</h3> 
       {items.options && items.options.map((item,index)=>(
        
<>
<ul>
<li><button onClick={checkAnswer(`${item}`)}>{item}</button></li>
</ul>
</>
       ))}
</>
        )
        )}
        </>
    )
}
export default Check;