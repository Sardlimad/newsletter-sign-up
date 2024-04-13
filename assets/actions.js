// Wait for the DOM to be fully loaded before executing the script
window.addEventListener('DOMContentLoaded', (event) => {
    
    const contentCard = document.getElementById('content-card');
    const imageCard = document.getElementById('desktop-image');
    
    // Set the height of the image card to match the height of the content card
    const contentCardHeight = contentCard.offsetHeight;
    
    imageCard.style.height = `${contentCardHeight}px`;
  
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
  if(email.validity.valid){
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

  if(!email.validity.valid){
    // If the email is not valid, display an error message 
    showError();
  } else {
    // If the email is valid, clear the email field, hide the sign-up card, and show the success message card
    email.value = "";
    email.removeAttribute("required");
    signUpCard.style.display = "none";
    successCard.style.display = "block";
  }
  event.preventDefault(); //Prevent form submission
});

// Function to display an error message based on the email field's validity
function showError(){
  // Check if the email field is empty
  if(email.validity.valueMissing){
    emailError.textContent = "Email required";
  }else if (email.validity.typeMismatch){
    emailError.textContent = "Valid email required";
  }

  // Add the 'active' class to the error message to make it visible
  emailError.className = "invalid-feedback active";
}

// Function to show the sign-up card and hide the success message card
function showSignUpCard() {
  signUpCard.style.display = "flex";
  successCard.style.display = "none";
}
