// 1. Secret Word Buttons ke liye logic
function checkAnswer(selectedOption) {
    const correctAnswer = '11april';

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
