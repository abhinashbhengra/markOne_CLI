var readlineSync = require('readline-sync');
const userName = readlineSync.question('What should I call you? ')
console.log('Hi '+ userName.toUpperCase() + ' Do you know Virat Kholi?')
const quesOne = {
  question : 'What is a nickname for Virat? ',
  answer: 'cheeku'
}
const quesTwo ={
  question : 'What sport does he play? ',
  answer : 'cricket'
}
const quesThree = {
  question : 'For which Country does he play cricket? ',
  answer : 'india'
}
const quesFour ={
  question : 'Is he a captian? ',
  answer : 'no'
}
const quesFive = {
  question : 'Which year does he joined Indian cricket? ',
  answer : 2006
}
let score = 0;
function quiz(question, answer){
  const userResponse = readlineSync.question(question)
  if(userResponse == answer){
    console.log('True ;)');
    console.log('current score :',1)
    score++
  }else{
    console.log(`False!!, (answer : ${answer})`)
    console.log('current score :', 0)
  }
  console.log('****************')
}

function message(){
  console.log('Whooo! Your score :', score);
}

quiz(quesOne.question, quesOne.answer)
quiz(quesTwo.question, quesTwo.answer)
quiz(quesThree.question, quesThree.answer)
quiz(quesFour.question, quesFour.answer)
quiz(quesFive.question, quesFive.answer)
message()
