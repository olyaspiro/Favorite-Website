
    // Form Validation 
    if (name === "") {
        alert("Name is required.");
        isValid = false;
    }

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    if (message === "") {
        alert("Please enter your message.");
        isValid = false;
    }




    // Tutoring price
let hourlyRate = 30; // Set your hourly rate
let hours = 5; // Number of hours

console.log(calculateTutoringPrice(hourlyRate, hours)); // Output: Total Price: $150.00




// FAQ Accordion Auto-Close
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        // Close all accordion items except the clicked one
        document.querySelectorAll('.accordion-collapse').forEach(collapse => {
            if (collapse !== this.nextElementSibling) {
                collapse.classList.remove('show');
            }
        });
    });
});





// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");  // Toggle the "dark-mode" class on body
    let modeText = document.getElementById("modeText");

    // Change text based on current mode
    if (document.body.classList.contains("dark-mode")) {
        modeText.innerText = "Light Mode";  // Switch to Light Mode
    } else {
        modeText.innerText = "Dark Mode";  // Switch to Dark Mode
    }
}