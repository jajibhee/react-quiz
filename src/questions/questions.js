// let questionList = [
//   {
//     id: "question-1"
//     question: "How is your day",
//     answers: ["Nice and good", "Great and Lovely", "Not so good"],
//     correctAnswer: "Nice and Lovely"
//   },
//   {
//     id: "question-2",
//     question: "Did you have a good sleep",
//     answers: ["Yes I did", "No I did not"],
//     correctAnswer: "Yes I did"
//   }
// ];

// function generateQuestions(questionList) {
//   let questions = [];
//   for (question of questionList) {
//     console.log(question);
//     questions.push(buildQuestionRow(question));
//   }
//   return questions;
// }

// function buildQuestionRow(questionAndAnswers) {
//   let question = questionAndAnswers.question;
//   let answers = [];

//   for (answer of questionAndAnswers.answers) {
//     let answerString = `<label for="${questionAndAnswers.id}">
//     <input class="option-${questionAndAnswers.id}" type="radio" name="${questionAndAnswers.id}" id="4" />${answer}</label
//   >`;
//     answers.push(answerString);
//   }

//   let questionRow = `<div class="${questionAndAnswers.id}">
//   <h1>Q2: ${question}</h1>
//   ${answers.join(' ')}
// </div>`

//   return questionRow;
// }

// window.onload = function () {
//   document.querySelector(".questions_container").innerHTML = generateQuestions(questionList);
// }



let questionList = [
  {
    id: "question-1",
    no: 'Question 1',
    class: 'question1',

    question: "Did you have a good sleep",
    answers: ["Yes I did", "No I did not"],
    correctAnswer: "Yes I did"
  },
  {
    id: "question-2",
    no: 'Question 2',
    class: 'question2',

    question: "How is your day",
    answers: ["Nice and good", "Great and Lovely", "Not so good"],
    correctAnswer: "Nice and Lovely"
  },
];

// function generateQuestions(questionList) {
//   return questionList.map(questionAndAnswers => buildQuestionRow(questionAndAnswers)).join('');
// }

let generateQuestions = (questionList) => questionList.map(questionAndAnswers => buildQuestionRow(questionAndAnswers)).join('');


let buildQuestionRow = (questionAndAnswers) => {
  let answers = questionAndAnswers.answers.map((answer) => `<label for="${questionAndAnswers.id}">

  <input type="radio" name="${questionAndAnswers.id}" />${answer}</label
>`);

  return `<div class="${questionAndAnswers.class}"><h1>${questionAndAnswers.no}: ${questionAndAnswers.question}</h1><div>${answers.join('')}</div></div>`
}



window.onload = function () {
  document.querySelector(".questions_container").innerHTML = generateQuestions(questionList);

  let button = document.querySelector('.button');
  let message = document.querySelector('.message');
  let nextBtn = document.querySelector('.next');
  let prevBtn = document.querySelector('.previous');
  let questions = document.querySelectorAll('.questions_container');
  let questionOne = document.querySelector('.question1');
  let questionTwo = document.querySelector('.question2');

  let score;

  nextQuestion = () => {
    if (questionOne.nextElementSibling == null) {
      questionOne.style.display = 'block';
    } else {
      //else return the next sibling of the elem.
      questionOne.nextElementSibling.style.display = 'block';
      questionOne.style.display = 'none';

    }

  }

  questionList.answers[0];

  previousQuestion = () => {
    if (questionOne.nextElementSibling == null) {
      questionOne.style.display = 'block';
    } else {
      questionOne.style.display = 'block';
    }
    questionTwo.style.display = 'none';
  }


  let valInput = () => {
    const q1 = document.getElementById('1');
    const q2 = document.getElementById('4');
    if (q1.checked == true) {
      score = 1;

    }
    if (q2.checked == true) {
      score++;

    } else if ((q2.checked == false) && (q1.checked == false)) {
      score = 0;
    }
    else {
      score = score;
    }
    score = `${score}/2`;
    message.innerHTML = score;
    console.log(message);

  }

  button.addEventListener('click', valInput);
  nextBtn.addEventListener('click', nextQuestion);
  prevBtn.addEventListener('click', previousQuestion);

}
