// Wait for the DOM to be fully loaded before executing the script
window.addEventListener('DOMContentLoaded', (event) => {

  // Function to go sign-up page
  var dismissButton = document.getElementById('dismiss');
  if (dismissButton) {
    dismissButton.addEventListener('click', function () {
      window.location.href = 'index.html';
      console.log("SI")
    });
  }

  const contentCard = document.getElementById('content-card');
  const imageCard = document.getElementById('desktop-image');

  if (contentCard && imageCard) {
    // Set the height of the image card to match the height of the content card
    const contentCardHeight = contentCard.offsetHeight;

    imageCard.style.height = `${contentCardHeight}px`;
  }



});

// Get references to the sign-up card and success message card elements
const signUpCard = document.getElementById('sign-up-card');
const successCard = document.getElementById('success-message-card');

/*Custom Validation */
const form = document.querySelector("form");
const email = document.getElementById("email-field");
const emailError = document.querySelector("#email-field + span.invalid-feedback");


// Listen for input events on the email field to validate the email
email.addEventListener("input", (event) => {
  // If the email is valid, clear any existing error messages
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "invalid-feedback";
  } else {
    showError();
  }
});

// Listen for the form submission event to handle form submission
form.addEventListener("submit", (event) => {
  // Set the email field is marked as required
  email.setAttribute("required", "");

  if (!email.validity.valid) {
    // If the email is not valid, display an error message and prevent form submission
    showError();
    event.preventDefault();
  }

});

// Function to display an error message based on the email field's validity
function showError() {
  // Check if the email field is empty
  if (email.validity.valueMissing) {
    emailError.textContent = "Email required";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Valid email required";
  }

  // Add the 'active' class to the error message to make it visible
  emailError.className = "invalid-feedback active";
}
