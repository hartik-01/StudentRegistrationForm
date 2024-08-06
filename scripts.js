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
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    return phone.length === 10 && !isNaN(phone);
}
