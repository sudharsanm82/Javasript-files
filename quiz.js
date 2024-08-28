document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const correctAnswers = {
        q1: 'Paris',
        q2: '50',
        q3: 'Mars',
        q4: '100',
        q5: 'Central Processing Unit'
    };
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value
    };
    let score = 0;
    for (const question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}.`;
});
