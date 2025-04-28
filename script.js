function validateform() {
    var fullName = document.getElementById("name").value;
    var emailAddress = document.getElementById("email").value;
    var nameErr = document.getElementById("nameErr");
    var emailErr = document.getElementById("emailErr");
    var isValid = true;

    if (fullName === "") {
        nameErr.innerHTML = "Please enter your name!";
        nameErr.style.color = "red"; 
        isValid = false;
    } else {
        nameErr.innerHTML = "";
    }

    if (emailAddress === "") {
        emailErr.innerHTML = "Please enter your email!";
        emailErr.style.color = "red";
        isValid = false;
    } else {
        emailErr.innerHTML = "";
    }

    if (!isValid) {
        return false;
    }

    return true;
}
function submitFeedback() {
    for (const key in feedback)

        if (!feedback[key] && (key !== "menuImprovement")) {
            feedbackElement.textContent = "Please provide feedback.";
            feedbackElement.className = "incorrect";
        } else {
            feedbackElement.textContent = "Thank you for your feedback!";
            feedbackElement.className = "correct";
        }
    }
    document.getElementById("feedback7").textContent = "Thank you for your feedback!";
    document.getElementById("feedback7").className = "correct";