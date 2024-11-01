// Simulate "Read More" Functionality
function readMore() {
    alert("Redirecting to the full post...");
}

// Edit Profile Button Function
function editProfile() {
    alert("Redirecting to profile settings...");
}

// Handle Comment Form Submission
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const commentText = document.getElementById("commentText").value;

    if (commentText === "") {
        alert("Please write a comment.");
    } else {
        alert("Comment posted: " + commentText);
        document.getElementById("commentText").value = ""; // Clear the textarea
    }
});

// Modal Elements
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const closeLoginModal = document.getElementById("closeLoginModal");
const closeSignupModal = document.getElementById("closeSignupModal");

// Open Login Modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Open Sign Up Modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// Close Login Modal
closeLoginModal.onclick = function() {
    loginModal.style.display = "none";
}

// Close Sign Up Modal
closeSignupModal.onclick = function() {
    signupModal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}

// Simulated User Data Storage
let users = [];

// Handle Sign Up Form Submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User already exists! Please login.");
        signupModal.style.display = "none"; // Close signup modal
    } else {
        // Add new user to users array
        users.push({ name, email, password });
        alert("Sign up successful! You can now log in.");
        signupModal.style.display = "none"; // Close signup modal
    }

    // Clear form fields
    document.getElementById("signupName").value = '';
    document.getElementById("signupEmail").value = '';
    document.getElementById("signupPassword").value = '';
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check user credentials
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Login successful! Welcome, " + user.name + "!");
        document.getElementById("userName").innerText = user.name; // Update profile name
        loginModal.style.display = "none"; // Close login modal
    } else {
        alert("Invalid email or password.");
    }

    // Clear form fields
    document.getElementById("loginEmail").value = '';
    document.getElementById("loginPassword").value = '';
});