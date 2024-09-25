document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        window.location.href = 'index.html'; // Redirect to music player
    } else {
        alert('Please enter both username and password.');
    }
});
