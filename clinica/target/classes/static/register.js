document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    messageDiv.innerHTML = '';

    if (password !== confirmPassword) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Las contraseñas no coinciden.</div>';
        return;
    }

    if (password.length < 6) {
        messageDiv.innerHTML = '<div class="alert alert-danger">La contraseña debe tener al menos 6 caracteres.</div>';
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        messageDiv.innerHTML = '<div class="alert alert-danger">El correo electrónico ya está registrado.</div>';
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    messageDiv.innerHTML = '<div class="alert alert-success">Registro exitoso. Redirigiendo...</div>';
    setTimeout(() => {
        window.location.href = '/login';
    }, 2000);
});