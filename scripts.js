function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let errorMessages = '';

    if (name.trim() === '') {
        errorMessages += 'Name is required.<br>';
    }

    if (!validateEmail(email)) {
        errorMessages += 'Invalid email format.<br>';
    }

    if (!validatePhone(phone)) {
        errorMessages += 'Phone number must be 10 digits.<br>';
    }

    if (dob === '') {
        errorMessages += 'Date of birth is required.<br>';
    }

    if (address.trim() === '') {
        errorMessages += 'Address is required.<br>';
    }

    if (errorMessages) {
        document.getElementById('errorMessages').innerHTML = errorMessages;
        document.getElementById('successMessage').style.display = 'none';
        return false;
    } else {
        document.getElementById('errorMessages').innerHTML = '';
        document.getElementById('successMessage').style.display = 'block';
        return false; // Prevent actual form submission for demo purposes
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    return phone.length === 10 && !isNaN(phone);
}
