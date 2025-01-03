document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const emailField = document.getElementById('mail');
    const countryField = document.getElementById('country');
    const zipCodeField = document.getElementById('zipcode');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const errorSpans = document.querySelectorAll('.error');

    // Reset all errors before validating
    function resetErrors() {
        errorSpans.forEach(span => span.textContent = ''); // Clear all error messages
        document.querySelectorAll('.invalid').forEach(input => input.classList.remove('invalid')); // Remove invalid class
    }

    // Validate email
    function validateEmail() {
        const emailRegexp = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const email = emailField.value;
        const errorSpan = document.getElementById('emailError');

        if (email.match(emailRegexp)) {
            errorSpan.textContent = ""; 
            emailField.classList.remove('invalid');
            return true;
        } else {
            errorSpan.textContent = "Please enter a valid email address.";
            emailField.classList.add('invalid');
            return false;
        }
    }

    // Validate country selection
    function validateCountry() {
        const country = countryField.value;
        const errorSpan = document.getElementById('countryError');

        if (!country) {
            errorSpan.textContent = "Please select a country.";
            countryField.classList.add('invalid');
            return false;
        } else {
            errorSpan.textContent = "";
            countryField.classList.remove('invalid');
            return true;
        }
    }

    // Validate zip code
    function validateZipCode() {
        const zipRegex = /^[A-Za-z0-9]{3,10}$/; // Example zip pattern
        const zip = zipCodeField.value;
        const errorSpan = document.getElementById('zipcodeError');

        if (zip.match(zipRegex)) {
            errorSpan.textContent = "";
            zipCodeField.classList.remove('invalid');
            return true;
        } else {
            errorSpan.textContent = "Invalid zip code!";
            zipCodeField.classList.add('invalid');
            return false;
        }
    }

    // Validate password
    function validatePassword() {
        const password = passwordField.value;
        const errorSpan = document.getElementById('passwordError');

        if (password.length >= 6) {
            errorSpan.textContent = "";
            passwordField.classList.remove('invalid');
            return true;
        } else {
            errorSpan.textContent = "Password must be at least 6 characters.";
            passwordField.classList.add('invalid');
            return false;
        }
    }

    // Validate confirm password
    function validateConfirmPassword() {
        const confirmPassword = confirmPasswordField.value;
        const errorSpan = document.getElementById('confirmPasswordError');

        if (confirmPassword === passwordField.value && confirmPassword.length > 0) {
            errorSpan.textContent = "";
            confirmPasswordField.classList.remove('invalid');
            return true;
        } else {
            errorSpan.textContent = "Passwords do not match.";
            confirmPasswordField.classList.add('invalid');
            return false;
        }
    }

    // General form validation
    function validateForm(event) {
        resetErrors();

        const isEmailValid = validateEmail();
        const isCountryValid = validateCountry();
        const isZipCodeValid = validateZipCode();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (!(isEmailValid && isCountryValid && isZipCodeValid && isPasswordValid && isConfirmPasswordValid)) {
            event.preventDefault(); // Stop form from submitting
        }
    }

    // Event listener for form submission
    form.addEventListener("submit", validateForm);

    // Real-time validation on input fields
    emailField.addEventListener('input', validateEmail);
    zipCodeField.addEventListener('input', validateZipCode);
    passwordField.addEventListener('input', validatePassword);
    confirmPasswordField.addEventListener('input', validateConfirmPassword);
    countryField.addEventListener('change', validateCountry);
});
