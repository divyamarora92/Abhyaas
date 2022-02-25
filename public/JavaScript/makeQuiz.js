

function submitQues(){
const ques = document.getElementById('ques').value;
const option1 = document.getElementById('option1').value;
const option2 = document.getElementById('option2').value;
const option3 = document.getElementById('option3').value;
const option4 = document.getElementById('option4').value;
const correct = document.getElementById('correct').value;

firebase.firestore().collection('quiz').add({
    question: ques,
    choice1: option1,
    choice:option2,
    choice3:option3,
    choice4:option4,
    answer:correct,
}).then(() => window.location.href = "quizMaking.html");

}

