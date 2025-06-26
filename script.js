document.getElementById('xssForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    const outputDiv = document.getElementById('output');

    // WARNING: This is intentionally vulnerable for learning purposes!
    outputDiv.innerHTML = userInput;
});
