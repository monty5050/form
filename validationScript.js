document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the form and input field elements
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");

  // Create a message element for feedback
  const message = document.createElement("p");
  message.style.fontWeight = "bold";
  form.appendChild(message); // Append message below the button

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting

      // Retrieve the input value
      const inputValue = inputField.value.trim();

      // Regular expression pattern for alphanumeric input
      const regex = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (regex.test(inputValue)) {
          // Valid input: display confirmation message
          message.textContent = "Success! Form submitted.";
          message.style.color = "green";
      } else {
          // Invalid input: display error message
          message.textContent = "Error: Only alphanumeric characters are allowed.";
          message.style.color = "red";
      }
  });
});

