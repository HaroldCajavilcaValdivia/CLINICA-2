document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    messageDiv.innerHTML = '';

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        messageDiv.innerHTML = '<div class="alert alert-success">Inicio de sesión exitoso. Redirigiendo...</div>';
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    } else {
        messageDiv.innerHTML = '<div class="alert alert-danger">Correo o contraseña incorrectos.</div>';
    }
});