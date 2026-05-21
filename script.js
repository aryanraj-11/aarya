// 1. Secret Word Buttons ke liye logic
function checkAnswer(selectedOption) {
    const correctAnswer = 'Bye'; // Srushti ka word yaha set karein

    if (selectedOption === correctAnswer) {
        // Lock screen ko chhupayein aur Valentine content dikhayein
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('valentine-content').style.display = 'block';
    } else {
        alert("Incorrect! Try again ❤️");
    }
}

// 2. "No" Button ko bhagane ke liye logic
function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'absolute'; 
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// 3. "Yes" Button ke baad surprise dikhane ke liye logic
function showSurprise() {
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
}
