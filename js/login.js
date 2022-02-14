document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');

    const emailErrorMessage = document.getElementById('email-error-message');
    const passErrorMessage = document.getElementById('pass-error-message');

    if (emailField.value == '' && passwordField.value == '') {
        emailErrorMessage.innerText = 'Email na dile tk nai, haha!';
        passErrorMessage.innerText = 'With password, money may be stolen';
    }
    else if (emailField.value == '') {
        emailErrorMessage.innerText = 'Email na dile tk nai, haha!';
        passErrorMessage.innerText = '';
    }
    else if (passwordField.value == '') {
        passErrorMessage.innerText = 'With password, money may be stolen';
        emailErrorMessage.innerText = '';
    }
    else {
        window.location.href = 'my-bank.html';
        emailErrorMessage.innerText = '';
        passErrorMessage.innerText = '';
    }
})