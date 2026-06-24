function calculateGrade() {
    const scoreInput = document.getElementById('scoreInput').value;
    const resultDiv = document.getElementById('resultOutput');

    
    const score = parseFloat(scoreInput);


    resultDiv.innerHTML = "";
    resultDiv.className = "result"; 

    
    if (scoreInput === "" || isNaN(score) || score < 0 || score > 100) {
        resultDiv.innerHTML = "Invalid Score! ";
        resultDiv.classList.add('invalid');
    } 

    else if (score >= 80) {
        resultDiv.innerHTML = "Excellent ";
        resultDiv.classList.add('excellent');
    } 
    
    else if (score >= 40) {
        resultDiv.innerHTML = "Good ";
        resultDiv.classList.add('good');
    } 

    else {
        resultDiv.innerHTML = "Fail ";
        resultDiv.classList.add('fail');
    }
}