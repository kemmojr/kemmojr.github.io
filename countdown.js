//june 2nd end of semester 
//june 17th end of exams
//june 30th fully graded date

const endOfSemester = new Date(2023, 5, 2);
const endOfExams = new Date(2023, 5, 17);
const fullyGradedDate = new Date(2023, 5, 30);

function renderCountdown() {

    if (new Date() < endOfSemester) {
        
        document.getElementById("countdown").innerHTML = `${getDaysRemaining(endOfSemester)} days until the end of semester`;
        document.getElementById("countdown2").innerHTML = `${getDaysRemaining(endOfExams)} days until the end of exams`;
    } else if (new Date() < endOfExams) {
        document.getElementById("countdown").innerHTML = `${getDaysRemaining(endOfExams)} days until the end of exams`;
        document.getElementById("countdown2").innerHTML = `${getDaysRemaining(fullyGradedDate)} days until the release of results`;
        
    } else if (new Date() < fullyGradedDate) {
        document.getElementById("countdown").innerHTML = `${getDaysRemaining(fullyGradedDate)} days until the release of results`;
        document.getElementById("countdown2").innerHTML = "";
        
    } else {
        document.getElementById("countdown").innerHTML = `Congratulations on completing uni!`;
        document.getElementById("countdown2").innerHTML = "";

    }
}

function getDaysRemaining(date) {
    const diffTime = Math.abs(new Date() - date);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}