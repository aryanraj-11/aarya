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
// --- Navigation Logic ---
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active-page');
        page.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active-page');
    selectedPage.style.display = 'block';
}

// --- Letter Logic ---
function openLetter(letterType) {
    showPage('letter-page'); 

    const titleElement = document.getElementById('letter-title');
    const textElement = document.getElementById('letter-text');

    // Messages update karein
    if (letterType === 'miss-me') {
        titleElement.textContent = "Open When... You Miss Me";
        textElement.value = "Hey love,\n\nIf you're reading this, I’m guessing you’re missing me. I miss you too, probably more than you know. Close your eyes and imagine me holding your hand, annoying you, making you laugh. Distance is temporary. What we have isn’t. I’m always yours.";
    } else if (letterType === 'we-fight') {
        titleElement.textContent = "Open When... We Fight";
        textElement.value = "If we just argued, take a breath. I never want us to be against each other. It's us versus the problem, always. I love you more than my ego, more than being right. Let's talk, fix it, and choose each other again.";
    } else if (letterType === 'youre-sad') {
        titleElement.textContent = "Open When... You're Sad";
        textElement.value = "Hi baby. I hate the thought of you feeling low. Whatever happened, it doesn’t define you. You’re stronger, softer, and more beautiful than you realize. Let yourself feel it, but don’t stay there. I’m right beside you in this, cheering you on, always.";
    }
}

// --- Tricky "No" Button Interaction ---
document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById('no-button');
    if(noButton) {
        noButton.addEventListener('mouseover', function() {
            const container = document.querySelector('.container');
            
            // Generate random positions within the container
            const maxX = container.offsetWidth - noButton.offsetWidth - 40; 
            const maxY = container.offsetHeight - noButton.offsetHeight - 40;
            
            const newX = Math.floor(Math.random() * maxX);
            const newY = Math.floor(Math.random() * maxY);

            noButton.style.position = 'absolute';
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;
        });
    }
});
// 3. "Yes" Button ke baad surprise dikhane ke liye logic
function showSurprise() {
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
}
