function submitQuiz() {
    let score = 0;
    const totalQuestions = 6;

    // Get selected answers
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');
    const answer4 = document.querySelector('input[name="q4"]:checked');
    const answer5 = document.querySelector('input[name="q5"]:checked');
    const answer6 = document.querySelector('input[name="q6"]:checked');

    // Check answers
    if (answer1 && answer1.value === "Photosynthesis") {
        score++;
    }
    if (answer2 && answer2.value === "Roots") {
        score++;
    }
    if (answer3 && answer3.value === "Oxygen") {
        score++;
    }
    if (answer4 && answer4.value === "Rose") {
        score++;
    }
    if (answer5 && answer5.value === "Venus Flytrap") {
        score++;
    }
    if (answer6 && answer6.value === "Absorb nutrients") {
        score++;
    }

    // Calculate number of virtual plants
    const plantsPlanted = score;

    // Display result
    const resultDiv = document.getElementById("quiz-result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `You scored ${score} out of ${totalQuestions}! 🌱 You've planted ${plantsPlanted} virtual plant(s)!`;
}
