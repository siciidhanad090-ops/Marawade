const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const heroSignup = document.getElementById("heroSignup");

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

const switchSignup = document.getElementById("switchSignup");
const switchLogin = document.getElementById("switchLogin");


function showLogin() {
    loginModal.style.display = "flex";
    signupModal.style.display = "none";
}

function showSignup() {
    signupModal.style.display = "flex";
    loginModal.style.display = "none";
}

function closeModals() {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
}


loginBtn.addEventListener("click", showLogin);

signupBtn.addEventListener("click", showSignup);

heroSignup.addEventListener("click", showSignup);

closeLogin.addEventListener("click", closeModals);

closeSignup.addEventListener("click", closeModals);

switchSignup.addEventListener("click", showSignup);

switchLogin.addEventListener("click", showLogin);


// Demo signup
document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value;

    alert("Ku soo dhowow Marawade, " + name + "!");

    closeModals();
});


// Demo login
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login waa la isku dayay.");

    closeModals();
});


// Contact
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Fariintaada waa la diray.");

    this.reset();
});