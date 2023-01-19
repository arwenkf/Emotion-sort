let questions = [
    {
    "id": 1,
    "question": "Generally, what category is your best guess at how you're feeling?", 
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
        "d": "Proud",
        "e": "Accepted",
        "f": "Powerful",
        "g": "Peaceful",
        "h": "Trusting",
        "i": "Optimistic"
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

let acceptingAnswers;

const generateAnswers = (currentQuestion) => {
    answers[0].innerText = currentQuestion.answers.a;
    answers[1].innerText = currentQuestion.answers.b;
    answers[2].innerText = currentQuestion.answers.c;
    answers[3].innerText = currentQuestion.answers.d;
    answers[4].innerText = currentQuestion.answers.e;
    answers[5].innerText = currentQuestion.answers.f;
    answers[6].innerText = currentQuestion.answers.g;
    answers[7].innerText = currentQuestion.answers.h;
};

startQuiz = () => {
    questionCounter = 0;
    currentQuestion = questions[0];
    console.log(currentQuestion);
    question.innerText = currentQuestion.question;
    console.log(answers);
    generateAnswers(currentQuestion);

    acceptingAnswers = true;
    answers.forEach((answer) => {
        answer.addEventListener("click", e =>{
            if(!acceptingAnswers) {
                console.log("notAccepting");
                return;
            }
            console.log(e);
            acceptingAnswers = false;
            const clickedAnswer = e.target;
            console.log(clickedAnswer);

            const choiceLetter = clickedAnswer.dataset["answer"];
            console.log(choiceLetter);
            questionCounter++;
            getNextQuestion(choiceLetter);
        });
    });
};

const getNextQuestion = (choiceLetter) => {
    if (questionCounter === 3) {
        alert("Quiz End.")
        return;
    }
    acceptingAnswers = true;
    if (choiceLetter=== 'a') {
        if (questionCounter === 1) {
            currentQuestion = questions[1];
            console.log(currentQuestion);
            question.innerText = currentQuestion.question;
            console.log(answers);
            generateAnswers(currentQuestion);
        } else if (questionCounter === 2) {

        }
        
    } else if (choiceLetter === 'b') {
        if (questionCounter === 1) {
            currentQuestion = questions[2];
            console.log(currentQuestion);
            question.innerText = currentQuestion.question;
            console.log(answers);
            generateAnswers(currentQuestion);
        } else if (questionCounter === 2) {

        }
    } else if (choiceLetter === 'c') {
        if (questionCounter === 1) {
            currentQuestion = questions[5];
            console.log(currentQuestion);
            question.innerText = currentQuestion.question;
            console.log(answers);
            generateAnswers(currentQuestion);
        } else if (questionCounter === 2) {

        }
    } else if (choiceLetter === 'd') {
        if (questionCounter === 1) {
            currentQuestion = questions[4];
            console.log(currentQuestion);
            question.innerText = currentQuestion.question;
            console.log(answers);
            generateAnswers(currentQuestion);
        } else if (questionCounter === 2) {

        }
    } else if (choiceLetter === 'e') {
        if (questionCounter === 1) {
            currentQuestion = questions[3];
            console.log(currentQuestion);
            question.innerText = currentQuestion.question;
            console.log(answers);
            generateAnswers(currentQuestion);
        } else if (questionCounter === 2) {

        }
    } else if (choiceLetter === 'f') {
        if (questionCounter === 1) {
            currentQuestion = questions[7];
            console.log(currentQuestion);
            question.innerText = currentQuestion.question;
            console.log(answers);
            generateAnswers(currentQuestion);
        } else if (questionCounter === 2) {

        }
    } else if (choiceLetter === 'g') {
        if (questionCounter === 1) {
            currentQuestion = questions[6];
            console.log(currentQuestion);
            question.innerText = currentQuestion.question;
            console.log(answers);
            generateAnswers(currentQuestion);
        } else if (questionCounter === 2) {

        }
    } else if (choiceLetter === 'h') {
        //somatic symptoms
    }
    //getNextQuestion(choiceLetter);
};


startQuiz();