let questions = [
    {
    "id": 1,
    "question": "What is the most general category of how you may be feeling?", 
    "answers": {
        "a": "Happy",
        "b": "Sad",
        "c": "Fearful",
        "d": "Angry", 
        "e": "Disgusted",
        "f": "Surprised", 
        "g": "Bad",
        "h": "Unsure"
        }

    }, 
{
    "id": 2,
    "question": "Think about which of these stands out to you and why.",
    "answers": {
        "a": "Playful",
        "b": "Content",
        "c": "Interested",
        "e": "Proud",
        "f": "Accepted",
        "g": "Powerful",
        "h": "Peaceful",
        "i": "Trusting",
        "j": "Optimistic"
    }
},
{ 
    "id": 3,
    "question": "Think about which of these stands out to you and why.",
    "answers": {
        "a": "Lonely",
        "b": "Vulnerable",
        "c": "Despair",
        "d": "Guilty",
        "e": "Depressed",
        "f": "Hurt"
    }
}, 
{ 
    "id": 4,
    "question": "Think about which of these stands out to you and why.",
    "answers": {
        "a": "Disapproving",
        "b": "Disappointed",
        "c": "Awful",
        "d": "Repelled"
    }
}, 
{
    "id": 5,
    "question": "Think about which of these stands out to you and why.",
    "answers": {
        "a": "Let down",
        "b": "Humiliated",
        "c": "Bitter",
        "d": "Mad",
        "e": "Aggressive",
        "f": "Frusterated",
        "g": "Distant",
        "h": "Critical"
    }
},
{
    "id": 6,
    "question": "Think about which of these stands out to you and why.",
    "answers": {
        "a": "Scared",
        "b": "Anxious",
        "c": "Insecure",
        "d": "Weak",
        "e": "Rejected",
        "f": "Threatened"
    }
}, 
{
    "id": 7,
    "question": "Think about which of these stands out to you and why.",
    "answers": {
        "a": "Bored",
        "b": "Busy",
        "c": "Stressed",
        "d": "Tired"
    }
}, 
{
    "id": 8,
    "question": "Think about which of these stands out to you and why.",
    "answers": {
        "a": "Startled",
        "b": "Confused",
        "c": "Amazed",
        "e": "Excited"
    }
}
]

const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));

console.log(questions);

let questionCounter;
let currentQuestion;

startQuiz = () => {
    questionCounter = 0;
    currentQuestion = questions[0];
    console.log(currentQuestion);
    question.innerText = currentQuestion.question;
    console.log(answers);
    let counter = 0;
    answers.forEach((answer) => {
        answer.innerText = currentQuestion.answers.a;
        
    });
    /*getNextQuestion(answer);*/
};

const getNextQuestion = (choice) => {
    if (questionCounter === 3) {
        alert("Quiz End.")
        return;
    }
    questionCounter++;
    
    /*if (answer===/*id) {

    }*/

    getNextQuestion(choice);
};

startQuiz();