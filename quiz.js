// Questions array containing 20 questions about medicinal plants and herbs
const questions = [
    {
        question: "Which plant is known as the ‘Queen of Herbs’?",
        options: ["Tulsi", "Aloe Vera", "Mint", "Basil"],
        correct: 0
    },
    {
        question: "Which herb is commonly used to soothe an upset stomach?",
        options: ["Lavender", "Peppermint", "Rosemary", "Thyme"],
        correct: 1
    },
    {
        question: "Which plant is often called the ‘Miracle Tree’?",
        options: ["Neem", "Moringa", "Ginger", "Garlic"],
        correct: 1
    },
    {
        question: "Which herb is known for its calming effects and often used in teas?",
        options: ["Chamomile", "Sage", "Basil", "Cilantro"],
        correct: 0
    },
    {
        question: "Which plant is known for its gel that soothes burns?",
        options: ["Aloe Vera", "Lavender", "Calendula", "Rose"],
        correct: 0
    },
    {
        question: "Which herb is commonly used to relieve coughs?",
        options: ["Oregano", "Peppermint", "Thyme", "Sage"],
        correct: 2
    },
    {
        question: "Which plant is known as the ‘Indian Ginseng’?",
        options: ["Ashwagandha", "Tulsi", "Ginseng", "Turmeric"],
        correct: 0
    },
    {
        question: "Which herb is used to boost memory and concentration?",
        options: ["Rosemary", "Thyme", "Basil", "Mint"],
        correct: 0
    },
    {
        question: "Which plant is used as a natural antibiotic?",
        options: ["Garlic", "Lavender", "Peppermint", "Ginger"],
        correct: 0
    },
    {
        question: "Which plant is known for its anti-inflammatory properties?",
        options: ["Turmeric", "Peppermint", "Sage", "Aloe Vera"],
        correct: 0
    },
    {
        question: "Which herb is commonly used for its antibacterial properties?",
        options: ["Oregano", "Chamomile", "Basil", "Thyme"],
        correct: 3
    },
    {
        question: "Which plant is known as ‘Holy Basil’ in India?",
        options: ["Tulsi", "Sage", "Rosemary", "Mint"],
        correct: 0
    },
    {
        question: "Which herb is often used to reduce nausea?",
        options: ["Ginger", "Lavender", "Thyme", "Chamomile"],
        correct: 0
    },
    {
        question: "Which plant is often used in skincare for its antioxidant properties?",
        options: ["Green Tea", "Mint", "Basil", "Sage"],
        correct: 0
    },
    {
        question: "Which herb is traditionally used to treat colds and flu?",
        options: ["Echinacea", "Lavender", "Rosemary", "Mint"],
        correct: 0
    },
    {
        question: "Which plant is known for aiding digestion?",
        options: ["Mint", "Sage", "Aloe Vera", "Garlic"],
        correct: 0
    },
    {
        question: "Which herb is used for its soothing properties in tea?",
        options: ["Peppermint", "Thyme", "Rosemary", "Lavender"],
        correct: 0
    },
    {
        question: "Which plant is used to improve respiratory health?",
        options: ["Eucalyptus", "Rosemary", "Lavender", "Peppermint"],
        correct: 0
    },
    {
        question: "Which plant is known as a powerful antioxidant and anti-inflammatory?",
        options: ["Turmeric", "Mint", "Sage", "Lavender"],
        correct: 0
    },
    {
        question: "Which herb is often used to relieve stress and anxiety?",
        options: ["Ashwagandha", "Thyme", "Basil", "Peppermint"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

// Function to load a question
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const resultMessage = document.getElementById('result-message');
    const nextButton = document.getElementById('next-button');

    // Clear previous options and result message
    optionsContainer.innerHTML = '';
    resultMessage.textContent = '';
    nextButton.style.display = 'none';

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Generate options
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.className = 'option-btn';
        optionButton.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionButton);
    });
}

// Function to check the answer and show result
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultMessage = document.getElementById('result-message');

    if (selectedIndex === currentQuestion.correct) {
        resultMessage.textContent = 'Correct! Well done.';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = `Wrong! The correct answer is: ${currentQuestion.options[currentQuestion.correct]}.`;
        resultMessage.style.color = 'red';
    }

    // Show Next Question button
    document.getElementById('next-button').style.display = 'block';
}

// Function to go to the next question
document.getElementById('next-button').onclick = () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Loop through questions
    loadQuestion();
};

// Load the first question initially
loadQuestion();
