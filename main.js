let questionList = [
    {
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'Hello To My Lemon',
        c: 'HyperText Make Language',
        d: 'Hydraulic Test Motor Lamborghini',
        currect: 'a',
    }, {
        question: 'When was JavaScript created?',
        a: '2005',
        b: '1995',
        c: '2000',
        d: '1990',
        currect: 'b',
    }, {
        question: 'Who introduced the iPhone 1?',
        a: 'Mark Zuckerberg',
        b: 'Tim Cook',
        c: 'Sundar Pichai',
        d: 'Steve Jobs',
        currect: 'd',
    }, {
        question: 'What is the most used programming language in 2023?',
        a: 'PHP',
        b: 'Python',
        c: 'C/C++/C#',
        d: 'JavaScript',
        currect: 'd',
    }, {
        question: 'Who is the founder of OpenAI?',
        a: 'Maxim Shafirov',
        b: 'Bill Gates',
        c: 'Sam Altman',
        d: 'Tom Preston-Werner',
        currect: 'c',
    }
];

const question = document.querySelector('.quiz-header h2');
const ansA = document.querySelector('#ans-a');
const ansB = document.querySelector('#ans-b');
const ansC = document.querySelector('#ans-c');
const ansD = document.querySelector('#ans-d');
const submitBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const box = document.querySelector('.quiz-container');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    question.innerText = questionList[currentQuestion].question;
    ansA.innerText = questionList[currentQuestion].a;
    ansB.innerText = questionList[currentQuestion].b;
    ansC.innerText = questionList[currentQuestion].c;
    ansD.innerText = questionList[currentQuestion].d;
}

function checkAnswer() {
    let answer = undefined;

    inputs.forEach(radio => {
        if (radio.checked) {
            answer = radio.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    inputs.forEach(radio => {
        if (radio) {
            radio.checked = false;
        }
    });
}

submitBtn.addEventListener('click', () => {
    const backAnswer = checkAnswer();

    deselectAnswer();

    if (backAnswer) {
        if (questionList[currentQuestion].currect == backAnswer) {
            score++;
            console.log(score);
        }
        currentQuestion++;

        if (currentQuestion < questionList.length) {
            loadQuiz();
        } else {
            box.innerHTML = `
                <div class="quiz-header">
                    <h2>Well Done! 🎉
                        <br>Your Score Is: 
                        ${score}/${questionList.length}
                    </h2>
                </div>
                <button onclick="location.reload()">
                    Again
                </button>
            `;
        }
    }

})