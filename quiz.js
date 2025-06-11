function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer from the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    console.log(selectedOption)
    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        console.log(userAnswer)
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case where no option is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);