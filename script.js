function validateForm() {
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Please enter a valid email address.";
        return;
    }

    if (passwordInput.length < 8) {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Password must be at least 8 characters.";
        return;
    }

    // ✅ Store in localStorage
    localStorage.setItem("userEmail", emailInput);
    localStorage.setItem("userPassword", passwordInput);

    messageDiv.style.color = "lightgreen";
    messageDiv.textContent = "You have successfully signed in! Redirecting...";

    // ✅ Redirect after 1 second
    setTimeout(() => {
        window.location.href = "index.html";  // Change to the page you want to navigate to
    }, 1000);
}

// Optional: Prefill saved email
window.onload = function () {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
    }
};
function validateForm() {
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Please enter a valid email address.";
        return;
    }

    if (passwordInput.length < 8) {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Password must be at least 8 characters.";
        return;
    }

    // ✅ Store in localStorage
    localStorage.setItem("userEmail", emailInput);
    localStorage.setItem("userPassword", passwordInput);

    messageDiv.style.color = "lightgreen";
    messageDiv.textContent = "You have successfully signed in! Redirecting...";

    // ✅ Redirect after 1 second
    setTimeout(() => {
        window.location.href = "index.html";  // Change to the page you want to navigate to
    }, 1000);
}

// Optional: Prefill saved email
window.onload = function () {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
    }
};
