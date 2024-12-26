async function getQuestion(){
    let response = await fetch('https://the-trivia-api.com/v2/questions');
    let data = await response.json();
    console.log (data.questions)
    let questions = [];
    let answers = []
    console.log(data)
    for(let i = 0; i<data.length;i++){
        questions.push(data[i].question)
        answers.push(data[i].correctAnswer);
        answers.push(...data[i].incorrectAnswers) 
    }
let element = document.getElementsByClassName('questions');
questions.map(item=>{
    
let p = document.createElement('p');
p.innerText=item.text;
    
   console.log(p);
document.body.append(p)})
console.log(element)
console.log(answers)
}
getQuestion();
