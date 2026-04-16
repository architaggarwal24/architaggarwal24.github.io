/* Contact form validation and network error handling */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    const networkErrorMessage = document.getElementById('network-error-message');

    if (!contactForm) return;

    const formElements = {
        name: contactForm.querySelector('#name'),
        email: contactForm.querySelector('#email'),
        subject: contactForm.querySelector('#subject'),
        message: contactForm.querySelector('#message')
    };

    // Network error handling functions
    function checkNetworkStatus() {
        if (!navigator.onLine) {
            // We're offline - show network error, hide form
            if (networkErrorMessage) {
                networkErrorMessage.classList.remove('hidden');
            }
            if (contactForm) {
                contactForm.hidden = true;
            }
            return false;
        } else {
            // We're online - hide network error, show form
            if (networkErrorMessage) {
                networkErrorMessage.classList.add('hidden');
            }
            if (contactForm) {
                contactForm.hidden = false;
            }
            return true;
        }
    }

    // Initial network check
    checkNetworkStatus();

    // Listen for online/offline events
    window.addEventListener('online', checkNetworkStatus);
    window.addEventListener('offline', checkNetworkStatus);

    // Validation functions
    const validateName = (name) => {
        return name.trim().length >= 2;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateSubject = (subject) => {
        return subject.trim().length >= 3;
    };

    const validateMessage = (message) => {
        return message.trim().length >= 10;
    };

    // Show error message
    const showError = (input, message) => {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');

        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--color-error, #ef4444)';
        errorElement.style.fontSize = 'var(--font-size-sm)';
        errorElement.style.marginTop = 'var(--spacing-1)';

        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }

        input.classList.add('error');
        input.style.borderColor = 'var(--color-error, #ef4444)';
    };

    // Clear error message
    const clearError = (input) => {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');

        if (errorElement) {
            errorElement.remove();
        }

        input.classList.remove('error');
        input.style.borderColor = '';
    };

    // Validate form
    const validateForm = () => {
        let isValid = true;

        // Validate name
        if (!validateName(formElements.name.value)) {
            showError(formElements.name, 'Please enter your full name (minimum 2 characters)');
            isValid = false;
        } else {
            clearError(formElements.name);
        }

        // Validate email
        if (!validateEmail(formElements.email.value)) {
            showError(formElements.email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(formElements.email);
        }

        // Validate subject
        if (!validateSubject(formElements.subject.value)) {
            showError(formElements.subject, 'Please enter a subject (minimum 3 characters)');
            isValid = false;
        } else {
            clearError(formElements.subject);
        }

        // Validate message
        if (!validateMessage(formElements.message.value)) {
            showError(formElements.message, 'Please enter a message (minimum 10 characters)');
            isValid = false;
        } else {
            clearError(formElements.message);
        }

        return isValid;
    };

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        // Don't submit if offline
        if (!navigator.onLine) {
            e.preventDefault();
            return;
        }

        e.preventDefault();

        if (validateForm()) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success';
            successMessage.textContent = 'Thank you! Your message has been sent.';

            // Insert success message before form
            contactForm.parentNode.insertBefore(successMessage, contactForm);

            // Reset form
            contactForm.reset();

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    });
});